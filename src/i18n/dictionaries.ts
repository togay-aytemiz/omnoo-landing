export type Dictionary = typeof tr;

export const tr = {
    header: {
        waitlist: "Bekleme Listesine Katıl",
    },
    hero: {
        titleStart: "Yemek Planlamanın En",
        titleEnd: "Eğlenceli Hali",
        subtitle: "Türk damak tadına uygun, ofis ve spor rutinine göre şekillenen akıllı menüler.",
        benefits: [
            { text: "Tamamen kişiye özel modern tarifler", icon: "/1.webp" },
            { text: "Mutfak mesaisini azaltan döngü", icon: "/2.webp" },
            { text: "Bütçeyi yöneten malzeme sinerjisi", icon: "/3.webp" },
            { text: "Adım adım tarifler, besin takibi", icon: "/4.webp" }
        ],
        emailPlaceholder: "E-posta adresiniz",
        joinButton: "Erken Erişim Kazan",
        joinButtonLoading: "Kaydediliyor...",
        earlyAccessFree: "Erken erişim kullanıcılarına tamamen ücretsiz",
        secondaryCta: "Omnoo'nun farkı ne?",
        comingSoon: "Yakında",
        appStore: "App Store",
        googlePlay: "Google Play",
        mobileFooterText: "Hazır mısın?",
        mobileFooterCta: "Erken Erişim Kazan",
    },
    features: {
        personalized: {
            title: "Akıllı Haftalık Plan",
            desc: "Ofis ve spor günlerinize uyumlu, zaman kazandıran haftalık akışlar.",
        },
        cuisines: {
            title: "Yerel & Global Lezzetler",
            desc: "Türk damak tadına uygun, yerel malzemelerle 10+ dünya mutfağı.",
        },
        cookSmart: {
            title: "Maksimum Verimlilik",
            desc: "Benzer malzemeleri gruplayan, israfı önleyen akıllı reçeteler.",
        },
        grocery: {
            title: "Şeffaf İçerik & Alışveriş",
            desc: "Besin değerleri net, market listesi otomatik ve optimize.",
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
    },
    error: {
        message: "Bir hata oluştu. Lütfen tekrar deneyin.",
    }
};

export const en = {
    header: {
        waitlist: "Join Waitlist",
    },
    hero: {
        titleStart: "The Most Efficient Way to",
        titleEnd: "Plan Weekly Meals with AI",
        subtitle: "Smart menus tailored to your taste, office and gym routine.",
        benefits: [
            { text: "Fully personalized modern recipes", icon: "/1.webp" },
            { text: "Cook-once cycles that halve kitchen time", icon: "/2.webp" },
            { text: "Budget-smart ingredient synergy", icon: "/3.webp" },
            { text: "Step-by-step recipes, detailed nutrition", icon: "/4.webp" }
        ],
        emailPlaceholder: "your@email.com",
        joinButton: "Get Early Access",
        joinButtonLoading: "Saving...",
        earlyAccessFree: "Completely free for early access users",
        secondaryCta: "What makes Omnoo different?",
        comingSoon: "Coming Soon",
        appStore: "App Store",
        googlePlay: "Google Play",
        mobileFooterText: "Ready to start?",
        mobileFooterCta: "Get Early Access",
    },
    features: {
        personalized: {
            title: "Smart Weekly Planning",
            desc: "Time-saving weekly flows adaptable to your office and gym days.",
        },
        cuisines: {
            title: "Global Flavors, Local Touch",
            desc: "10+ world cuisines adapted to local ingredients and your taste.",
        },
        cookSmart: {
            title: "Maximum Efficiency",
            desc: "Smart recipes that group similar ingredients and prevent waste.",
        },
        grocery: {
            title: "Transparent & Optimized",
            desc: "Clear nutrition info and automatically optimized grocery lists.",
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
    },
    error: {
        message: "An error occurred. Please try again.",
    }
};

export const dictionaries = { tr, en };

export const getDictionary = (lang: "tr" | "en") => dictionaries[lang];
