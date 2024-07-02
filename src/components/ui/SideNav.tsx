import NavIcon from "./NavIcon"

export default function SideNav() {
  return (
    <nav className="relative bg-black min-h-full p-[1.625rem] flex items-center">
      <ul className="flex flex-col gap-5">
        <NavIcon iconUrl="/images/icons/yoga.svg" desc="Yoga icon" />
        <NavIcon iconUrl="/images/icons/swim.svg" desc="Swim icon" />
        <NavIcon iconUrl="/images/icons/bike.svg" desc="Bike icon" />
        <NavIcon iconUrl="/images/icons/weight.svg" desc="Weight icon" />
      </ul>
      <span className="text-white text-xs absolute bottom-[13%] text-nowrap right-[50%] translate-x-1/2 rotate-[-90deg]">
        Copyright, SportSee {new Date().getFullYear()}
      </span>
    </nav>
  )
}
