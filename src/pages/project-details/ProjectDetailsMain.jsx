import React from 'react';
import ProjectDetailsLeft from '../../components/ProjectDetails/ProjectDetailsLeft';
import ProjectDetailsRight from '../../components/ProjectDetails/ProjectDetailsRight';
import ProjectDetailsImg1 from '../../assets/images/project/project-details-img-1.jpg';
import ProjectDetailsBoxImg1 from '../../assets/images/project/project-details-img-box-img-1.jpg';
import ProjectDetailsBoxImg2 from '../../assets/images/project/project-details-img-box-img-2.jpg';

const ProjectDetailsMain = () => {
    const projectData = {
        category: 'Logistics',
        customer: 'Starline Shimlasi',
        startDate: '1 March 2024',
        endDate: '28 September 2025',
        rating: 5,
        address: 'Dhaka 102, 8000 Sent Behaibior, Road 45, House of Street',
        phone: '+32566 - 800 - 890',
        fax: '1234 - 58963 - 007',
        email: 'nafiz1223@gmail.com',
        socialLinks: [
            { url: '/blog-details', label: 'Instagram', iconClass: 'icon-instagram' },
            { url: '/blog-details', label: 'Facebook', iconClass: 'icon-facebook-f' },
            { url: '/blog-details', label: 'Twitter', iconClass: 'icon-Vector' },
            { url: '/blog-details', label: 'LinkedIn', iconClass: 'icon-linkedin-in' },
        ],
    };
    
    const projectDataTwo = {
        mainImage: ProjectDetailsImg1,
        title: "Cultivate Success with Agriculture",
        text1: "Logistics service involves the planning, implementation, and control of the efficient and effective transportation, storage, and distribution of goods and materials.",
        text2: "Logistics service involves the planning, implementation, and control of the efficient and effective transportation, storage, and distribution of goods and materials.",
        points: [
            "Trust us for reliable and cost-effective logistics solutions.",
            "Delivering your goods with precision and care.",
            "Your one-stop solution for logistics services.",
            "We make logistics easy for your business.",
            "Optimize your logistics with our expertise."
        ],
        additionalImages: [
            ProjectDetailsBoxImg1,
            ProjectDetailsBoxImg2
        ],
        text3: "Logistics service involves the planning, implementation, and control of the efficient and effective transportation, storage, and distribution of goods and materials."
    };
    
    return (
        <React.Fragment>
            {/*Project Details Start*/}
            <section className="project-details">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4">
                            <ProjectDetailsLeft projectInfo={projectData} />
                        </div>
                        <div className="col-xl-8">
                            <ProjectDetailsRight projectData={projectDataTwo} />
                        </div>
                    </div>
                </div>
            </section>
            {/*Project Details End*/}
        </React.Fragment>
    );
};

export default ProjectDetailsMain;
