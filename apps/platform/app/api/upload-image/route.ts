import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("file") as File;
  const folder = formData.get("folder")?.toString() || "default";
  const fileName = formData.get("fileName")?.toString() || file.name;

  if (!file) {
    return new Response(JSON.stringify({ error: "No file provided" }), {
      status: 400,
    });
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const pixelbinForm = new FormData();
  pixelbinForm.append("file", new Blob([buffer]), fileName);
  pixelbinForm.append("cloudName", process.env.NEXT_PUBLIC_PIXELBIN_CLOUD_NAME!);
  pixelbinForm.append("path", folder);
  pixelbinForm.append("overwrite", "true");

  const base64Token = Buffer.from(process.env.NEXT_PUBLIC_PIXELBIN_API_KEY!).toString("base64");
  try {
    const uploadRes = await fetch(
      "https://api.pixelbin.io/service/platform/assets/v1.0/upload/direct",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${base64Token}`,
        },
        body: pixelbinForm,
      }
    );

    const responseText = await uploadRes.json();
    if (!uploadRes.ok) {
      const errorData = await uploadRes.json();
      return new Response(JSON.stringify({errorData}), { status: uploadRes.status });
    }
    console.log("✅ Upload success:", responseText);
    return new Response(JSON.stringify({url: responseText.url}), { status: 200 });
  } catch (uploadErr: any) {
    console.error("❌ PixelBin upload failed:", uploadErr.message);
    return new Response(JSON.stringify({
      error: uploadErr.message,
      msg: "Upload Failed"
    }), { status: 500});
  }

}
