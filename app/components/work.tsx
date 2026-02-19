'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Project {
    id: number;
    title: string;
    description: string;
    details: string;
    tech: string[];
    gridSize: string; // Tailwind classes for grid positioning
    image?: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "NamZoed",
        description: "Cat project with multiple variants",
        details: "This is a detailed description of NamZoed. Here you can add more information about the project, the challenges you faced, the solutions you implemented, and the results you achieved.",
        tech: ["React", "TypeScript", "Animation"],
        gridSize: "col-span-1 row-span-1"
    },
    {
        id: 2,
        title: "NamZoed",
        description: "Cat project variant 2",
        details: "This is a detailed description of NamZoed variant 2.",
        tech: ["React", "TypeScript"],
        gridSize: "col-span-1 row-span-1"
    },
    {
        id: 3,
        title: "NamZoed",
        description: "Cat project variant 3",
        details: "This is a detailed description of NamZoed variant 3.",
        tech: ["React", "TypeScript"],
        gridSize: "col-span-1 row-span-1"
    },
    {
        id: 4,
        title: "NamZoed",
        description: "Cat project variant 4",
        details: "This is a detailed description of NamZoed variant 4.",
        tech: ["React", "TypeScript"],
        gridSize: "col-span-1 row-span-1"
    },
    {
        id: 5,
        title: "EcoVision",
        description: "Environmental tracking system",
        details: "EcoVision is an environmental tracking and monitoring system. Here you can add detailed information about the project features, implementation, and impact.",
        tech: ["Next.js", "AI/ML", "Database"],
        gridSize: "col-span-2 row-span-2"
    },
    {
        id: 6,
        title: "AR-Image Tracking",
        description: "Augmented reality image tracking",
        details: "AR-Image Tracking project details. This project involves augmented reality technology for image tracking and recognition.",
        tech: ["AR", "Computer Vision", "Unity"],
        gridSize: "col-span-1 row-span-2"
    },
    {
        id: 7,
        title: "HandSpeak",
        description: "Sign language recognition",
        details: "HandSpeak is a sign language recognition system. Add more details about the AI model, training data, and real-world applications.",
        tech: ["Python", "TensorFlow", "OpenCV"],
        gridSize: "col-span-1 row-span-1"
    }
];

export default function Work() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <main>
            <section className="w-full pt-30 pb-20">
                <div className="w-full flex justify-between items-center">
                    <h2 className="text-6xl font-black  tracking-[0.45rem]">
                        WORK <span className="text-xl">&lt;TECH/&gt;</span>
                    </h2>

                    <p className="text-6xl font-black tracking-[0.2rem]">
                        25' - 26'
                    </p>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="w-full px-30 pb-30">
                <div className="grid grid-cols-4 gap-4 auto-rows-[200px]">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className={`${project.gridSize} bg-background border-2 border-foreground p-6 cursor-pointer hover:bg-[#2A4C4E] hover:text-white transition-all duration-300 flex flex-col justify-between overflow-hidden relative group`}
                        >
                            {/* Project content */}
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold tracking-wide mb-2">
                                    {project.title}
                                </h3>
                            </div>

                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-[#2A4C4E] opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white text-lg font-bold">View Details</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Modal Preview */}
            {selectedProject && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-8"
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                        className="bg-white text-black w-full max-w-3xl max-h-[80vh] overflow-y-auto p-8 relative rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-4 right-4 text-3xl font-bold hover:text-[#2A4C4E] transition-colors"
                        >
                            ×
                        </button>
                        
                        <h2 className="text-4xl font-black mb-4 tracking-wide">
                            {selectedProject.title}
                        </h2>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                            {selectedProject.tech.map((tech, index) => (
                                <span key={index} className="text-sm border-2 border-black px-3 py-1 font-semibold">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        
                        <p className="text-lg leading-relaxed mb-4">
                            {selectedProject.details}
                        </p>

                        <p className="text-sm text-gray-600 italic">
                            {selectedProject.description}
                        </p>
                    </div>
                </div>
            )}
        </main>
    );
}
