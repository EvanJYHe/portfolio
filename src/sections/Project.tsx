import projectData from "../ProjectData"
import { ExternalLink } from 'lucide-react'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

interface ProjectProps {
    image: string
    title: string
    category: string
    description: string
    tags: string[]
    githubLink?: string
    otherLink?: string
    websiteLink?: string
}

const ProjectItem: React.FC<ProjectProps> = ({ image, title, category, description, tags, githubLink, otherLink, websiteLink }) => {
    return (
        <div className="flex flex-col bg-gray-900 text-white rounded-lg shadow-lg p-6 gap-4 h-full mx-auto transition-transform duration-300 hover:scale-[1.02]">
            <div className="overflow-hidden rounded-lg aspect-video bg-gray-800">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
            </div>

            <div className="flex flex-col flex-grow gap-4">
                <div>
                    <h2 className="text-xl font-bold line-clamp-1">{title}</h2>
                    <h3 className="text-sm text-yellow-300 font-medium">{category}</h3>
                </div>

                <p className="text-sm text-gray-300 line-clamp-3 mb-2">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="bg-gray-700 text-xs px-2.5 py-1 rounded-full whitespace-nowrap"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="flex items-center gap-4 pt-2 border-t border-gray-700">
                {githubLink && (
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium hover:text-yellow-300 transition-colors flex items-center gap-1"
                    >
                        <span>GitHub</span>
                        <ExternalLink className="w-4 h-4" />
                    </a>
                )}
                {websiteLink && (
                    <a
                        href={websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium hover:text-yellow-300 transition-colors flex items-center gap-1"
                    >
                        <span>Website</span>
                        <ExternalLink className="w-4 h-4" />
                    </a>
                )}
                {otherLink && (
                    <a
                        href={otherLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium hover:text-yellow-300 transition-colors flex items-center gap-1"
                    >
                        <span>Demo</span>
                        <ExternalLink className="w-4 h-4" />
                    </a>
                )}
            </div>
        </div>
    )
}

const Projects: React.FC = () => {
    return (
        <section className="w-full py-12 md:py-16 lg:py-20">
            <div className="container px-4 mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">
                    Featured Projects
                </h1>
                
                <Carousel opts={{ align: "start", loop: true }} className="w-full">
                    <CarouselContent className="-ml-4">
                        {projectData.map((project, index) => (
                            <CarouselItem 
                                key={index}
                                className="pl-4 md:basis-1/2 lg:basis-1/3"
                            >
                                <ProjectItem {...project} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="mt-8 flex justify-center gap-4">
                        <CarouselPrevious className="bg-gray-900 text-white" />
                        <CarouselNext className="bg-gray-900 text-white" />
                    </div>
                </Carousel>
            </div>
        </section>
    )
}

export default Projects