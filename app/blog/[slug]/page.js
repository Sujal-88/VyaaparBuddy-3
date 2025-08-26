// app/blog/[slug]/page.js
import { blogPosts } from '@/data/posts';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from '@/styles/Post.module.css';

// This function tells Next.js what blog post pages to generate
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }) {
  // The `params` object contains the current URL's slug
  const { slug } = params;

  // Find the post that matches the slug from the URL
  const post = blogPosts.find((p) => p.slug === slug);

  // If no post is found, show the 404 page
  if (!post) {
    notFound();
  }

  return (
    <main className={styles.postContainer}>
      <article className={styles.postArticle}>
        <Link href="/blog" className={styles.backLink}>
          &larr; Back to Blog
        </Link>
        <h1 className={styles.postTitle}>{post.title}</h1>
        <div className={styles.meta}>
          <span>By {post.author}</span>
          <span>•</span>
          <span>{post.date}</span>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={600}
            className={styles.postImage}
            priority // Load the main image faster
          />
        </div>

        <div className={styles.postContent}>
          {/* In a real app, you would render Markdown or HTML here */}
          <p>{post.content}</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </article>
    </main>
  );
}