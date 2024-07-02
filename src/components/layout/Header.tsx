export default function Header() {
  return (
    <header className="relative w-full bg-black py-[1.125rem] px-[1.75rem] max-h-[90px] flex items-center justify-between shadow-darker">
      <div className="w-[178px]">
        <img src="/images/logo/logo.png" alt="SportSee logo" />
      </div>
      <nav className="w-full">
        <ul className="flex items-center justify-around text-white w-full text-2xl">
          <li>Accueil</li>
          <li>Profil</li>
          <li>Réglage</li>
          <li>Communauté</li>
        </ul>
      </nav>
    </header>
  )
}
