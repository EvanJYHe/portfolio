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
                    className="w-full h-full"
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
        <section className="w-[90vw] pt-6 md:pt-16 lg:pt-16 mx-auto">
            <div className="container mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">
                    Featured Projects
                </h1>

                <Carousel opts={{ align: "start", loop: true }} className="max-w-[100vw]">
                    <CarouselContent className="">
                        {projectData.map((project, index) => (
                            <CarouselItem
                                key={index}
                                className="basis-full md:basis-1/2 lg:basis-1/3 max-w-full"
                            >
                                <ProjectItem {...project} />
                            </CarouselItem>
                        ))}

                    </CarouselContent>
                    <div className="mt-8 flex justify-center gap-4">
                        <CarouselPrevious className="bg-gray-900 text-white xl:absolute md:static lg:static xs:static static" />
                        <CarouselNext className="bg-gray-900 text-white xl:absolute md:static lg:static xs:static static" />
                    </div>
                </Carousel>
            </div>
        </section>
    )
}

export default Projects