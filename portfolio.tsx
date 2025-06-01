import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Component() {
  return (
    <div className="min-h-screen bg-[#ffffff] flex flex-col">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
        <div className="flex items-center space-x-8">
          <a href="#about" className="text-[#000000] font-medium hover:opacity-70 transition-opacity">
            ABOUT ME
          </a>
          <a href="#projects" className="text-[#000000] font-medium hover:opacity-70 transition-opacity">
            PROJECTS
          </a>
        </div>

        <div className="text-[#000000] text-4xl font-bold tracking-wide">MAJ COS</div>

        <div className="flex items-center space-x-8">
          <a href="#linkedin" className="text-[#000000] font-medium hover:opacity-70 transition-opacity">
            LINKEDIN
          </a>
          <Button className="bg-[#000000] text-[#ffffff] hover:bg-[#000000]/90 rounded-md px-6 py-2 font-medium">
            Resume <Download className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-8 py-12">
        <div className="relative max-w-4xl mx-auto">
          {/* Skill Tags */}
          <div className="relative">
            {/* Project Management - Top */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
              <span className="bg-[#92c15b] text-[#ffffff] px-6 py-3 rounded-full font-medium text-lg">
                Project Management
              </span>
            </div>

            {/* Data Analyst - Left */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8">
              <span className="bg-[#92c15b] text-[#ffffff] px-6 py-3 rounded-full font-medium text-lg">
                Data Analyst
              </span>
            </div>

            {/* UI/UX - Right Top */}
            <div className="absolute right-0 top-1/3 transform translate-x-8 -translate-y-4">
              <span className="bg-[#92c15b] text-[#ffffff] px-6 py-3 rounded-full font-medium text-lg">UI/UX</span>
            </div>

            {/* Quality Assurance - Left Bottom */}
            <div className="absolute left-0 bottom-1/3 transform -translate-x-8 translate-y-4">
              <span className="bg-[#92c15b] text-[#ffffff] px-6 py-3 rounded-full font-medium text-lg">
                Quality Assurance
              </span>
            </div>

            {/* Software Developer - Right Bottom */}
            <div className="absolute right-0 bottom-1/4 transform translate-x-8 translate-y-8">
              <span className="bg-[#92c15b] text-[#ffffff] px-6 py-3 rounded-full font-medium text-lg">
                Software Developer
              </span>
            </div>

            {/* Central Character Image */}
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="3D character with laptop"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Line */}
      <div className="px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <hr className="border-[#000000] border-t-2" />
        </div>
      </div>
    </div>
  )
}
