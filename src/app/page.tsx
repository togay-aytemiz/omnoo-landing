import { getDictionary } from "@/i18n/dictionaries";
import { LandingPage } from "@/components/LandingPage";

export default function Home() {
  const dict = getDictionary("tr");
  return <LandingPage dict={dict} lang="tr" />;
}
