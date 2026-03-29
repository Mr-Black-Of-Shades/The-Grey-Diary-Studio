export const dynamic = "force-dynamic";

export default function CreateEpisode() {
  return (
    <div>
      <h1>Create Episode</h1>

      <div style={{ marginTop: 20 }}>
        <input style={input} placeholder="Title" />
        <input style={input} placeholder="Type (main/side/fan)" />
        <input style={input} placeholder="Price ₹" />

        <button style={primaryBtn}>Create Episode</button>
      </div>
    </div>
  );
}

const input = {
  display: "block",
  marginBottom: 10,
  padding: 10,
  width: 300,
  borderRadius: 6,
  border: "1px solid #ccc",
};

const primaryBtn = {
  padding: "10px 20px",
  borderRadius: 8,
  border: "none",
  background: "black",
  color: "white",
};
