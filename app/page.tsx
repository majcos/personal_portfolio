import { Share2, Mail, Phone, Copy, Github, Twitter, Linkedin } from "lucide-react"
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

      {/* Work Experience Section */}
      <section className="py-16 px-8 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <h2 className="text-5xl font-light text-gray-400 mr-8">work</h2>
            <div className="flex-1 h-px bg-gray-500"></div>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis. Id phasellus
            dui orci vulputate consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.
          </p>
        </div>
      </section>

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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Badge variant="secondary" className="bg-gray-200 text-gray-700 px-4 py-2 text-sm font-medium">
              Get in touch
            </Badge>
          </div>

          <h2 className="text-3xl md:text-4xl font-medium text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
            {
              "What's next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect."
            }
          </h2>

          <div className="space-y-6 mb-12">
            <div className="flex items-center justify-center gap-4">
              <Mail className="h-6 w-6 text-gray-600" />
              <span className="text-2xl font-semibold text-gray-900">1205.mcos@gmail.com</span>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Copy className="h-4 w-4 text-gray-600" />
              </Button>
            </div>

            <div className="flex items-center justify-center gap-4">
              <Phone className="h-6 w-6 text-gray-600" />
              <span className="text-2xl font-semibold text-gray-900">+91 8980500565</span>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Copy className="h-4 w-4 text-gray-600" />
              </Button>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">You may also find me on these platforms!</p>
            <div className="flex justify-center gap-4">
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Github className="h-6 w-6 text-gray-600" />
              </Button>
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Twitter className="h-6 w-6 text-gray-600" />
              </Button>
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Linkedin className="h-6 w-6 text-gray-600" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
