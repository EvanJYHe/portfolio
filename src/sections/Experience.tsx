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
        <div className="flex items-start gap-4">
            <img
                src={logo}
                className="w-16 h-16 rounded-md flex-shrink-0 object-cover"
            />
            <div>
                <h2 className="text-xl font-bold">{company}</h2>
                <h3 className="text-lg font-medium">{role}</h3>
                <p className="text-sm">{dates}</p>
                <p className="text-base mt-2">{description}</p>
            </div>
        </div>
    );
};


const Experiences: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-[70vh] w-screen">
            <div className="p-8 flex flex-col items-center justify-center gap-8 md:gap-16 md:max-w-7xl mx-auto border rounded-xl shadow-lg">

                <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-4">
                    <i className="fas fa-briefcase"></i> Experience
                </h1>

                <div>
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
