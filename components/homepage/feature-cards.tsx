import { Paragraph } from "@/components/typography/paragraph"

type Props = {
  title: string
  description: string
  size?: string | undefined
  icon: JSX.Element
}
export const FeatureCard = ({ title, description, size, icon }: Props) => {
  return (
    <div className="flex w-full flex-col gap-3 md:gap-2">
      <div className="align-center item-center flex flex-row gap-3 md:flex-col md:gap-4">
        <div className="max-w-fit rounded-lg bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-300 via-blue-400 to-blue-700 p-2 text-white/90">
          {icon}
        </div>
        <h3>{title}</h3>
      </div>
      <Paragraph size={size}>{description}</Paragraph>
    </div>
  )
}
