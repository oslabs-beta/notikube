// Components
import Sidebar from "../ui/dashboard/sidenav"

// export default function DashboardLayout({
//   children, // will be a page or nested layout
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <section>
//       <Sidebar/> 
//       {children}
//     </section>
//   )
// }
export default function Layout ({ children } : {children : React.ReactNode }) {

  return (
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-64">
              <Sidebar />
          </div>
          <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      </div>
  )

}