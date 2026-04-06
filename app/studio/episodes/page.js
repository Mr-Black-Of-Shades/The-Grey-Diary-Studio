"use client";

import { useEffect, useState } from "react";

const API = "https://the-grey-dairy-mr-black-ai.onrender.com";

export default function EpisodesPage() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetch(`${API}/studio/episode/list`)
      .then(res => res.json())
      .then(setEpisodes);
  }, []);

  return (
    <div>
      <h2>📺 Episodes</h2>

      <a href="/studio/episodes/create">
        <button className="btn btn-primary">+ Create Episode</button>
      </a>

      <div style={{ marginTop: 20 }}>
        {episodes.map(ep => (
          <div key={ep.id} className="card">
            <h3>{ep.title}</h3>
            <p style={{ color: "#aaa" }}>
              {ep.type} • ₹{ep.price}
            </p>

            <a href={`/studio/episodes/${ep.id}`}>
              <button className="btn">Edit</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
