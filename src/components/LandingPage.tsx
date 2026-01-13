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
            <div className={styles.contentSide}>
                <Header lang={lang} />

                <main>
                    <h1 className={styles.headline}>{dict.hero.title}</h1>
                    <p className={styles.subheadline}>{dict.hero.subtitle}</p>

                    <div className={styles.formContainer}>
                        {submitted ? (
                            <div style={{ padding: '24px', background: '#e0f2f1', borderRadius: '12px', color: '#00695c' }}>
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
                        <p className={styles.launchText}>
                            {dict.hero.launchText}
                        </p>
                        <p className={styles.launchText} style={{ marginTop: '4px' }}>
                            {dict.hero.iosAndroid}
                        </p>
                    </div>

                    <div className={styles.featuresGrid}>
                        <FeatureCard
                            icon="✨"
                            title={dict.features.personalized.title}
                            desc={dict.features.personalized.desc}
                        />
                        <FeatureCard
                            icon="🍽️"
                            title={dict.features.cuisines.title} // Fixed property name from dictionary definition
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

                <footer style={{ marginTop: 'auto', paddingTop: '32px', fontSize: '12px', color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}>
                    © {new Date().getFullYear()} Omnoo. All rights reserved.
                </footer>
            </div>

            <div className={styles.imageSide}>
                <Image
                    src="/hero-bg.jpg"
                    alt="Omnoo App Preview"
                    fill
                    className={styles.backgroundImage}
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Floating Badges overlay could go here if needed per design, but sticking to simple first */}
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
