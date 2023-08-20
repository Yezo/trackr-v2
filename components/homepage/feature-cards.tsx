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
        {icon}
        <h3>{title}</h3>
      </div>
      <Paragraph size={size}>{description}</Paragraph>
    </div>
  )
}
