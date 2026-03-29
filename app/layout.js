export const metadata = {
  title: "Grey Diary Studio",
  description: "Creator Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial" }}>
        <nav
          style={{
            padding: 15,
            borderBottom: "1px solid #ddd",
            display: "flex",
            gap: 20,
          }}
        >
          <a href="/studio">Dashboard</a>
          <a href="/studio/episodes">Episodes</a>
        </nav>

        <div style={{ padding: 20 }}>{children}</div>
      </body>
    </html>
  );
}
