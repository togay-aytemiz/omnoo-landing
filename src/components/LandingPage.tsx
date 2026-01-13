"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Dictionary } from '@/i18n/dictionaries';
import { Lang } from '@/i18n/types';
import styles from './LandingPage.module.css';

interface LandingPageProps {
    dict: Dictionary;
    lang: Lang;
}

export const LandingPage = ({ dict, lang }: LandingPageProps) => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setSubmitted(true);
            // In a real app, send to API here
            console.log('Registered:', email);
        }
    };

    return (
        <div className={styles.container}>
            {/* Background Layer */}
            <div className={styles.heroBackground}>
                <Image
                    src="/desktop-lp.webp"
                    alt="Omnoo App Preview"
                    fill
                    className={styles.backgroundImage}
                    priority
                    sizes="(max-width: 1024px) 100vw, 70vw"
                />
            </div>

            {/* Content Layer */}
            <div className={styles.contentWrapper}>
                <div className={styles.headerContainer}>
                    <Header lang={lang} />
                </div>

                <main className={styles.mainContent}>
                    <div className={styles.mobileHeroImage}>
                        <Image
                            src="/onboarding-samplemenu.png"
                            alt="Sample Menu Preview"
                            width={280}
                            height={280}
                            style={{ objectFit: 'contain' }}
                            priority
                        />
                    </div>
                    <h1 className={styles.headline}>
                        <span className={styles.headlineLight}>{dict.hero.titleStart}</span>
                        <br />
                        <span className={styles.headlineBold}>{dict.hero.titleEnd}</span>
                    </h1>
                    <p className={styles.subheadline}>{dict.hero.subtitle}</p>

                    <div className={styles.formContainer}>
                        {submitted ? (
                            <div style={{ padding: '24px', background: 'rgba(230, 255, 250, 0.8)', border: '1px solid rgba(0, 150, 136, 0.2)', borderRadius: '12px', color: '#00695c' }}>
                                <h3 style={{ marginBottom: '8px', fontFamily: 'var(--font-display)', fontWeight: 600 }}>{dict.success.title}</h3>
                                <p style={{ fontFamily: 'var(--font-body)' }}>{dict.success.message}</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className={styles.form}>
                                <Input
                                    placeholder={dict.hero.emailPlaceholder}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    type="email"
                                    aria-label="Email address"
                                />
                                <Button type="submit" fullWidth>{dict.hero.joinButton}</Button>
                            </form>
                        )}
                        <div className={styles.launchText}>
                            <span>{dict.hero.launchText}</span>
                            <span style={{ opacity: 0.5 }}>|</span>
                            <span>{dict.hero.iosAndroid}</span>
                        </div>
                    </div>

                    {/* Mobile Home Asset Image */}
                    <div className={styles.mobileAppPreview}>
                        <Image
                            src="/Landing-page-mobile-home-asset.webp"
                            alt="Omnoo Mobile App Preview"
                            width={320}
                            height={600}
                            style={{ width: '100%', height: 'auto', borderRadius: '24px' }}
                        />
                    </div>

                    <div className={styles.featuresGrid}>
                        <FeatureCard
                            icon="✨"
                            title={dict.features.personalized.title}
                            desc={dict.features.personalized.desc}
                        />
                        <FeatureCard
                            icon="🍽️"
                            title={dict.features.cuisines.title}
                            desc={dict.features.cuisines.desc}
                        />
                        <FeatureCard
                            icon="⚡"
                            title={dict.features.cookSmart.title}
                            desc={dict.features.cookSmart.desc}
                        />
                        <FeatureCard
                            icon="🛒"
                            title={dict.features.grocery.title}
                            desc={dict.features.grocery.desc}
                        />
                    </div>
                </main>

                <footer style={{ marginTop: 'auto', paddingTop: '32px', fontSize: '12px', color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)', opacity: 0.7 }}>
                    © {new Date().getFullYear()} Omnoo.
                </footer>
            </div>
        </div>
    );
};

const FeatureCard = ({ icon, title, desc }: { icon: string; title: string; desc: string }) => (
    <div className={styles.featureCard}>
        <div style={{ fontSize: '24px', marginBottom: '8px' }}>{icon}</div>
        <div className={styles.featureTitle}>{title}</div>
        <div className={styles.featureDesc}>{desc}</div>
    </div>
);
