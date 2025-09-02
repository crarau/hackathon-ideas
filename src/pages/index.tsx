import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            View All Project Ideas →
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="/docs/quick-picks"
            style={{marginLeft: '1rem'}}>
            Quick Picks ⚡
          </Link>
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
      link: '/docs/project-ideas/02-meeting-money',
      badges: ['Easy Build', 'Viral', 'B2B/B2C']
    },
    {
      title: '💼 AI Cold Email Personalizer',
      description: 'Generate hyper-personalized cold emails that get 10x response rates. Perfect for B2B sales teams.',
      link: '/docs/project-ideas/01-ai-cold-email',
      badges: ['High Revenue', 'B2B', 'Fast Sales']
    },
    {
      title: '🌱 EcoScore Calculator',
      description: 'Gamified carbon footprint tracker. Guaranteed environmental prize winner with viral social sharing.',
      link: '/docs/project-ideas/03-ecoscore-calculator',
      badges: ['Environmental', 'Social', 'Mobile']
    }
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--12 text--center" style={{marginBottom: '2rem'}}>
            <Heading as="h2">🔥 Top 3 Project Recommendations</Heading>
            <p>Carefully selected for maximum prize potential and feasibility in 24 hours</p>
          </div>
        </div>
        <div className="row">
          {topProjects.map((project, idx) => (
            <div key={idx} className="col col--4" style={{marginBottom: '2rem'}}>
              <div className="card" style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
                <div className="card__header">
                  <h3>{project.title}</h3>
                </div>
                <div className="card__body" style={{flex: 1}}>
                  <p>{project.description}</p>
                  <div style={{marginTop: 'auto'}}>
                    {project.badges.map((badge, i) => (
                      <span key={i} className="badge badge--primary" style={{marginRight: '0.5rem'}}>
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="card__footer">
                  <Link className="button button--primary button--block" to={project.link}>
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="row" style={{marginTop: '3rem'}}>
          <div className="col col--12 text--center">
            <Heading as="h2">📊 Quick Stats</Heading>
          </div>
        </div>
        <div className="row text--center">
          <div className="col col--3">
            <div className="card">
              <div className="card__body">
                <h3>12+</h3>
                <p>Project Ideas</p>
              </div>
            </div>
          </div>
          <div className="col col--3">
            <div className="card">
              <div className="card__body">
                <h3>24</h3>
                <p>Hours to Build</p>
              </div>
            </div>
          </div>
          <div className="col col--3">
            <div className="card">
              <div className="card__body">
                <h3>15+</h3>
                <p>Prize Categories</p>
              </div>
            </div>
          </div>
          <div className="col col--3">
            <div className="card">
              <div className="card__body">
                <h3>Sept 6-7</h3>
                <p>Hackathon Dates</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row" style={{marginTop: '3rem'}}>
          <div className="col col--12 text--center">
            <Heading as="h2">🎯 Prize Categories</Heading>
            <p>Each project targets multiple prizes for maximum winning potential</p>
          </div>
        </div>
        <div className="row">
          <div className="col col--6">
            <ul>
              <li>💰 <strong>Most Revenue</strong> - Generate real sales</li>
              <li>⚡ <strong>Fastest to First Sales</strong> - B2C: 5 sales, B2B: 1 sale</li>
              <li>👥 <strong>Most People on Waitlist</strong> - Viral signups</li>
              <li>🚀 <strong>Most Unique GTM</strong> - Creative launch</li>
              <li>🤖 <strong>Best Outbound Automation</strong> - Smart automation</li>
              <li>🌍 <strong>Best AI for Environmental Impact</strong> - Green tech</li>
            </ul>
          </div>
          <div className="col col--6">
            <ul>
              <li>🎥 <strong>Best Launch Video</strong> - Compelling storytelling</li>
              <li>🎨 <strong>Best UI</strong> - Beautiful interface</li>
              <li>📱 <strong>Hype Machine</strong> - Social media buzz</li>
              <li>🏅 <strong>Best Use of Solace Agent Mesh</strong> - Technical excellence</li>
              <li>😂 <strong>Funniest Hack</strong> - Make people laugh</li>
              <li>🎭 <strong>Best Costume</strong> - Hackathon spirit</li>
            </ul>
          </div>
        </div>

        <div className="row" style={{marginTop: '3rem'}}>
          <div className="col col--12 text--center">
            <Link className="button button--primary button--lg" to="/docs/intro">
              Explore All 12+ Project Ideas →
            </Link>
            <Link 
              className="button button--outline button--primary button--lg" 
              to="/docs/evaluation"
              style={{marginLeft: '1rem'}}>
              Evaluation Matrix 📊
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
      <HomepageHeader />
      <main>
        <ProjectCards />
      </main>
    </Layout>
  );
}
