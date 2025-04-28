import React from 'react';
import TeamMember from '../../components/Team/TeamMember';
import BrooklynSimmons from '../../assets/images/team/team-1-1.jpg';
import SakibHasan from '../../assets/images/team/team-1-2.jpg';
import FahdaHossain from '../../assets/images/team/team-1-3.jpg';
import AdamSmith from '../../assets/images/team/team-1-4.jpg';
import AsleBrown from '../../assets/images/team/team-1-5.jpg';
import JamesAndarson from '../../assets/images/team/team-1-6.jpg';



const TeamMain = () => {
    // Example team member data
    const teamMembers = [
        {
            id: 1,
            image: BrooklynSimmons,
            name: 'Brooklyn Simmons',
            position: 'Quick Cargo',
            socialLinks: [
                { url: '#', iconClass: 'icon-instagram' },
                { url: '#', iconClass: 'icon-linkedin-in' },
                { url: '#', iconClass: 'icon-Vector' },
                { url: '#', iconClass: 'icon-facebook-f' },
            ],
            link: '/team-details'
        },
        {
            id: 2,
            image: SakibHasan,
            name: 'Sakib Hasan',
            position: 'Speedy Trans',
            socialLinks: [
                { url: '#', iconClass: 'icon-instagram' },
                { url: '#', iconClass: 'icon-linkedin-in' },
                { url: '#', iconClass: 'icon-Vector' },
                { url: '#', iconClass: 'icon-facebook-f' },
            ],
            link: '/team-details'
        },
        {
            id: 3,
            image: FahdaHossain,
            name: 'Fahda Hossain',
            position: 'Efficient Transport',
            socialLinks: [
                { url: '#', iconClass: 'icon-instagram' },
                { url: '#', iconClass: 'icon-linkedin-in' },
                { url: '#', iconClass: 'icon-Vector' },
                { url: '#', iconClass: 'icon-facebook-f' },
            ],
            link: '/team-details'
        },
        {
            id: 4,
            image: AdamSmith,
            name: 'Adam Smith',
            position: 'Efficient Transport',
            socialLinks: [
                { url: '#', iconClass: 'icon-instagram' },
                { url: '#', iconClass: 'icon-linkedin-in' },
                { url: '#', iconClass: 'icon-Vector' },
                { url: '#', iconClass: 'icon-facebook-f' },
            ],
            link: '/team-details'
        },
        {
            id: 5,
            image: AsleBrown,
            name: 'Asle Brown',
            position: 'Efficient Transport',
            socialLinks: [
                { url: '#', iconClass: 'icon-instagram' },
                { url: '#', iconClass: 'icon-linkedin-in' },
                { url: '#', iconClass: 'icon-Vector' },
                { url: '#', iconClass: 'icon-facebook-f' },
            ],
            link: '/team-details'
        },
        {
            id: 6,
            image: JamesAndarson,
            name: 'James Andarson',
            position: 'Efficient Transport',
            socialLinks: [
                { url: '#', iconClass: 'icon-instagram' },
                { url: '#', iconClass: 'icon-linkedin-in' },
                { url: '#', iconClass: 'icon-Vector' },
                { url: '#', iconClass: 'icon-facebook-f' },
            ],
            link: '/team-details'
        },
        // Add more team members as needed
    ];
    

    return (
        <React.Fragment>
            <section className="team-page">
                <div className="container">
                    <div className="row">
                        {teamMembers.map(member => (
                            <div key={member.id} className="col-xl-4 col-lg-6 col-md-6">
                                <TeamMember {...member} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default TeamMain;
