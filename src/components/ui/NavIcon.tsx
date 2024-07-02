export default function NavIcon({
  iconUrl,
  desc,
}: {
  iconUrl: string
  desc: string
}) {
  return (
    <li className="bg-white p-2 rounded">
      <img src={iconUrl} alt={desc} />
    </li>
  )
}
