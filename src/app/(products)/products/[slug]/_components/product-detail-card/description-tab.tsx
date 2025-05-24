
export function DescriptionTab({ description }: { description: string }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold">Description</h2>
      <div className="prose"
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
    </div>
  )
}
