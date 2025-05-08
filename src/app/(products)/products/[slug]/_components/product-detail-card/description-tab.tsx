
export function DescriptionTab({ description }: { description: string }) {
  return (
    <div className="prose max-w-none">
      <p className="mb-4">{description}</p>
      <p>
        The Galaxy Tab S6 Lite is your super carryable note-taking, go-getting companion. It comes with a large 10.4 &quot;
        immersive display and a premium metal finish. And with the included S Pen, you can effortlessly write, draw or
        doodle - the S Pen attaches magnetically right to your tablet and charges wirelessly, so you never have to worry
        about losing it.
      </p>
      <h3 className="mt-6 text-xl font-bold">Key Features</h3>
      <ul className="list-disc pl-5">
        <li>10.4&quot; LCD Display with slim bezels for an immersive viewing experience</li>
        <li>S Pen included for note-taking, drawing and controlling your tablet</li>
        <li>Dual speakers with Dolby Atmos surround sound</li>
        <li>Long-lasting battery for up to 12 hours of video playback</li>
        <li>Slim, lightweight design with a metal finish</li>
      </ul>
    </div>
  )
}
