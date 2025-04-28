import React from 'react';
import infoImg from '../../assets/images/team/team-details-info-img-1.jpg';

const TeamDetailsMain = () => {
  // Static data
  const teamMember = {
    name: "Redwan Labib",
    position: "Front End Developer",
    department: "Web and Software",
    experience: "3 Years",
    email: " web.redwanlabib@gmail.com",
    phone: " +8801521702577",
    image: infoImg,
    biography: `
      As a recent graduate specializing in frontend development with a focus on React, I am eager to kickstart my career by joining a dynamic team where I can apply my knowledge and skills to create engaging and intuitive user interfaces. My objective is to actively contribute to the development of cutting-edge web applications, leveraging my understanding of React’s component-based architecture and proficiency in HTML, CSS, and JavaScript. I am committed to ongoing learning and growth, seeking opportunities to collaborate, learn from experienced developers, and stay abreast of industry best practices to excel in my role as a frontend developer.
    `,
    skills: [
      { name: "Web Development", percentage: "90%" },
      { name: "Business Solution", percentage: "50%" },
      { name: "Digital Marketing", percentage: "80%" }
    ],
    companies: [
      { name: "SEORDEV", role: "Web and Software Engineer " },
      { name: "Libonomy", role: "Digital Marketing" },
      { name: "ProperSix", role: "Web Developer" },
      { name: "Creative IT", role: "React Developer" }
    ],
    socialLinks: [
      { platform: "facebook", url: "#", iconClass: "fab fa-facebook-f" },
      { platform: "twitter", url: "#", iconClass: "fab fa-twitter" },
      { platform: "instagram", url: "#", iconClass: "fab fa-instagram" },
      { platform: "linkedin", url: "#", iconClass: "fab fa-linkedin-in" }
    ]
  };

  return (
    <section className="team-details-info">
      <div className="container">
        <div className="team-details-info__inner">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="team-details-info__left">
                <div className="team-details-info__img ">
                  <img src={teamMember.image} className="rounded-3" alt={teamMember.name} />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="team-details-info__content">
                <div className="team-details-info__content-title-box">
                  <h3 className="team-details-info__content-title">
                    {teamMember.name}
                  </h3>
                  <p className="team-details-info__content-sub-title">
                    {teamMember.position}
                  </p>
                </div>
                <div className="team-details-info__details-box">
                  <ul className="list-unstyled team-details-info__details-list">
                    <li><span>Department:</span> {teamMember.department}</li>
                    <li><span>Experience:</span> {teamMember.experience}</li>
                    <li>
                      <span>Email:</span> 
                      <a href={`mailto:${teamMember.email}`}>{teamMember.email}</a>
                    </li>
                    <li>
                      <span>Phone:</span> 
                      <a href={`tel:${teamMember.phone}`}>{teamMember.phone}</a>
                    </li>
                  </ul>
                </div>
                <div className="team-details-info__social">
                  {teamMember.socialLinks.map((link, index) => (
                    <a key={index} href={link.url}>
                      <i className={link.iconClass} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="team-details__bottom">
          <h3 className="team-details__title-1">Alen Walker’s Biography</h3>
          <p className="team-details__text-1">{teamMember.biography}</p>
          <div className="team-details__progress-and-company">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="team-details__progress-box">
                  <ul className="team-details__progress-list list-unstyled">
                    {teamMember.skills.map((skill, index) => (
                      <li key={index}>
                        <h4 className="team-details__progress-title">{skill.name}</h4>
                        <div className="bar">
                          <div className={`bar-inner${index + 1} count-bar`} data-percent={skill.percentage}>
                            <div className="count-text">{skill.percentage}</div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="team-details__company-box">
                  <div className="row">
                    <div className="col-xl-6">
                      <ul className="team-details__company-list list-unstyled">
                        {teamMember.companies.slice(0, 2).map((company, index) => (
                          <li key={index}>
                            <h3 className="team-details__company-title">{company.name}</h3>
                            <p className="team-details__company-sub-title">{company.role}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-xl-6">
                      <ul className="team-details__company-list team-details__company-list--two list-unstyled">
                        {teamMember.companies.slice(2).map((company, index) => (
                          <li key={index}>
                            <h3 className="team-details__company-title">{company.name}</h3>
                            <p className="team-details__company-sub-title">{company.role}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h3 className="team-details__title-2">Best Skills</h3>
          <p className="team-details__text-3">
            A vast majority of the app marketers mainly concentrate on the post-launch 
            app marketing techniques and measures while completely missing on the 
            pre-launch campaign. This prevents the app from creating buzz and hype 
            just around the time when the app is launched. As and when you launch the app, 
            already a considerable number of people should expectantly look forward 
            to your app and this requires long-drawn marketing.
          </p>
          <div className="team-details__contact-box">
            <h3 className="team-details__contact-title">Let’s Get in Touch</h3>
            <p className="team-details__contact-text">
              Your email address will not be published. Required fields are marked *
            </p>
            <form action="assets/inc/sendemail.php" className="team-details__form contact-form-validated" noValidate>
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <div className="team-details__input-box">
                    <input type="text" placeholder="Your Name*" name="name" />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="team-details__input-box">
                    <input type="email" placeholder="Your Email*" name="email" />
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="team-details__input-box">
                    <input type="text" placeholder="Website*" name="website" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-12">
                  <div className="team-details__input-box text-message-box">
                    <textarea name="message" placeholder="Write Message*" />
                  </div>
                  <div className="contact-two__btn-box">
                    <button type="submit" className="thm-btn team-details__btn">
                      Send Your Message<span />
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <div className="result" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamDetailsMain;
