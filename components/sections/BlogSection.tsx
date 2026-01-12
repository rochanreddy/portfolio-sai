"use client"

import { useEffect, useRef } from "react"
import useOnScreen from "@/hooks/useOnScreen"
import useScrollActive from "@/hooks/useScrollActive"
import { useSectionStore } from "@/store/section"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { RoughNotation } from "react-rough-notation"
import ExperienceCard from "../ExperienceCard"

export default function BlogSection() {
  gsap.registerPlugin(ScrollTrigger)
  const sectionRef = useRef(null)

  const elementRef = useRef<HTMLDivElement>(null)
  const isOnScreen = useOnScreen(elementRef)

  useEffect(() => {
    const q = gsap.utils.selector(sectionRef)

    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: true,
        onEnter: () => {
          gsap.fromTo(
            q(".qoutes-animation"),
            {
              y: "-200%",
            },
            {
              y: 0,
            }
          )
        },
      },
    })
  }, [])

  // Set Active Session
  const aboutSectionOnView = useScrollActive(sectionRef)
  const { setSection } = useSectionStore()

  useEffect(() => {
    aboutSectionOnView && setSection("#experience")
  }, [aboutSectionOnView, setSection])

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="h-full bg-baseBackground py-14 px-10 lg:px-[5%]"
    >
      <div className="w-full max-w-[1100px] h-full m-auto flex flex-col items-center gap-14">
        <div className="w-[80%] md:w-full flex flex-col gap-8 items-center">
          <RoughNotation
            type="underline"
            strokeWidth={2}
            color="hsl(157, 87%, 41%)"
            order={1}
            show={isOnScreen}
          >
            <div className="text-xl md:text-4xl tracking-tight font-medium w-fit dark:text-accentColor">
              Experience
            </div>
          </RoughNotation>
          <div ref={elementRef} className="overflow-hidden flex flex-col gap-1">
            <div className="qoutes-animation mx-auto text-center text-sm dark:text-white flex flex-col items-center font-normal">
              My professional journey and work experience.
            </div>
          </div>
        </div>

        <div className="md:w-full pt-4 pb-10 flex flex-col items-start gap-6">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} item={experience} />
          ))}
        </div>
      </div>
    </section>
  )
}

export interface Experience {
  id: number
  title: string
  company: string
  companyType?: string
  period: string
  responsibilities: string[]
}

export interface Blog {
  title: string
  description: string
  image: string
  publishAt: string
  link: string
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Website Developer",
    company: "Marthux",
    companyType: "Startup",
    period: "Present",
    responsibilities: [
      "Developing responsive websites using HTML, CSS, JavaScript, and React.",
      "Building basic backend APIs using Spring Boot for form handling and data management.",
      "Integrating frontend with backend and database for dynamic content.",
    ],
  },
  {
    id: 2,
    title: "Campus Ambassador",
    company: "StockGro",
    period: "Present",
    responsibilities: [
      "Promoting StockGro programs and financial learning on campus.",
      "Helping students with registrations and event participation.",
    ],
  },
]
