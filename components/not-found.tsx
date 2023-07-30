"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export const NotFoundRedirect = () => {
  const router = useRouter()

  useEffect(() => {
    router.push("/login")
  }, [])

  return <></>
}
