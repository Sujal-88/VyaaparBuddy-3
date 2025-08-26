// app/portfolio/page.js
'use client';

import { useState, useMemo } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Portfolio.module.css';

// Sample project data
const allProjects = [
  {
    id: 1,
    title: 'Aura Cosmetics',
    category: 'Branding',
    image: 'https://placehold.co/600x400/F97316/FFFFFF?text=Aura',
    description: 'Complete brand identity redesign and packaging for a modern cosmetics line.'
  },
  {
    id: 2,
    title: 'GreenLeaf Organics',
    category: 'Web Development',
    image: 'https://placehold.co/600x400/4CAF50/FFFFFF?text=GreenLeaf',
    description: 'An e-commerce platform built with Next.js for a farm-to-table delivery service.'
  },
  {
    id: 3,
    title: 'Apex Finance',
    category: 'SEO',
    image: 'https://placehold.co/600x400/2196F3/FFFFFF?text=Apex',
    description: 'A comprehensive SEO strategy that increased organic traffic by 150% in six months.'
  },
  {
    id: 4,
    title: 'TravelScape App',
    category: 'App Development',
    image: 'https://placehold.co/600x400/9C27B0/FFFFFF?text=TravelScape',
    description: 'A cross-platform mobile app for booking unique travel experiences.'
  },
  {
    id: 5,
    title: 'FutureVision Tech',
    category: 'Web Development',
    image: 'https://placehold.co/600x400/34495E/FFFFFF?text=FutureVision',
    description: 'Corporate website development focusing on performance and user experience.'
  },
  {
    id: 6,
    title: 'The Local Brew',
    category: 'Branding',
    image: 'https://placehold.co/600x400/795548/FFFFFF?text=Brew',
    description: 'Logo design and brand guidelines for a new artisanal coffee shop.'
  }
];

const categories = ['All', 'Web Development', 'Branding', 'SEO', 'App Development'];

export default function PortfolioPage() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = useMemo(
    () =>
      filter === 'All'
        ? allProjects
        : allProjects.filter((project) => project.category === filter),
    [filter]
  );

  return (
    <>
      <Head>
        <title>Our Work | Vyaapar Buddy</title>
        <meta name="description" content="Explore a selection of our finest projects at Vyaapar Buddy." />
      </Head>

      <main className={styles.portfolioContainer}>
        {/* Header Section */}
        <section className={styles.header}>
          <h1 className={styles.title}>Our Success Stories</h1>
          <p className={styles.subtitle}>
            We are proud of the work we do. Here’s a glimpse into some of the successful projects we’ve delivered for our clients.
          </p>
        </section>

        {/* Filter Section */}
        <div className={styles.filterContainer}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.filterButton} ${filter === category ? styles.active : ''}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <section className={styles.portfolioGrid}>
          {filteredProjects.map((project) => (
            <div key={project.id} className={styles.portfolioCard}>
              <div className={styles.imageContainer}>
                <Image
                  src={project.image}
                  alt={`Project image for ${project.title}`}
                  width={600}
                  height={400}
                  className={styles.portfolioImage}
                />
              </div>
              <div className={styles.cardContent}>
                <p className={styles.cardCategory}>{project.category}</p>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDescription}>{project.description}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}