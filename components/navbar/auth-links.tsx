"use client"

import { useSession, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"

export const AuthLinks = () => {
  //States
  const { data, status } = useSession()

  return (
    <div>
      {status === "authenticated" && (
        <span>
          Welcome, {data?.user?.name} <Button onClick={() => signOut()}>Logout</Button>
        </span>
      )}
    </div>
  )
}
