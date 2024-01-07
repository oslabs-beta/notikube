// Components
import Sidebar from "../_components/Sidebar"

//refresh page every 5 mins (i think)
export const revalidate = 300;

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