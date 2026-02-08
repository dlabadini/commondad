import { redirect } from "next/navigation";

export const metadata = {
  title: "Mission",
};

export default function WhoWeAreRedirect() {
  redirect("/mission");
}

