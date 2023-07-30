"use client"

import { useSession, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"

export const AuthLinks = () => {
  const { data, status } = useSession()
  const isAuth = status === "authenticated"
  return (
    <div>
      {isAuth && (
        <span>
          Welcome, {data?.user?.name} <Button onClick={() => signOut()}>Logout</Button>
        </span>
      )}
    </div>
  )
}
