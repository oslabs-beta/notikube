// Components
import Sidebar from "../_components/Sidebar"

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <Sidebar/> 
      {children}
    </section>
  )
}