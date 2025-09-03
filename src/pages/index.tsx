import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HackathonBanner() {
  return (
    <div className={styles.hackathonBanner}>
      <div className={styles.hackathonContent}>
        <div className={styles.lumaEmbed}>
          <h2 className={styles.bannerTitle}>🚀 OTTAWA HACKATHON 3.0</h2>
          <p className={styles.bannerSubtitle}>September 6-7, 2025 | Build to Convert</p>
          <a 
            href="https://luma.com/9k96tg5z?tk=EqpUKv" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.registerButton}>
            🎫 REGISTER ON LUMA
          </a>
        </div>
      </div>
    </div>
  );
}

function WinningCriteria() {
  return (
    <section className={styles.criteriaSection}>
      <div className="container">
        <div className={styles.criteriaHeader}>
          <h2 className={styles.criteriaTitle}>🏆 HOW TO WIN BIG</h2>
          <p className={styles.criteriaSubtitle}>We're looking for ideas that convert FAST!</p>
        </div>
        
        <div className={styles.criteriaGrid}>
          <div className={styles.criteriaCard}>
            <div className={styles.criteriaIcon}>💰</div>
            <h3>Most Revenue</h3>
            <p>Generate REAL sales during the hackathon. Show us the money!</p>
          </div>
          
          <div className={styles.criteriaCard}>
            <div className={styles.criteriaIcon}>⚡</div>
            <h3>Fastest to Sales</h3>
            <p>B2C: 5 sales | B2B: 1 sale. Speed matters!</p>
          </div>
          
          <div className={styles.criteriaCard}>
            <div className={styles.criteriaIcon}>👥</div>
            <h3>Most Waitlist Signups</h3>
            <p>Build something people NEED. Get those emails!</p>
          </div>
          
          <div className={styles.criteriaCard}>
            <div className={styles.criteriaIcon}>🚀</div>
            <h3>Unique GTM Strategy</h3>
            <p>Creative launch = viral potential. Think outside the box!</p>
          </div>
        </div>
        
        <div className={styles.prizeHighlight}>
          <h3>💸 PRIZE POOL</h3>
          <div className={styles.prizeCategories}>
            <span className={styles.prizeTag}>🥇 1st Place: TBD</span>
            <span className={styles.prizeTag}>🥈 2nd Place: TBD</span>
            <span className={styles.prizeTag}>🥉 3rd Place: TBD</span>
            <span className={styles.prizeTag}>🎯 15+ Special Categories</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroBackground}></div>
      <div className="container">
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span className={styles.titleGradient}>HACKATHON</span>
            <span className={styles.titlePop}>IDEAS</span>
            <span className={styles.titleBounce}>VAULT</span>
          </h1>
          <p className={styles.heroSubtitle}>
            12+ Battle-Tested Project Ideas to Dominate Ottawa Hackathon 3.0
          </p>
          <div className={styles.heroButtons}>
            <Link
              className={styles.ctaButton}
              to="/docs/intro">
              🔥 EXPLORE IDEAS
            </Link>
            <Link
              className={styles.ctaButtonSecondary}
              to="/docs/quick-picks">
              ⚡ QUICK PICKS
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function ProjectCards() {
  const topProjects = [
    {
      title: '🏆 MeetingMoney',
      description: 'Calculate and display the real-time cost of your meetings. Highest viral potential with shocking cost counters.',
      link: '/docs/project-ideas/meeting-money',
      badges: ['Easy Build', 'Viral', 'B2B/B2C'],
      color: 'gold'
    },
    {
      title: '💼 AI Cold Email Personalizer',
      description: 'Generate hyper-personalized cold emails that get 10x response rates. Perfect for B2B sales teams.',
      link: '/docs/project-ideas/ai-cold-email',
      badges: ['High Revenue', 'B2B', 'Fast Sales'],
      color: 'purple'
    },
    {
      title: '🌱 EcoScore Calculator',
      description: 'Gamified carbon footprint tracker. Guaranteed environmental prize winner with viral social sharing.',
      link: '/docs/project-ideas/ecoscore-calculator',
      badges: ['Environmental', 'Social', 'Mobile'],
      color: 'green'
    }
  ];

  return (
    <section className={styles.projectSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>🔥 TOP 3 KILLER IDEAS</h2>
          <p className={styles.sectionSubtitle}>Build these to maximize your winning chances!</p>
        </div>
        
        <div className={styles.projectGrid}>
          {topProjects.map((project, idx) => (
            <div key={idx} className={styles.projectCard}>
              <div className={styles.projectCardHeader}>
                <h3>{project.title}</h3>
              </div>
              <div className={styles.projectCardBody}>
                <p>{project.description}</p>
                <div className={styles.badgeContainer}>
                  {project.badges.map((badge, i) => (
                    <span key={i} className={styles.badge}>
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
              <Link className={styles.projectCardButton} to={project.link}>
                VIEW DETAILS →
              </Link>
            </div>
          ))}
        </div>

        <div className={styles.statsSection}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>12+</div>
            <div className={styles.statLabel}>Project Ideas</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>24h</div>
            <div className={styles.statLabel}>Build Time</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>15+</div>
            <div className={styles.statLabel}>Prize Categories</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>∞</div>
            <div className={styles.statLabel}>Possibilities</div>
          </div>
        </div>

        <div className={styles.finalCta}>
          <h2 className={styles.ctaTitle}>Ready to Build Something Amazing?</h2>
          <div className={styles.ctaButtons}>
            <Link className={styles.bigButton} to="/docs/intro">
              🚀 VIEW ALL IDEAS
            </Link>
            <Link className={styles.bigButtonOutline} to="/docs/evaluation">
              📊 EVALUATION MATRIX
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Ottawa Hackathon 3.0 - Winning Project Ideas"
      description="12+ carefully curated hackathon project ideas designed to win multiple prizes. Build to Convert - Sept 6-7, 2025">
      <HackathonBanner />
      <HomepageHeader />
      <WinningCriteria />
      <main>
        <ProjectCards />
      </main>
    </Layout>
  );
}