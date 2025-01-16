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
        <div className="flex gap-8 justify-center items-center">
            <div className="flex-shrink-0 flex items-start gap-4">
                <img
                    src={logo}
                    className="w-24 h-24 rounded-md flex-shrink-0 object-cover"
                />
                <div>
                    <h2 className="text-xl font-bold">{company}</h2>
                    <h3 className="text-lg font-medium">{role}</h3>
                    <p className="text-sm">{dates}</p>
                </div>
            </div>
            <p className="text-base">
                {description}
            </p>
        </div>
    );
};


const Experiences: React.FC = () => {

    return (
        <div className="flex items-center justify-center min-h-[65vh] w-screen bg-gray-50">
            <div className="p-8 px-36 flex flex-col items-center justify-center md:max-w-7xl mx-auto border rounded-xl shadow-lg bg-white">

                <h1 className="text-3xl font-bold mb-4 flex items-center gap-4">
                    <i className="fas fa-briefcase"></i> Experience
                </h1>

                <div className="flex flex-col gap-8">
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
