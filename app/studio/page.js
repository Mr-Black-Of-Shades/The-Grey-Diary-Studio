export const dynamic = "force-dynamic";

export default function Dashboard() {
  return (
    <div>
      <h1 style={{ fontSize: 28 }}>🖤 Grey Diary Studio</h1>

      <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
        <div style={card}>
          <p>Total Earnings</p>
          <h2>₹0</h2>
        </div>

        <div style={card}>
          <p>Total Unlocks</p>
          <h2>0</h2>
        </div>
      </div>

      <a href="/studio/episodes">
        <button style={primaryBtn}>
          Manage Episodes →
        </button>
      </a>
    </div>
  );
}

const card = {
  border: "1px solid #ddd",
  padding: 20,
  borderRadius: 10,
  width: 150,
};

const primaryBtn = {
  marginTop: 30,
  padding: "10px 20px",
  borderRadius: 8,
  border: "none",
  background: "black",
  color: "white",
};
