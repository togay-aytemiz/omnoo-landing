export type Dictionary = typeof tr;

export const tr = {
    header: {
        waitlist: "Bekleme Listesine Katıl",
    },
    hero: {
        title: "Akşam Ne Yesem Diye Düşünmeyin",
        subtitle: "Rutininize, tercihlerinize ve yaşam tarzınıza göre kişiselleştirilmiş haftalık yemek planları oluşturan yapay zeka şefiniz.",
        emailPlaceholder: "E-posta adresiniz",
        joinButton: "Bekleme Listesine Katıl — Erken Erişim",
        launchText: "İlk kullanıcılar için ücretsiz erken erişim",
        iosAndroid: "Yakında iOS & Android'de",
    },
    features: {
        personalized: {
            title: "Tamamen Kişiselleştirilmiş",
            desc: "İşinize, spor programınıza ve yaşam tarzınıza uyum sağlar",
        },
        cuisines: {
            title: "10+ Mutfak",
            desc: "Türk, İtalyan, Asya ve daha fazlası",
        },
        cookSmart: {
            title: "Akıllı Pişir",
            desc: "Bir kere pişir, iki kere ye verimliliği",
        },
        grocery: {
            title: "Otomatik Alışveriş",
            desc: "Haftalık alışveriş listesi dahil",
        },
    },
    badges: {
        weeklyPlan: "Haftalık Plan",
        smartSchedule: "Akıllı Program",
        curated: "Size özel seçildi",
    },
    success: {
        title: "Harika!",
        message: "Bekleme listesine eklendiniz. Yakında haberleşeceğiz!",
    }
};

export const en = {
    header: {
        waitlist: "Join Waitlist",
    },
    hero: {
        title: "Never Worry About What's for Dinner Again",
        subtitle: "Your AI personal chef that creates personalized weekly meal plans based on your routine, preferences, and lifestyle.",
        emailPlaceholder: "your@email.com",
        joinButton: "Join the Waitlist — Early Access",
        launchText: "Free early access for first users",
        iosAndroid: "Coming Soon to iOS & Android",
    },
    features: {
        personalized: {
            title: "Fully Personalized",
            desc: "Adapts to your work, gym & lifestyle",
        },
        cuisines: {
            title: "10+ Cuisines",
            desc: "Turkish, Italian, Asian & more",
        },
        cookSmart: {
            title: "Cook Smart",
            desc: "Cook once, eat twice efficiency",
        },
        grocery: {
            title: "Auto Groceries",
            desc: "Weekly shopping list included",
        },
    },
    badges: {
        weeklyPlan: "Weekly Plan",
        smartSchedule: "Smart Schedule",
        curated: "Curated just for you",
    },
    success: {
        title: "Awesome!",
        message: "You've been added to the waitlist. Talk soon!",
    }
};

export const dictionaries = { tr, en };

export const getDictionary = (lang: "tr" | "en") => dictionaries[lang];
