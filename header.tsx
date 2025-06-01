import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <nav className="bg-white py-6 px-8 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-12">
          <a href="#about" className="text-black font-medium hover:opacity-70 transition-opacity">
            ABOUT ME
          </a>
          <a href="#projects" className="text-black font-medium hover:opacity-70 transition-opacity">
            PROJECTS
          </a>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <h1 className="text-4xl font-bold tracking-wide">MAJ COS</h1>
        </div>

        <div className="flex items-center space-x-12">
          <a href="#linkedin" className="text-black font-medium hover:opacity-70 transition-opacity">
            LINKEDIN
          </a>
          <Button className="bg-black text-white hover:bg-black/90 rounded-md px-6 py-2 font-medium">
            Resume <Download className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </nav>
  )
}
