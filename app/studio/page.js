export const dynamic = "force-dynamic";

export default function Dashboard() {
  return (
    <div>
      <h1>🖤 Grey Diary Studio</h1>

      <div style={{ marginTop: 20 }}>
        <p><strong>Total Earnings:</strong> ₹0</p>
        <p><strong>Total Unlocks:</strong> 0</p>
      </div>

      <a href="/studio/episodes">
        <button style={{ marginTop: 20 }}>
          Manage Episodes
        </button>
      </a>
    </div>
  );
}
