import { Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Header from "../header"
import Image from "next/image"

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Fiskil",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Next.js",
        "PostgreSQL",
        "TailwindCSS",
        "Figma",
        "Cypress",
        "Storybook",
        "Git",
      ],
      imagePosition: "right",
    },
    {
      id: 2,
      title: "Fiskil",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Next.js",
        "PostgreSQL",
        "TailwindCSS",
        "Figma",
        "Cypress",
        "Storybook",
        "Git",
      ],
      imagePosition: "left",
    },
    {
      id: 3,
      title: "Fiskil",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Next.js",
        "PostgreSQL",
        "TailwindCSS",
        "Figma",
        "Cypress",
        "Storybook",
        "Git",
      ],
      imagePosition: "right",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">Some of my recent work</p>
          </div>

          <div className="space-y-12">
            {projects.map((project) => (
              <div key={project.id} className="bg-gray-50 rounded-lg p-8 flex flex-col md:flex-row gap-8 items-center">
                {project.imagePosition === "left" ? (
                  <>
                    <div className="w-full md:w-1/2">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="rounded-lg shadow-md w-full h-auto"
                      />
                    </div>
                    <div className="w-full md:w-1/2 space-y-4">
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <p className="text-gray-600">{project.description}</p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.technologies.slice(0, 4).map((tech, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="bg-gray-200 text-gray-800 hover:bg-gray-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(4, 8).map((tech, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="bg-gray-200 text-gray-800 hover:bg-gray-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(8).map((tech, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="bg-gray-200 text-gray-800 hover:bg-gray-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="pt-2">
                        <Button variant="ghost" size="icon" className="rounded-full">
                          <Share2 className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-full md:w-1/2 space-y-4 order-2 md:order-1">
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <p className="text-gray-600">{project.description}</p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.technologies.slice(0, 4).map((tech, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="bg-gray-200 text-gray-800 hover:bg-gray-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(4, 8).map((tech, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="bg-gray-200 text-gray-800 hover:bg-gray-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(8).map((tech, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="bg-gray-200 text-gray-800 hover:bg-gray-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="pt-2">
                        <Button variant="ghost" size="icon" className="rounded-full">
                          <Share2 className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 order-1 md:order-2">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="rounded-lg shadow-md w-full h-auto"
                      />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">My Skills</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {/* Row 1 */}
            <div className="border-2 border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center aspect-square bg-white hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">⚡</div>
              <span className="font-medium text-gray-900">Git</span>
            </div>

            <div className="border-2 border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center aspect-square bg-black hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3 text-white font-bold">JS</div>
              <span className="font-medium text-white">Javascript</span>
            </div>

            <div className="border-2 border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center aspect-square bg-white hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3 italic font-bold">Sass</div>
              <span className="font-medium text-gray-900">Sass/Scss</span>
            </div>

            <div className="border-2 border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center aspect-square bg-white hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">🦅</div>
              <span className="font-medium text-gray-900">Nest.Js</span>
            </div>

            <div className="border-2 border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center aspect-square bg-white hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3 font-bold">S</div>
              <span className="font-medium text-gray-900">Storybook</span>
            </div>

            {/* Row 2 */}
            <div className="border-2 border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center aspect-square bg-white hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">🦅</div>
              <span className="font-medium text-gray-900">Nest.Js</span>
            </div>

            <div className="border-2 border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center aspect-square bg-white hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">⚡</div>
              <span className="font-medium text-gray-900">Git</span>
            </div>

            <div className="border-2 border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center aspect-square bg-white hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3 font-bold">S</div>
              <span className="font-medium text-gray-900">Storybook</span>
            </div>

            <div className="border-2 border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center aspect-square bg-white hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">⚡</div>
              <span className="font-medium text-gray-900">Socket.io</span>
            </div>

            <div className="border-2 border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center aspect-square bg-white hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3 italic font-bold">Sass</div>
              <span className="font-medium text-gray-900">Sass/Scss</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
