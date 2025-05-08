export function AdditionalInfoTab({ info }: { info: Record<string, string> }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <tbody>
          {Object.entries(info).map(([key, value]) => (
            <tr key={key} className="border-b border-gray-200">
              <td className="py-3 pr-4 font-medium">{key}</td>
              <td className="py-3 text-gray-600">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
