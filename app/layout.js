import "../globals.css";

export default function Layout({ children }) {
  return (
    <html>
      <body>
        <div className="nav">
          <a href="/studio">Dashboard</a>
          <a href="/studio/episodes">Episodes</a>
        </div>

        <div className="container">{children}</div>
      </body>
    </html>
  );
}
