export const dynamic = "force-dynamic";

export default function EpisodePage({ params }) {
  const { id } = params;

  return (
    <div>
      <h1>Editing Episode {id}</h1>

      <textarea
        placeholder="Add content..."
        style={{ width: "100%", height: 150 }}
      />

      <br /><br />

      <button>Save Content</button>
    </div>
  );
}
