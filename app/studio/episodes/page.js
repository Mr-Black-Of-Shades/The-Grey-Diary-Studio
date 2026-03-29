export const dynamic = "force-dynamic";

export default function EpisodesPage() {
  const episodes = [
    { id: 1, title: "Episode 1", type: "main", price: 49 },
    { id: 2, title: "Side Story", type: "side", price: 29 },
  ];

  return (
    <div>
      <h1>📺 Episodes</h1>

      <a href="/studio/episodes/create">
        <button style={{ marginBottom: 20 }}>
          + Create Episode
        </button>
      </a>

      {episodes.map((ep) => (
        <div
          key={ep.id}
          style={{
            border: "1px solid #ddd",
            padding: 15,
            marginBottom: 10,
            borderRadius: 8,
          }}
        >
          <h3>{ep.title}</h3>
          <p>Type: {ep.type}</p>
          <p>Price: ₹{ep.price}</p>

          <a href={`/studio/episodes/${ep.id}`}>
            <button>Edit</button>
          </a>
        </div>
      ))}
    </div>
  );
}
