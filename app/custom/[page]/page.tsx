export default async function EmbedPage({
  params,
}: {
  params: Promise<{ page: string }>
}) {
  const { page } = await params
  console.log(page)
  const deBased = atob(page.replace("%3D", ""));

  return (
    <iframe
      src={`${deBased}`}
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