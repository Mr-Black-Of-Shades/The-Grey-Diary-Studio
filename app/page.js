import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Grey Diary Studio</h1>

      <br />

      <Link href="/create">Create Episode</Link>
      <br /><br />
      <Link href="/content">Add Content</Link>
    </div>
  );
}
