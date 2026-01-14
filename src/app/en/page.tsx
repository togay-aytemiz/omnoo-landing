import { getDictionary } from "@/i18n/dictionaries";
import { LandingPage } from "@/components/LandingPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Meet Omnoo! 🥦 Your Kitchen's New Joy",
    description: "We're turning dinner planning from a chore into pure fun. Join the waitlist and be the first to experience the kitchen revolution!",
};

export default function HomeEn() {
    const dict = getDictionary("en");
    return <LandingPage dict={dict} lang="en" />;
}
