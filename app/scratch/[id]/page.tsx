export default async function EmbedPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return (
    <iframe
      src={`https://turbowarp.org/${id}/embed?autoplay&addons=pause,gamepad,mute-project&settings-button`}
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