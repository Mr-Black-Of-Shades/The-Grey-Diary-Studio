export const dynamic = "force-dynamic";

export default function EpisodesPage() {
  const episodes = [
    { id: 1, title: "Episode 1", type: "main", price: 49 },
    { id: 2, title: "Side Story", type: "side", price: 29 },
  ];

  return (
    <div>
      <h1 style={{ fontSize: 24 }}>📺 Episodes</h1>

      <a href="/studio/episodes/create">
        <button style={primaryBtn}>
          + Create Episode
        </button>
      </a>

      <div style={{ marginTop: 20 }}>
        {episodes.map((ep) => (
          <div key={ep.id} style={card}>
            <div>
              <h3>{ep.title}</h3>
              <p style={{ color: "#666" }}>
                {ep.type} • ₹{ep.price}
              </p>
            </div>

            <div>
              <a href={`/studio/episodes/${ep.id}`}>
                <button style={smallBtn}>Edit</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const card = {
  border: "1px solid #ddd",
  padding: 15,
  borderRadius: 10,
  marginBottom: 10,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const primaryBtn = {
  marginTop: 10,
  padding: "10px 20px",
  borderRadius: 8,
  border: "none",
  background: "black",
  color: "white",
};

const smallBtn = {
  padding: "6px 12px",
  borderRadius: 6,
  border: "1px solid #ccc",
};
