export default async function EmbedPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return (
    <iframe
      src={`https://turbowarp.org/${id}/embed`}
      style={{
        width: "100%",
        height: "100%",
        border: "none",
      }}
      allowFullScreen={true}
      scrolling="no"
    />
  )
}