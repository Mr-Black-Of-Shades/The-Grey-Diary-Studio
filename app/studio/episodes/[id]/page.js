"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const API = "https://the-grey-dairy-mr-black-ai.onrender.com";

export default function EpisodePage() {
  const params = useParams();
  const id = params.id;

  const [blocks, setBlocks] = useState([]);
  const [media, setMedia] = useState([]);

  
  useEffect(() => {
    fetch(`${API}/studio/content/${id}`)
      .then(res => res.json())
      .then(setBlocks);

    fetch(`${API}/studio/media`)
      .then(res => res.json())
      .then(setMedia);
  }, [id]);

  const updateBlock = (i, value) => {
    const newBlocks = [...blocks];
    newBlocks[i].content = value;
    setBlocks(newBlocks);
  };

  const addText = () => setBlocks([...blocks, { type: "text", content: "" }]);
  const addVideo = () => setBlocks([...blocks, { type: "video", content: "" }]);

  const deleteBlock = (i) => {
    setBlocks(blocks.filter((_, index) => index !== i));
  };

  const save = async () => {
    await fetch(`${API}/studio/content/save`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ episode_id: Number(id), blocks }),
    });

    alert("Saved ✅");
  };

  return (
    <div>
      <h2>🖤 Editing Episode {id}</h2>

      {blocks.map((b, i) => (
        <div key={i} className="card">

          {b.type === "text" && (
            <textarea
              className="input"
              value={b.content}
              onChange={(e) => updateBlock(i, e.target.value)}
            />
          )}

          {b.type === "video" && (
            <select
              className="input"
              value={b.content || ""}
              onChange={(e) => updateBlock(i, e.target.value)}
            >
              <option>Select Video</option>

              {media
                .filter(m => m.type === "video")
                .map(m => (
                  <option key={m.id} value={m.file_id}>
                    Video #{m.id}
                  </option>
                ))}
            </select>
          )}

          <button className="btn btn-danger" onClick={() => deleteBlock(i)}>
            Delete
          </button>
        </div>
      ))}

      <button className="btn" onClick={addText}>+ Text</button>
      <button className="btn" onClick={addVideo}>+ Video</button>

      <br /><br />

      <button className="btn btn-primary" onClick={save}>
        Save Content
      </button>
    </div>
  );
}
