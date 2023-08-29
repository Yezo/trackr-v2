import { UpdateIcon } from "@radix-ui/react-icons"

export default function Loading() {
  return (
    <div className="grid min-h-[730px] w-full place-items-center rounded-xl p-4">
      <div className="flex flex-col items-center justify-center gap-2">
        <UpdateIcon className="h-5 w-5 animate-spin repeat-infinite" />
      </div>
    </div>
  )
}
