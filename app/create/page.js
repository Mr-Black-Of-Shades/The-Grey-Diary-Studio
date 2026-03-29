"use client";

export const dynamic = "force-dynamic";

import { useState } from "react";

const API = "https://the-grey-dairy-mr-black-ai-production.up.railway.app";

export default function Create() {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("main");
  const [price, setPrice] = useState(0);
  const [characterId, setCharacterId] = useState("");

  const submit = async () => {
    const res = await fetch(`${API}/studio/episode/create`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        title,
        type,
        price,
        character_id: characterId
      })
    });

    const data = await res.json();
    alert("Created: " + data.episode_id);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Create Episode</h2>

      <input placeholder="Title" onChange={e => setTitle(e.target.value)} />
      <br /><br />

      <select onChange={e => setType(e.target.value)}>
        <option value="main">Main</option>
        <option value="side">Side</option>
        <option value="fan">Fan</option>
      </select>

      <br /><br />

      <input placeholder="Price" type="number" onChange={e => setPrice(Number(e.target.value))} />
      <br /><br />

      <input placeholder="Character ID" onChange={e => setCharacterId(e.target.value)} />
      <br /><br />

      <button onClick={submit}>Create</button>
    </div>
  );
}
