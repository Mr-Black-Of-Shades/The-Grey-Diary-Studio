export const dynamic = "force-dynamic";

export default function CreateEpisode() {
  return (
    <div>
      <h1>Create Episode</h1>

      <input placeholder="Title" /><br /><br />
      <input placeholder="Type (main/side/fan)" /><br /><br />
      <input placeholder="Price" /><br /><br />

      <button>Create</button>
    </div>
  );
}
