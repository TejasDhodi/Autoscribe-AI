import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { getEmailsList } = await import("@/actions/user-uploads-actions");
    const response = await getEmailsList();
    return NextResponse.json(response, {
      status: response.success ? 200 : 400,
    });
  } catch (error) {
    console.error("Error fetching email list:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch email list",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { uploadEmailList } = await import("@/actions/user-uploads-actions");
    const { listName, emailsData } = await request.json();

    if (!listName || !emailsData || !Array.isArray(emailsData)) {
      return NextResponse.json(
        { success: false, message: "Invalid input data" },
        { status: 400 }
      );
    }

    const response = await uploadEmailList({ listName, emailsData });
    return NextResponse.json(response, {
      status: response.success ? 200 : 400,
    });
  } catch (error) {
    console.error("Error uploading email list:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to upload email list",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { deleteEmailList } = await import("@/actions/user-uploads-actions");
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Invalid input data" },
        { status: 400 }
      );
    }

    const response = await deleteEmailList(id);
    return NextResponse.json(response, {
      status: response.success ? 200 : 400,
    });
  } catch (error) {
    console.error("Error deleting email list:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete email list",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
