"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { Experience } from "./sections/BlogSection"

interface Props {
  item: Experience
}

export default function ExperienceCard({ item }: Props) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef.current,
        start: `70% bottom`,
      },
    })

    tl.fromTo(
      cardRef.current,
      {
        y: "100%",
      },
      {
        y: 0,
        ease: "power1.inOut",
      }
    )
  }, [])

  return (
    <div
      ref={cardRef}
      className="w-full group flex flex-col gap-4 hover:bg-gray-500 rounded-md hover:bg-opacity-5 transition-colors p-4 md:p-6"
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
        <div className="flex flex-col gap-1">
          <div className="dark:text-gray-300 text-lg font-medium">
            {item.title}
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <div className="text-accentColor text-sm font-medium">
              {item.company}
            </div>
            {item.companyType && (
              <>
                <span className="text-gray-500 dark:text-gray-500">•</span>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  {item.companyType}
                </div>
              </>
            )}
            {item.period && (
              <>
                <span className="text-gray-500 dark:text-gray-500">•</span>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  {item.period}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {item.responsibilities.map((responsibility, index) => (
          <div key={index} className="flex items-start gap-2">
            <span className="text-accentColor mt-1.5">•</span>
            <div className="dark:text-gray-400 text-sm leading-relaxed flex-1">
              {responsibility}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
