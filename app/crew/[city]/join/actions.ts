"use server";

export async function submitJoinForm(
  _prevState: string | null,
  formData: FormData,
): Promise<string> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const zip = formData.get("zip") as string;
  const citySlug = formData.get("citySlug") as string;

  if (!name || !email || !zip) {
    return "Please fill in all fields.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Please enter a valid email address.";
  }

  // In production, this would POST to a webhook or write to a database
  console.log("[Crew Join]", { name, email, zip, citySlug });

  const webhookUrl = process.env.CREW_JOIN_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, zip, citySlug }),
      });
    } catch (err) {
      console.error("Failed to send join webhook:", err);
    }
  }

  return "success";
}
