"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [health, setHealth] = useState(null);

  async function checkHealth() {
    const res = await fetch("/api/health");
    setHealth(await res.json());
  }

  return (
    <main className="container">
      <h1>🚀 Deployed on Temps!</h1>
      <p className="sub">
        This Next.js app was pushed to GitHub, then pulled and deployed by Temps.
      </p>

      <section className="card">
        <h2>Counter</h2>
        <button onClick={() => setCount(count + 1)}>Clicks: {count}</button>
      </section>

      <section className="card">
        <h2>Server health</h2>
        <button onClick={checkHealth}>Check /api/health</button>
        {health && <pre>{JSON.stringify(health, null, 2)}</pre>}
      </section>
    </main>
  );
}
