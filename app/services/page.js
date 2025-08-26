// pages/services.js
import Head from 'next/head';
import ServiceCard from '@/components/ServiceCard';
import styles from '@/styles/Services.module.css';

// Importing icons from react-icons
import { FaBullhorn, FaChartLine, FaPencilRuler, FaPalette, FaCode, FaSearch, FaMobileAlt } from 'react-icons/fa';

// Define your services data
const servicesData = [
    {
        icon: <FaSearch size={40} />,
        title: 'SEO Optimization',
        description: 'Boost your visibility and rank higher on search engines to attract organic traffic.',
    },
    {
        icon: <FaBullhorn size={40} />,
        title: 'Social Media Marketing',
        description: 'Engage your audience and build a strong brand presence on platforms like Instagram, Facebook, and LinkedIn.',
    },
    {
        icon: <FaPencilRuler size={40} />,
        title: 'Content Creation',
        description: 'High-quality blog posts, articles, and videos that resonate with your audience and establish authority.',
    },
    {
        icon: <FaChartLine size={40} />,
        title: 'PPC Campaigns',
        description: 'Run targeted pay-per-click advertising campaigns on Google and social media for immediate results.',
    },
    {
        icon: <FaPalette size={40} />,
        title: 'Branding & Design',
        description: 'Create a memorable brand identity with professional logo design, color palettes, and style guides.',
    },
    {
        icon: <FaCode size={40} />,
        title: 'Web Development',
        description: 'Modern, responsive, and fast websites that provide an excellent user experience and drive conversions.',
    },
    {
        icon: <FaMobileAlt size={40} />,
        title: 'Mobile App Development',
        description: 'We build custom mobile applications for iOS and Android that are intuitive, fast, and tailored to your business goals.',
    },
];

export default function ServicesPage() {
    return (
        <>
            <Head>
                <title>Our Services | Vyaapar Buddy</title>
                <meta name="description" content="Explore the marketing services offered by Vyaapar Buddy to grow your business." />
            </Head>

            <main className={styles.servicesContainer}>
                <div className={styles.header}>
                    <h1 className={styles.title}>What We Offer</h1>
                    <p className={styles.subtitle}>
                        At Vyaapar Buddy, we provide a complete suite of marketing solutions to help your business thrive in the digital world.
                    </p>
                </div>

                <div className={styles.grid}>
                    {servicesData.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </main>
        </>
    );
}