import projectData from "../ProjectData"

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
        <div className="flex flex-col bg-gray-900 text-white rounded-lg shadow-lg p-4 sm:p-6 gap-4 w-full mx-auto">
            <div className="overflow-hidden rounded-lg">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-72"
                />
            </div>
            <div className="space-y-1">
                <h2 className="text-xl font-bold">{title}</h2>
                <h3 className="text-sm text-yellow-300">{category}</h3>
            </div>

            <p className="text-sm leading-relaxed text-gray-300">
                {description}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="bg-gray-700 text-sm px-3 py-1 rounded-full"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <div className="flex items-center gap-4 pt-3">
                {githubLink && (
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium"
                    >
                        GitHub
                    </a>
                )}
                {websiteLink && (
                    <a
                        href={websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium"
                    >
                        Website
                    </a>
                )}
                {otherLink && (
                    <a
                        href={otherLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium"
                    >
                        View Project
                    </a>
                )}
            </div>
        </div>
    )
}

const Projects: React.FC = () => {
    return (
        <div className="w-full">
            <div className="flex flex-col items-stretch px-4 py-8 mx-auto max-w-[80vw]">
                <h1 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
                    Projects
                </h1>
                <Carousel className="mx-auto max-w-full" opts={{ loop: true }}>
                    <CarouselContent>
                        {projectData.map((project, index) => (
                            <CarouselItem className="md:basis-1/2 lg:basis-1/2" key={index}>
                                <ProjectItem
                                    image={project.image}
                                    title={project.title}
                                    category={project.category}
                                    description={project.description}
                                    tags={project.tags}
                                    githubLink={project.githubLink}
                                    websiteLink={project.websiteLink}
                                    otherLink={project.otherLink}
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    )
}

export default Projects
