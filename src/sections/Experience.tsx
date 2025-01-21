import { useState } from "react";
import experienceData from "../ExperienceData";

interface ExperienceProps {
    logo: string;
    company: string;
    role: string;
    dates: string;
    description: string;
}

const ExperienceItem: React.FC<ExperienceProps> = ({ logo, company, role, dates, description }) => {
    return (
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start">
            <div className="flex-shrink-0 flex items-start gap-4">
                <img
                    src={logo}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-md flex-shrink-0 object-contain bg-white"
                />
                <div className="min-w-[17rem]">
                    <h2 className="text-lg md:text-xl font-bold">{company}</h2>
                    <h3 className="text-base md:text-lg font-medium">{role}</h3>
                    <p className="text-sm text-gray-600">{dates}</p>
                </div>
            </div>
            <p className="text-sm md:text-base leading-relaxed">{description}</p>
        </div>
    );
};

const Experiences: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-[75vh] w-screen bg-gray-200 p-4 md:p-8">
            <div className="flex flex-col items-start justify-center md:max-w-5xl w-full mx-auto">
                <h1 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-4">
                    Experience
                </h1>
                <div className="flex flex-col gap-6">
                    {experienceData.map((exp, index) => (
                        <ExperienceItem
                            key={index}
                            logo={exp.logo}
                            company={exp.company}
                            role={exp.role}
                            dates={exp.dates}
                            description={exp.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experiences;
