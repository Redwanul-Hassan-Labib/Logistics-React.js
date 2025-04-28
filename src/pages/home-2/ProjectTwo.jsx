import React from 'react';
import ProjectCard from '../../components/Project/ProjectCard';
import projectImg1 from '../../assets/images/project/project-2-1.jpg';
import projectImg2 from '../../assets/images/project/project-2-2.jpg';
import projectImg3 from '../../assets/images/project/project-2-3.jpg';
import projectImg4 from '../../assets/images/project/project-2-4.jpg';
import projectImg5 from '../../assets/images/project/project-2-5.jpg';

const ProjectTwo = () => {
    // Example data
    const projectsData = [
        {
            id: 1,
            category: 'Express Logistics',
            title: 'Delivering success through logistics',
            content: 'Seamless logistics for your logo',
            link: '/project-details'
        },
        {
            id: 2,
            image: projectImg1,
            category: 'Express Logistics',
            title: 'Delivering success through logistics',
            link: '/project-details'
        },
        {
            id: 3,
            image: projectImg2,
            category: 'Express Logistics',
            title: 'Delivering success through logistics',
            link: '/project-details'
        },
        {
            id: 4,
            image: projectImg3,
            category: 'Express Logistics',
            title: 'Delivering success through logistics',
            link: '/project-details'
        },
        {
            id: 5,
            image: projectImg4,
            category: 'Express Logistics',
            title: 'Delivering success through logistics',
            link: '/project-details'
        },
        {
            id: 6,
            image: projectImg5,
            category: 'Express Logistics',
            title: 'Delivering success through logistics',
            link: '/project-details'
        },
        // Add more project data here as needed
    ];
    
    return (
        <>
            
            {/* Custom class name */}
            <ProjectCard projects={projectsData} sectionClassName="project-two" />
        </>
    );
};

export default ProjectTwo;
