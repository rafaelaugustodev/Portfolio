import React from "react"
import { Spotlight } from "./ui/Spotlight"
import { cn } from "@/lib/utils"
import { TextGenerateEffect } from "./ui/TextGenerateEffect"
import MagicButton from "./ui/MagicButton"
import { FaLocationArrow } from "react-icons/fa"

const Hero = () => {
  return (
    <div className="relative pb-20 pt-28 md:pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full md:-left-32 md:-top-20 h-[80vh] w-[50vh]"
          fill="purple"
        />
        <Spotlight
          className="top-28 left-80 h-[80vh] w-[50vh]"
          fill="blue"
        />
      </div>

      <div className="h-screen w-full bg-black-100 flex items-center justify-center absolute top-0 left-0">
        <div
          className={cn(
            "absolute inset-0",
            "bg-size-[40px_40px]",
            "bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]"
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black-100 mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-10 md:my-20 z-10">
        <div className="max-w-[89vw] md:max-w-5xl lg:max-w-[60vw] flex flex-col items-center justify-center px-4">
          <h2 className="uppercase tracking-widest text-[10px] md:text-xs text-center text-blue-100 max-w-80 mb-2">
            Página Web Dinâmica com Next.js
          </h2>

          <TextGenerateEffect
            className="text-center text-[32px] md:text-5xl lg:text-6xl leading-tight"
            words="Transformando conceitos em soluções digitais perfeitas"
          />

          <p className="text-center md:tracking-wider mb-6 mt-4 text-sm md:text-lg lg:text-xl max-w-md md:max-w-2xl">
            Olá, eu sou o Rafael, um desenvolvedor que foca na experiência do usuário.
          </p>

          <a href="#sobre">
            <MagicButton
              title="Veja meu trabalho"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero