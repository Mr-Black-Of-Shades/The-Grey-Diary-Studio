"use client";

export const dynamic = "force-dynamic";

import { useState } from "react";

const API = "https://the-grey-dairy-mr-black-ai-production.up.railway.app";

export default function Content() {
  const [episodeId, setEpisodeId] = useState("");
  const [type, setType] = useState("text");
  const [content, setContent] = useState("");

  const submit = async () => {
    await fetch(`${API}/studio/content/add`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        episode_id: Number(episodeId),
        type,
        content
      })
    });

    alert("Added");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Add Content</h2>

      <input placeholder="Episode ID" onChange={e => setEpisodeId(e.target.value)} />
      <br /><br />

      <select onChange={e => setType(e.target.value)}>
        <option value="text">Text</option>
        <option value="photo">Photo</option>
        <option value="video">Video</option>
      </select>

      <br /><br />

      <input placeholder="Content / File ID" onChange={e => setContent(e.target.value)} />
      <br /><br />

      <button onClick={submit}>Add</button>
    </div>
  );
}
