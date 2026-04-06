"use client";

import { useState } from "react";

const API = "https://the-grey-dairy-mr-black-ai.onrender.com";

export default function CreateEpisode() {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("main");
  const [price, setPrice] = useState(0);

  const createEpisode = async () => {
    const res = await fetch(`${API}/studio/episode/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        type,
        price: Number(price),
        character_id: "PUT_YOUR_CHARACTER_UUID"
      }),
    });

    const data = await res.json();

    if (data.success) {
      window.location.href = `/studio/episodes/${data.episode_id}`;
    }
  };

  return (
    <div>
      <h2>Create Episode</h2>

      <input className="input" placeholder="Title" onChange={e => setTitle(e.target.value)} />

      <select className="input" onChange={e => setType(e.target.value)}>
        <option value="main">Main</option>
        <option value="side">Side</option>
        <option value="fan">Fan</option>
      </select>

      <input className="input" placeholder="Price" onChange={e => setPrice(e.target.value)} />

      <button onClick={createEpisode} className="btn btn-primary">
        Create Episode
      </button>
    </div>
  );
}
