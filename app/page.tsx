import { FeatureCard } from "@/components/homepage/feature-cards"
import { MainContainer } from "@/components/layout/main"
import { GradientText } from "@/components/typography/gradient-text"
import { Paragraph } from "@/components/typography/paragraph"
import { LinkButton } from "@/components/ui/link-button"
import { Separator } from "@/components/ui/separator"
import { FeatureData } from "@/lib/features"
import { ChevronRightIcon } from "@radix-ui/react-icons"
import Image from "next/image"

export default async function Home() {
  return (
    <MainContainer>
      <section className="grid place-items-center space-y-12 py-12 pb-10 sm:py-20">
        <div className="grid max-w-[550px] place-items-center gap-8 sm:gap-5">
          <div className="text-xs">
            Meet <span className="font-bold">Trackr.</span>
          </div>

          <Separator className=" max-w-[12rem]" />

          <h1 className="text-center font-spectral text-5xl font-extralight tracking-tight sm:text-6xl">
            Managing
            <GradientText>job applications</GradientText>
            just got way easier
          </h1>
          <div>
            <Paragraph position="center">Ditch the old spreadsheets.</Paragraph>
            <Paragraph position="center">Effortlessly track and manage your job hunt.</Paragraph>
          </div>
        </div>

        <LinkButton
          href="/signup"
          className="bg-blue-600 px-8 py-6 hover:bg-blue-700 dark:text-white"
        >
          Get Started <ChevronRightIcon />
        </LinkButton>

        <div className="py-20">
          <div className="grid items-start justify-center gap-8">
            <div className="group relative">
              <div className="animate-tilt absolute -inset-1 rounded-lg bg-gradient-to-bl from-blue-600 to-blue-400 opacity-50 blur transition duration-1000 group-hover:opacity-80 group-hover:duration-200 dark:from-blue-600 dark:to-blue-200"></div>
              <Image
                src="/dashboard.png"
                height={1100}
                width={1100}
                className="relative rounded-xl object-cover "
                alt="Picture of greek statue"
                quality={100}
                priority
              ></Image>
            </div>
          </div>
        </div>
      </section>

      <Separator />
      <section className="py-10">
        <h2 className="font-spectral text-4xl font-extralight tracking-tight sm:text-4xl">
          Simple, fast, and intuitive.
        </h2>

        <div className="mt-12 grid w-full grid-cols-1 gap-12 sm:grid-cols-2 md:flex-row md:gap-20 lg:grid-cols-3">
          {FeatureData.map(({ title, description, size, icon }) => (
            <FeatureCard title={title} description={description} icon={icon} size={size} />
          ))}
        </div>
      </section>
    </MainContainer>
  )
}
