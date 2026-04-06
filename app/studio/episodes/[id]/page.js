"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const API = "https://the-grey-dairy-mr-black-ai.onrender.com";

export default function EpisodePage() {
  const params = useParams();
  const id = params?.id;

  const [blocks, setBlocks] = useState([]);
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  // 🧠 FETCH DATA
  useEffect(() => {
    if (!id) return;

    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);

        const [contentRes, mediaRes] = await Promise.all([
          fetch(`${API}/studio/content/${id}`),
          fetch(`${API}/studio/media`)
        ]);

        const contentData = await contentRes.json();
        const mediaData = await mediaRes.json();

        setBlocks(Array.isArray(contentData) ? contentData : []);
        setMedia(Array.isArray(mediaData) ? mediaData : []);

      } catch (err) {
        console.error(err);
        setError("Failed to load episode data");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [id]);

  // 🛑 LOADING UI
  if (!id || loading) {
    return (
      <div style={{ padding: 20 }}>
        <p>Loading episode...</p>
      </div>
    );
  }

  // ❌ ERROR UI
  if (error) {
    return (
      <div style={{ padding: 20 }}>
        <p style={{ color: "red" }}>{error}</p>
      </div>
    );
  }

  // ✏️ UPDATE BLOCK
  const updateBlock = (index, value) => {
    setBlocks(prev => {
      const newBlocks = [...prev];
      newBlocks[index] = { ...newBlocks[index], content: value };
      return newBlocks;
    });
  };

  // ➕ ADD BLOCKS
  const addText = () => {
    setBlocks(prev => [...prev, { type: "text", content: "" }]);
  };

  const addVideo = () => {
    setBlocks(prev => [...prev, { type: "video", content: "" }]);
  };

  // 🗑 DELETE BLOCK
  const deleteBlock = (index) => {
    setBlocks(prev => prev.filter((_, i) => i !== index));
  };

  // 💾 SAVE
  const save = async () => {
    try {
      setSaving(true);

      const res = await fetch(`${API}/studio/content/save`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          episode_id: Number(id),
          blocks,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        throw new Error("Save failed");
      }

      alert("Saved ✅");

    } catch (err) {
      console.error(err);
      alert("Error saving content");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      <h2>🖤 Editing Episode {id}</h2>

      {blocks.length === 0 && (
        <p style={{ color: "#aaa" }}>No content yet. Add blocks below.</p>
      )}

      {blocks.map((b, i) => (
        <div key={i} className="card">

          {/* TEXT BLOCK */}
          {b.type === "text" && (
            <textarea
              className="input"
              value={b.content || ""}
              onChange={(e) => updateBlock(i, e.target.value)}
              placeholder="Write your story..."
            />
          )}

          {/* VIDEO BLOCK */}
          {b.type === "video" && (
            <select
              className="input"
              value={b.content || ""}
              onChange={(e) => updateBlock(i, e.target.value)}
            >
              <option value="">Select Video</option>

              {media
                .filter((m) => m.type === "video")
                .map((m) => (
                  <option key={m.id} value={m.file_id}>
                    Video #{m.id}
                  </option>
                ))}
            </select>
          )}

          <button
            className="btn btn-danger"
            onClick={() => deleteBlock(i)}
          >
            Delete
          </button>
        </div>
      ))}

      <div style={{ marginTop: 20 }}>
        <button className="btn" onClick={addText}>+ Text</button>
        <button className="btn" onClick={addVideo}>+ Video</button>
      </div>

      <br />

      <button
        className="btn btn-primary"
        onClick={save}
        disabled={saving}
      >
        {saving ? "Saving..." : "Save Content"}
      </button>
    </div>
  );
}
