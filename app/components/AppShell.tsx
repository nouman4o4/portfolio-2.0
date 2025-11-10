"use client"

import { usePathname } from "next/navigation"
import Sidebar from "./Sidebar"
import { PropsWithChildren } from "react"

export default function AppShell({ children }: PropsWithChildren) {
  const pathname = usePathname()
  const isHome = pathname === "/"

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className={`${isHome ? "block" : "hidden"} hidden lg:block`}>
          <Sidebar />
        </div>
        <main className="flex-1 min-w-0 pb-8">{children}</main>
      </div>
    </div>
  )
}
