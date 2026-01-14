"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
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

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

const imageVariants: Variants = {
    hidden: { opacity: 0, x: 20, scale: 0.95 },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut",
            delay: 0.4,
        },
    },
};

export const LandingPage = ({ dict, lang }: LandingPageProps) => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setLoading(true);
        setError('');

        try {
            const response = await fetch('/api/waitlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (data.success) {
                setSubmitted(true);
            } else {
                setError(dict.error?.message || 'Bir hata oluştu. Lütfen tekrar deneyin.');
            }
        } catch {
            setError(dict.error?.message || 'Bir hata oluştu. Lütfen tekrar deneyin.');
        } finally {
            setLoading(false);
        }
    };

    // Determine hero image based on language
    const heroImage = lang === 'en' ? '/landing-hero-en.webp' : '/landing-hero.webp';

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
                    <div className={styles.heroSection}>
                        {/* Left Column: Text Content */}
                        <motion.div
                            className={styles.textContent}
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {/* 1. Ana Başlık & Alt Başlık */}
                            <motion.h1 className={styles.headline} variants={itemVariants}>
                                <span className={styles.headlineLight}>{dict.hero.titleStart}</span>
                                <br />
                                <span className={styles.headlineBold}>{dict.hero.titleEnd}</span>
                            </motion.h1>
                            <motion.p className={styles.subheadline} variants={itemVariants}>{dict.hero.subtitle}</motion.p>

                            {/* 2. E-posta Input & CTA Butonu */}
                            <motion.div className={styles.formContainer} variants={itemVariants}>
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
                                            disabled={loading}
                                        />
                                        <Button type="submit" fullWidth disabled={loading}>
                                            {loading ? dict.hero.joinButtonLoading : dict.hero.joinButton}
                                        </Button>
                                        {error && (
                                            <p style={{ color: '#d32f2f', fontSize: '14px', marginTop: '8px', textAlign: 'center' }}>
                                                {error}
                                            </p>
                                        )}
                                    </form>
                                )}
                                <p className={styles.earlyAccessText}>{dict.hero.earlyAccessFree}</p>
                            </motion.div>

                            {/* Mobile App Preview - Moved above benefits for mobile */}
                            <motion.div className={styles.mobileAppPreview} variants={itemVariants}>
                                <Image
                                    src={heroImage}
                                    alt="Omnoo Mobile App Preview"
                                    width={320}
                                    height={640}
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </motion.div>

                            {/* Section Title - Mobile only */}
                            <motion.h2 className={styles.benefitsSectionTitle} variants={itemVariants}>
                                {dict.hero.secondaryCta}
                            </motion.h2>

                            {/* Benefits Grid (2x2 Cardlets) */}
                            <motion.div
                                className={styles.benefitsGrid}
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                            >
                                {dict.hero.benefits.map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        className={styles.benefitCard}
                                        variants={itemVariants}
                                    >
                                        <Image
                                            src={benefit.icon}
                                            alt=""
                                            width={64}
                                            height={64}
                                            className={styles.benefitIcon}
                                        />
                                        <span className={styles.benefitText}>{benefit.text}</span>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Mobile Store Badges */}
                            <motion.div className={styles.mobileStoreBadges} variants={itemVariants}>
                                <div className={styles.storeBadge}>
                                    <svg className={styles.storeIcon} viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                    </svg>
                                    <div className={styles.storeBadgeText}>
                                        <span className={styles.storeComingSoon}>{dict.hero.comingSoon}</span>
                                        <span className={styles.storeName}>{dict.hero.appStore}</span>
                                    </div>
                                </div>
                                <div className={styles.storeBadge}>
                                    <svg className={styles.storeIcon} viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                                    </svg>
                                    <div className={styles.storeBadgeText}>
                                        <span className={styles.storeComingSoon}>{dict.hero.comingSoon}</span>
                                        <span className={styles.storeName}>{dict.hero.googlePlay}</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Mobile Footer CTA - Only visible on mobile */}
                            <div className={styles.mobileFooterCta}>
                                <div className={styles.mobileFooterDivider} />
                                <p className={styles.mobileFooterText}>{dict.hero.mobileFooterText}</p>
                                <button
                                    type="button"
                                    className={styles.mobileFooterButton}
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                >
                                    {dict.hero.mobileFooterCta}
                                </button>
                            </div>
                        </motion.div>

                        {/* Right Column: Phone Mockup */}
                        <div className={styles.visualContent}>
                            <motion.div
                                className={styles.appPreview}
                                variants={imageVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <Image
                                    src={heroImage}
                                    alt="Omnoo Mobile App Preview"
                                    width={500}
                                    height={1000}
                                    style={{ width: '100%', height: 'auto' }}
                                    priority
                                />
                            </motion.div>
                        </div>
                    </div>
                </main>
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
