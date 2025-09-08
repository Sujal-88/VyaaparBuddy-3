// app/blog/page.js
'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link'; // Import the Link component
import styles from '@/styles/Blog.module.css';

// Sample blog post data
const blogPosts = [
  {
    slug: '10-ways-to-boost-your-seo',
    title: '10 Actionable Ways to Boost Your Website\'s SEO',
    category: 'SEO',
    image: 'https://placehold.co/600x400/F97316/FFFFFF?text=SEO',
    author: 'Priya Mehta',
    date: 'August 15, 2025',
    excerpt: 'Discover simple yet effective strategies to improve your search engine ranking and drive more organic traffic.'
  },
  {
    slug: 'social-media-trends-2025',
    title: 'The Top 5 Social Media Trends to Watch in 2025',
    category: 'Marketing',
    image: 'https://placehold.co/600x400/3B5998/FFFFFF?text=Social',
    author: 'Rohan Sharma',
    date: 'August 10, 2025',
    excerpt: 'Stay ahead of the curve by understanding the latest trends that are shaping the future of social media marketing.'
  },
  {
    slug: 'creating-a-powerful-brand-identity',
    title: 'How to Create a Powerful Brand Identity',
    category: 'Branding',
    image: 'https://placehold.co/600x400/9C27B0/FFFFFF?text=Branding',
    author: 'Priya Mehta',
    date: 'August 5, 2025',
    excerpt: 'A step-by-step guide to developing a memorable brand that resonates with your target audience and builds lasting loyalty.'
  },
   {
    slug: 'why-your-business-needs-a-mobile-app',
    title: 'Why Your Business Needs a Mobile App in 2025',
    category: 'App Development',
    image: 'https://placehold.co/600x400/4CAF50/FFFFFF?text=App',
    author: 'Amit Singh',
    date: 'July 28, 2025',
    excerpt: 'Explore the key benefits of having a dedicated mobile app and how it can elevate your customer engagement.'
  },
];

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog | Vyapaar Buddy</title>
        <meta name="description" content="Latest insights, tips, and trends in digital marketing from the Vyapaar Buddy team." />
      </Head>

      <main className={styles.blogContainer}>
        {/* Header Section */}
        <section className={styles.header}>
          <h1 className={styles.title}>Marketing Insights</h1>
          <p className={styles.subtitle}>
            Your go-to source for the latest tips, trends, and strategies in the world of digital marketing.
          </p>
        </section>

        {/* Blog Grid */}
        <div className={styles.blogGrid}>
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} passHref>
              <div className={styles.blogCard}>
                <div className={styles.imageContainer}>
                  <Image
                    src={post.image}
                    alt={`Image for ${post.title}`}
                    width={600}
                    height={400}
                    className={styles.blogImage}
                  />
                </div>
                <div className={styles.cardContent}>
                  <p className={styles.cardCategory}>{post.category}</p>
                  <h2 className={styles.cardTitle}>{post.title}</h2>
                  <p className={styles.cardExcerpt}>{post.excerpt}</p>
                  <div className={styles.cardMeta}>
                    <span>By {post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}