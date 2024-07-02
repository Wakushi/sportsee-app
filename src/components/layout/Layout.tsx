import SideNav from "../ui/SideNav"
import Header from "./Header"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-90px)] flex bg-white">
        <SideNav />
        {children}
      </main>
    </>
  )
}
