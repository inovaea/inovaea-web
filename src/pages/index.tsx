import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="inovaea – Home Assistant Hardware"
      description="Industrial-grade hardware for Home Assistant: controllers, gateways, LED drivers and modular IoT devices."
    >
      <main style={{ padding: '3rem 1.25rem', maxWidth: 1100, margin: '0 auto' }}>
        <h1>inovaea</h1>
        <p>
          Hardware platform focused on <b>Home Assistant</b> and modern home automation:
          reliable edge controllers, gateways, and lighting drivers.
        </p>

        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1rem' }}>
          <Link className="button button--primary" to="/Hardware/overview">
            Browse hardware
          </Link>
          <Link className="button button--secondary" to="/Integrations/Overviews">
            Integrations
          </Link>
          <Link className="button button--secondary" to="/faq">
            FAQ
          </Link>
        </div>
      </main>
    </Layout>
  );
}