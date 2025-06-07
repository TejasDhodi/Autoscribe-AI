import { fetchUserByEmail } from "@/actions/user-actions";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");

  if (!email) {
    return NextResponse.json(
      { error: "Email query parameter is required" },
      { status: 400 }
    );
  }

  const result = await fetchUserByEmail(email);

  if (result.error) {
    return NextResponse.json(
      { error: result.errorMessage },
      { status: 404 }
    );
  }

  return NextResponse.json({ user: result.user });
}