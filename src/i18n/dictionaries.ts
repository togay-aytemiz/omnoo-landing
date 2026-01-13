export type Dictionary = typeof tr;

export const tr = {
    header: {
        waitlist: "Bekleme Listesine Katıl",
    },
    hero: {
        titleStart: "Yemek Planlamanın En",
        titleEnd: "Eğlenceli Hali",
        subtitle: "Türk damak tadına uygun, ofis ve spor rutinine göre şekillenen akıllı menüler. Bir pişir iki ye mantığıyla hem zamandan hem bütçeden kazan.",
        emailPlaceholder: "E-posta adresiniz",
        joinButton: "Bekleme Listesine Katıl — Erken Erişim",
        launchText: "İlk kullanıcılar için ücretsiz erken erişim",
        iosAndroid: "Yakında iOS & Android'de",
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
    }
};

export const en = {
    header: {
        waitlist: "Join Waitlist",
    },
    hero: {
        titleStart: "The Most Efficient Way to",
        titleEnd: "Plan Weekly Meals with AI",
        subtitle: "Automate your weekly plan with Omnoo, your personal chef that optimizes every step from shopping to cooking, tailored to your taste, office, and gym routine.",
        emailPlaceholder: "your@email.com",
        joinButton: "Join the Waitlist — Early Access",
        launchText: "Free early access for first users",
        iosAndroid: "Coming Soon to iOS & Android",
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
    }
};

export const dictionaries = { tr, en };

export const getDictionary = (lang: "tr" | "en") => dictionaries[lang];
