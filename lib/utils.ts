import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function getData(id: string | undefined) {
  try {
    const data = await fetch(`${process.env.LIVE_URL}/api/job/${id}`, {
      // const data = await fetch(`${process.env.LOCAL_URL}/api/job/${id}`, {
      cache: "no-store",
    }).then((res) => res.json())
    return data
  } catch (error) {
    console.log(error)
  }
}
