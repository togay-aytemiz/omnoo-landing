import { getDictionary } from "@/i18n/dictionaries";
import { LandingPage } from "@/components/LandingPage";

export default function HomeEn() {
    const dict = getDictionary("en");
    return <LandingPage dict={dict} lang="en" />;
}
