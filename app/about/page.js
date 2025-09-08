// app/about/page.js
'use client';

import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/About.module.css';
import { FaUsers, FaLightbulb, FaRocket } from 'react-icons/fa';

// Team members data
const teamMembers = [
  {
    name: 'Harsh Dound',
    role: 'Founder & CEO',

    image: '/images/harsh.jpg',
  },
  {
    name: 'Swami Pawtekar',
    role: 'Head of Marketing',
    image: '/images/swami.webp',
  },
  {
    name: 'Sujal Kothale',
    role: 'Lead Developer',
    image: '/images/sujal.png',
  },
];

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | Vyapaar Buddy</title>
        <meta name="description" content="Learn about the mission, vision, and team behind Vyapaar Buddy." />
      </Head>

      <main className={styles.aboutContainer}>
        {/* Header Section */}
        <section className={styles.header}>
          <h1 className={styles.title}>We&apos;re Your Partner in Growth</h1>
          <p className={styles.subtitle}>
            Vyapaar Buddy started with a simple mission: to help businesses of all sizes navigate the complexities of the digital world and achieve real, measurable growth.
          </p>
        </section>

        {/* Mission and Vision Section */}
        <section className={styles.missionSection}>
          <div className={styles.missionContent}>
            <h2>Our Mission</h2>
            <p>To provide innovative and effective marketing strategies that deliver exceptional results, empowering our clients to become leaders in their industries.</p>
          </div>
          <div className={styles.visionContent}>
            <h2>Our Vision</h2>
            <p>To be the most trusted and results-driven digital marketing agency in India, known for our creativity, expertise, and unwavering commitment to client success.</p>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className={styles.whyChooseUs}>
            <h2 className={styles.sectionTitle}>Why Partner With Us?</h2>
            <div className={styles.featuresGrid}>
                <div className={styles.featureCard}>
                    <FaUsers size={40} className={styles.featureIcon} />
                    <h3>Client-Centric Approach</h3>
                    <p>Your goals are our goals. We build lasting partnerships based on transparency and mutual success.</p>
                </div>
                <div className={styles.featureCard}>
                    <FaLightbulb size={40} className={styles.featureIcon} />
                    <h3>Data-Driven Strategies</h3>
                    <p>We leverage data and analytics to make informed decisions and optimize for the best possible ROI.</p>
                </div>
                <div className={styles.featureCard}>
                    <FaRocket size={40} className={styles.featureIcon} />
                    <h3>Commitment to Innovation</h3>
                    <p>The digital landscape is always changing, and we stay ahead of the curve to keep you on top.</p>
                </div>
            </div>
        </section>

        {/* Team Section */}
        <section className={styles.teamSection}>
          <h2 className={styles.sectionTitle}>Meet the Experts</h2>
          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <div key={index} className={styles.teamCard}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={member.image}
                    alt={`Photo of ${member.name}`}
                    width={200}
                    height={200}
                    className={styles.teamImage}
                  />
                </div>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberRole}>{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
