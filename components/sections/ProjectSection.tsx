"use client"

import { useEffect, useRef } from "react"
import useOnScreen from "@/hooks/useOnScreen"
import useScrollActive from "@/hooks/useScrollActive"
import ComingSoon from "@/public/assets/projects/coming-soon.png"
import { useSectionStore } from "@/store/section"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { StaticImageData } from "next/image"
import Link from "next/link"
import { RoughNotation } from "react-rough-notation"
import ProjectCard from "../ProjectCard"

export default function ProjectSection() {
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
  const projectSectionOnView = useScrollActive(sectionRef)
  const { setSection } = useSectionStore()

  useEffect(() => {
    projectSectionOnView && setSection("#project")
  }, [projectSectionOnView, setSection])

  return (
    <section
      ref={sectionRef}
      id="project"
      className="relative h-full bg-gray-50 dark:bg-gray-100 overflow-hidden py-14 px-10 lg:px-[5%]"
    >
      <div className="w-full max-w-[1100px] h-full m-auto flex flex-col items-center gap-14">
        <div className="w-[80%] md:w-full flex absolute left-1/2 -translate-x-1/2 flex-col gap-8 items-center">
          <RoughNotation
            type="underline"
            strokeWidth={2}
            color="hsl(157, 87%, 41%)"
            order={1}
            show={isOnScreen}
          >
            <div className="text-xl md:text-4xl tracking-tight font-medium w-fit dark:text-accentColor">
              Featured Projects
            </div>
          </RoughNotation>
          <div ref={elementRef} className="overflow-hidden ">
            <div className="qoutes-animation  md:w-full text-center font-medium flex flex-col items-center">
              <div>Good design is obvious. Great design is transparent.</div>
              <div>Design is not for philosophy, it&apos;s for life.</div>
            </div>
          </div>
        </div>
        <div className="w-full pt-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} item={project} />
          ))}
        </div>

        <div className="font-medium">
          Explore more projects in{" "}
          <Link
            href="https://github.com/saisrinivas42"
            target="_blank"
            aria-label="Expore more in my github profile"
            rel="noreferrer"
            className="text-accentColor navlink dark:hover:text-black"
          >
            my github profile
          </Link>
        </div>
      </div>
    </section>
  )
}

export interface Project {
  id: number
  title: string
  description: string
  techStacks: string[]
  image: StaticImageData
  githubURL: string
  githubApi: string
  liveURL: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Driver Drowsiness Detection System",
    description:
      "A computer vision–based system that monitors eye activity using Eye Aspect Ratio (EAR) and triggers an alert when drowsiness is detected to improve driver safety.",
    techStacks: ["Python", "OpenCV", "Computer Vision"],
    image: ComingSoon,
    githubURL: "",
    liveURL: "",
    githubApi: "",
  },
  {
    id: 2,
    title: "Axios Project in Spring Boot",
    description:
      "A Spring Boot application demonstrating REST API communication using Axios for handling asynchronous frontend requests.",
    techStacks: ["Spring Boot", "Java", "Axios", "REST API"],
    image: ComingSoon,
    githubURL: "",
    liveURL: "",
    githubApi: "",
  },
  {
    id: 3,
    title: "Online Course Selling Website",
    description:
      "A web platform that allows users to browse, purchase, and access online courses with a user-friendly interface.",
    techStacks: ["React", "Node.js", "MongoDB"],
    image: ComingSoon,
    githubURL: "",
    liveURL: "",
    githubApi: "",
  },
  {
    id: 4,
    title: "Red Tigers Security Guarding Services",
    description:
      "A professional business website showcasing security services offered across various industries.",
    techStacks: ["HTML", "CSS", "JavaScript", "React"],
    image: ComingSoon,
    githubURL: "",
    liveURL: "",
    githubApi: "",
  },
  {
    id: 5,
    title: "Semiconductor Technology Company Website",
    description:
      "A corporate website designed to present semiconductor products, services, and company information.",
    techStacks: ["React", "TypeScript", "Tailwind CSS"],
    image: ComingSoon,
    githubURL: "",
    liveURL: "",
    githubApi: "",
  },
  {
    id: 6,
    title: "Spring Boot Basic Projects",
    description:
      "A set of basic projects demonstrating core Spring Boot concepts such as REST APIs and CRUD operations.",
    techStacks: ["Spring Boot", "Java", "REST API"],
    image: ComingSoon,
    githubURL: "",
    liveURL: "",
    githubApi: "",
  },
  {
    id: 7,
    title: "Employee Management System",
    description:
      "A web-based application developed for BridgeSoft to efficiently manage employee information. The system allows administrators to add, update, view, and delete employee records through a user-friendly interface.",
    techStacks: ["ReactJS", "Spring Boot", "MySQL", "Maven", "Postman", "Git/GitHub"],
    image: ComingSoon,
    githubURL: "",
    liveURL: "",
    githubApi: "",
  },
]
