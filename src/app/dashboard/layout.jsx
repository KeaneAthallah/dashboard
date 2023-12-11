import Navbar from "@/components/dashboard/navbar/navbar"
import Sidebar from "@/components/dashboard/sidebar/sidebar"
import React from "react"

const layout = ({ children }) => {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div>
        <Navbar />
        {children}
      </div>
    </div>
  )
}

export default layout
