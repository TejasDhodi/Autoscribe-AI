"use server";

import { IEmailList } from "@/types/email-list";
import { TODO } from "@/types/utility.types";
import { db } from "@autoscribe/db";
import { auth } from "@clerk/nextjs/server";

export const getEmailsList = async (): Promise<{
  success: boolean;
  message: string;
  emailLists?: TODO;
  error?: string;
}> => {
  const { userId: clerkUserId } = await auth();
  if (!clerkUserId) {
    return { success: false, message: "Unauthorized" };
  }

  const user = await db.user.findUnique({
    where: { clerkId: clerkUserId },
    select: {
      workspaces: true,
      id: true,
      clerkId: true,
      email: true,
    },
  });

  if (!user) {
    return { success: false, message: "User not found" };
  }

  const workspace = user.workspaces[0];
  if (!workspace) {
    return { success: false, message: "No workspace found for user" };
  }

  try {
    return await db.$transaction(async (tx) => {
      const emailLists = await tx.emailList.findMany({
        where: {
          workspaceId: workspace.workspaceId,
        },
        select: {
          id: true,
          name: true,
          createdAt: true,
          emails: {
            select: {
              id: true,
              email: true,
              name: true,
              meta: true,
              createdAt: true,
            },
          },
        },
      });

      return {
        success: true,
        message: "Success.",
        emailLists,
      };
    });
  } catch (error) {
    console.error("Email list upload failed:", error);
    return {
      success: false,
      message: "Failed to upload email list",
      error: (error as Error).message,
    };
  }
};

export const uploadEmailList = async ({ listName, emailsData }: IEmailList) => {
  const { userId: clerkUserId } = await auth();
  if (!clerkUserId) {
    return { message: "No Logged In User" };
  }

  const user = await db.user.findUnique({
    where: { clerkId: clerkUserId },
    select: {
      workspaces: true,
      id: true,
      clerkId: true,
      email: true,
    },
  });

  if (!user) {
    return { success: false, message: "User not found" };
  }

  const workspace = user.workspaces[0];
  if (!workspace) {
    return { success: false, message: "No workspace found for user" };
  }

  try {
    return await db.$transaction(async (tx) => {
      const emailList = await tx.emailList.create({
        data: {
          name: listName,
          uploadedById: user.id,
          workspaceId: workspace.workspaceId,
        },
      });

      await Promise.all(
        emailsData.map((data) =>
          tx.emailContact.create({
            data: {
              email: data.email,
              name: data.name || "",
              meta: data.meta || {},
              emailListId: emailList.id,
            },
          })
        )
      );

      return {
        success: true,
        message: "Email list uploaded successfully",
        emailListId: emailList.id,
      };
    });
  } catch (error) {
    console.error("Email list upload failed:", error);
    return {
      success: false,
      message: "Failed to upload email list",
      error: (error as Error).message,
    };
  }
};

export const deleteEmailList = async (emailListId: string) => {
  const { userId: clerkUserId } = await auth();
  if (!clerkUserId) {
    return { success: false, message: "Unauthorized" };
  }

  try {
    await db.emailList.delete({
      where: {
        id: emailListId,
      },
    });
    return { success: true, message: "Email list deleted successfully" };
  } catch (error) {
    console.error("Failed to delete email list:", error);
    return {
      success: false,
      message: "Failed to delete email list",
      error: (error as Error).message,
    };
  }
};
