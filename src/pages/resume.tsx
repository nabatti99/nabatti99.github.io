import { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import PageBody from "../components/page-body/page-body";
import PageHead from "../components/page-head/page-head";
import { upperCaseFirstLetter } from "../utilities/text.util";
import cls from "classnames";
import { languages } from "../data/languages.data";

const ResumePage: React.FC<PageProps> = () => {
    const codingSkillInfos = {
        beginner: {
            level: 1,
            tooltip: "Know the basics, but not much experience",
        },
        intermediate: {
            level: 2,
            tooltip: "Have some experience, easily with common tasks",
        },
        advanced: {
            level: 3,
            tooltip: "Familiar with libraries and frameworks, can work independently",
        },
    };

    const codingSkillsContents: {
        name: string;
        level: keyof typeof codingSkillInfos;
    }[] = [
        {
            name: "HTML / CSS",
            level: "advanced",
        },
        {
            name: "JavaScript",
            level: "advanced",
        },
        {
            name: "ReactJS / NextJS / GastbyJS",
            level: "advanced",
        },
        {
            name: "Smart Contract / D-App",
            level: "advanced",
        },
        {
            name: "Python",
            level: "advanced",
        },
        {
            name: "Tensorflow",
            level: "intermediate",
        },
        {
            name: "System Architecture",
            level: "intermediate",
        },
        {
            name: "Database Design",
            level: "intermediate",
        },
        {
            name: "Data Analysis",
            level: "intermediate",
        },
        {
            name: "C#",
            level: "beginner",
        },
    ];

    const otherSkillInfos = {
        beginner: {
            level: 1,
        },
        intermediate: {
            level: 2,
        },
        advanced: {
            level: 3,
        },
    };

    const otherSkillsContents: {
        name: string;
        level: keyof typeof otherSkillInfos;
        tooltip: string;
    }[] = [
        {
            name: "UI/UX Design",
            level: "advanced",
            tooltip: "Can design a website, mobile app, etc.",
        },
        {
            name: "Graphic Design",
            level: "intermediate",
            tooltip: "Can design a logo, poster, banner, etc.",
        },
        {
            name: "Problem Solving",
            level: "advanced",
            tooltip: "Give idea & solve problems quickly",
        },
        {
            name: "Teamwork",
            level: "intermediate",
            tooltip: "Work well with 3-5 people in a team",
        },
        {
            name: "Communication",
            level: "intermediate",
            tooltip: "Can communicate in English and Vietnamese",
        },
    ];

    return (
        <PageBody>
            <div className="page-title">
                <h1>Nguyen Le Anh Minh</h1>
                <div className="page-subtitle">
                    <h4>
                        With 2 year of Work Experience, this page highlights my ability at Software Engineer skills and my achievements. My experiences have equipped me with a
                        strong foundation in Software Development, AI, and Blockchain technologies. And I am eager to apply my skills to new challenges and contribute to your
                        team's success.
                    </h4>
                </div>
            </div>

            <div id="content" className="page-content site-content single-post" role="main">
                <div className="row">
                    <div className=" col-xs-12 col-sm-6 ">
                        <div className="block-title">
                            <h2>Education</h2>
                        </div>

                        <div id="timeline_1" className="timeline clearfix">
                            <div className="timeline-item clearfix">
                                <h5 className="item-period">2024 - Now</h5>
                                <a href="https://dut.udn.vn" target="_blank" className="item-company">
                                    ProtonX Online School
                                </a>
                                <h4 className="item-title">AI Engineer</h4>
                                <p>
                                    Delve deeper into the fundamental concepts of Natural Language Processing. Learn how to preprocess text data, extract features from text, and
                                    build machine learning models for common NLP task. Build a LLM model at the end of the course.
                                </p>
                            </div>

                            <div className="timeline-item clearfix">
                                <h5 className="item-period">2018 - 2023</h5>
                                <a href="https://dut.udn.vn" target="_blank" className="item-company">
                                    Danang University of Science and Technology (DUT)
                                </a>
                                <h4 className="item-title">Software Engineer</h4>
                                <p className="mt-3">
                                    <strong>GPA:</strong> 3.44/4.0
                                </p>
                                <p>
                                    <strong>Graduation Thesis:</strong> (Scored: 9.6/10, Ranked: 1){" "}
                                    <a href="https://drive.google.com/drive/folders/19LhopEKWXQ0R2v5ZIFCrftH3ai7I-x41?usp=sharing" target="_blank">
                                        Application of Artificial Intelligence and Blockchain in Architectural Design Automation
                                    </a>{" "}
                                </p>
                                <p>Merges computer science with engineering practices, empowering to design, develop, and implement robust software systems.</p>
                                <p>
                                    Participate in many researches and contests. Learned how to build a high-end software follow by <i>Software Development Life Circle</i> (SDLC).
                                </p>
                            </div>

                            <div className="timeline-item clearfix">
                                <h5 className="item-period">2022 - 2023</h5>
                                <a href="https://funix.edu.vn" target="_blank" className="item-company">
                                    FUNiX Online School
                                </a>
                                <h4 className="item-title">Blockchain Developer</h4>
                                <p>
                                    Understanding of how blockchain systems function. Exploring smart contracts and decentralized applications (DApps), culminating in the
                                    integration of a DApp into a website. To solidify my knowledge, Constructed a private blockchain and developed related blockchain services.
                                </p>
                            </div>

                            <div className="timeline-item clearfix">
                                <h5 className="item-period">2020 - 2021</h5>
                                <a href="https://school.coders-x.com" target="_blank" className="item-company">
                                    CoderX Online School
                                </a>
                                <h4 className="item-title">Full-stack Web Developer</h4>
                                <p>
                                    Gained foundational knowledge in web development technologies by completing a course that covered JavaScript, HTML, CSS, and Node.js.
                                    Additionally, explored version control using Git and furthered development skills by learning React and TypeScript.
                                </p>
                            </div>

                            <div className="timeline-item clearfix">
                                <h5 className="item-period">2018 - 2019</h5>
                                <a href="https://howkteam.vn" target="_blank" className="item-company">
                                    KTeam Free Education
                                </a>
                                <h4 className="item-title">C# Developer</h4>
                                <p>
                                    Began with a course that introduced me to the C# language, focusing on Object-Oriented Programming (OOP) principles. Leveraged ASP.NET MVC to
                                    construct a Model-View-Controller website, utilizing Entity Framework to facilitate database interaction.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className=" col-xs-12 col-sm-6 ">
                        <div className="block-title">
                            <h2>Working Experience</h2>
                        </div>

                        <div id="timeline_2" className="timeline clearfix">
                            <div className="timeline-item clearfix">
                                <h5 className="item-period current">2024 - Now</h5>
                                <a href="https://www.datahouse.com" target="_blank" className="item-company">
                                    DataHouse Asia
                                </a>
                                <h4 className="item-title">AI Engineer</h4>
                                <p>
                                    <strong>The First AI Engineer:</strong> Work on a wide range of AI projects, from early-stage prototyping to production deployment. Develop and
                                    implement AI solutions for various applications, such as product recommendations, fraud detection, OCR and chatbot.
                                </p>
                                <p>
                                    <strong>AWS Cloud Engineer:</strong> Design, build, deployed and managed AI projects with various AWS services. Designed and implemented
                                    scalable and cost-effective AWS architectures.
                                </p>
                                <p>
                                    <strong>Data Engineer: </strong> Collaborate closely with our data engineers to ensure the seamless integration of AI models into data
                                    pipelines. Assist in preparing and cleaning datasets, optimizing model performance, and deploying AI solutions into production environments.
                                </p>
                            </div>

                            <div className="timeline-item clearfix">
                                <h5 className="item-period current">2022 - 2024</h5>
                                <a href="https://www.napaglobal.com" target="_blank" className="item-company">
                                    NAPA Global
                                </a>
                                <h4 className="item-title">Full-stack Developer</h4>
                                <p>
                                    <strong>Blockchain Developer:</strong> Honed skills in smart contract development and integrating blockchain technology into decentralized
                                    applications (DApps).
                                </p>
                                <p>
                                    <strong>Full-Stack Web Developer:</strong> Contributed to various outsourcing projects. This experience broadened skill-sets by allowing to work
                                    with data and participate in the development of a platform for a Hackathon.
                                </p>
                                <p>
                                    <strong>Maintainer: </strong> working on other languages and frameworks such as Ruby, C++ and AWS. Currently, supporting deploy a Wallet project
                                    as a DevOps Developer.
                                </p>
                            </div>

                            <div className="timeline-item clearfix">
                                <h5 className="item-period">2022 - 2023</h5>
                                <a href="https://passgenix.com" target="_blank" className="item-company">
                                    Passgenix Solutions
                                </a>
                                <h4 className="item-title">Co-founder & Technical Leader</h4>
                                <p>
                                    <strong>Strong Developer Team:</strong> Work closely with our developers and designers to translate creative vision into robust technical
                                    solutions. Strive to push boundaries and develop products that make a real impact.
                                </p>
                                <p>
                                    <strong>Follow Trend Technology:</strong> Guide the technical direction to ensure that our products are built with the latest technologies and
                                    best practices. Maintain the highest quality standards in our technological infrastructure and product development.
                                </p>
                                <p>
                                    Gained experience to leverage a deep understanding of the industry and its challenges. Constantly seeking innovative ways to advance our
                                    technology and its potential and using technology to solve real-world problems.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className=" col-xs-12 col-sm-12 ">
                        <div className="block-title p-20">
                            <h2>Language & Efficiency</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className=" col-xs-12 col-sm-6 ">
                        {languages.map((language) => (
                            <a href={language.image} className="lightbox">
                                <div className="certificate-item clearfix">
                                    <div className="certi-logo">
                                        <img src={language.logo} alt="logo" />
                                    </div>

                                    <div className="certi-content">
                                        <div className="certi-title">
                                            <h4>{language.title}</h4>
                                        </div>

                                        <div className="certi-id">
                                            <span>Valid until {language.validUntil}</span>
                                        </div>
                                        <div className="certi-date">
                                            <span>{language.issuedAt}</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="row">
                    <div className=" col-xs-12 col-sm-12 ">
                        <div className="block-title p-20">
                            <h2>Certificates</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className=" col-xs-12 col-sm-6">
                        <a href="/img/resume/blockchain-basic-certificate.jpg" className="lightbox">
                            <div className="certificate-item clearfix">
                                <div className="certi-logo">
                                    <img src="/img/resume/funix-logo.png" alt="logo" />
                                </div>

                                <div className="certi-content">
                                    <div className="certi-title">
                                        <h4>Blockchain Basic</h4>
                                    </div>

                                    <div className="certi-id">
                                        <span>Reference: FX220347SC</span>
                                    </div>
                                    <div className="certi-date">
                                        <span>19 January 2022</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className=" col-xs-12 col-sm-6">
                        <a href="/img/resume/smart-contract-certificate.jpg" className="lightbox">
                            <div className="certificate-item clearfix">
                                <div className="certi-logo">
                                    <img src="/img/resume/funix-logo.png" alt="logo" />
                                </div>

                                <div className="certi-content">
                                    <div className="certi-title">
                                        <h4>Smart Contract</h4>
                                    </div>

                                    <div className="certi-id">
                                        <span>Reference: FX220924SC</span>
                                    </div>
                                    <div className="certi-date">
                                        <span>02 March 2022</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className=" col-xs-12 col-sm-6">
                        <a href="/img/resume/decentralized-application-development-certificate.jpg" className="lightbox">
                            <div className="certificate-item clearfix">
                                <div className="certi-logo">
                                    <img src="/img/resume/funix-logo.png" alt="logo" />
                                </div>

                                <div className="certi-content">
                                    <div className="certi-title">
                                        <h4>Decentralized Application Development</h4>
                                    </div>

                                    <div className="certi-id">
                                        <span>Reference: FX222515SC</span>
                                    </div>
                                    <div className="certi-date">
                                        <span>21 May 2022</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className=" col-xs-12 col-sm-6">
                        <a href="/img/resume/blockchain-platforms-certificate.jpg" className="lightbox">
                            <div className="certificate-item clearfix">
                                <div className="certi-logo">
                                    <img src="/img/resume/funix-logo.png" alt="logo" />
                                </div>

                                <div className="certi-content">
                                    <div className="certi-title">
                                        <h4>Blockchain Platforms</h4>
                                    </div>

                                    <div className="certi-id">
                                        <span>Reference: FX223000SC</span>
                                    </div>
                                    <div className="certi-date">
                                        <span>16 June 2022</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="row">
                    <div className=" col-xs-12 col-sm-12 ">
                        <div className="p-40"></div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-sm-6">
                        <div className="block-title">
                            <h2>Coding Skills</h2>
                        </div>

                        <div className="skills-info skills-first-style">
                            {codingSkillsContents.map((skill, index) => {
                                const skillInfo = codingSkillInfos[skill.level];
                                return (
                                    <div key={index} className="clearfix">
                                        <h4>{skill.name}</h4>
                                        <div className="skill-value" data-bs-toggle="tooltip" data-bs-title={skillInfo.tooltip} data-bs-placement="right">
                                            <span className="d-none d-md-block">{upperCaseFirstLetter(skill.level)}</span>
                                            <div className="skill-level">
                                                {[...Array(3)].map((_, i) => (
                                                    <div key={index} className={cls("level-item", skillInfo.level >= i + 1 && `level-${i + 1}`)}></div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-6">
                        <div className="block-title">
                            <h2>Other Skills</h2>
                        </div>

                        <div className="skills-info skills-first-style">
                            {otherSkillsContents.map((skill, index) => {
                                const skillInfo = otherSkillInfos[skill.level];
                                return (
                                    <div key={index} className="clearfix">
                                        <h4>{skill.name}</h4>
                                        <div className="skill-value" data-bs-toggle="tooltip" data-bs-title={skill.tooltip} data-bs-placement="right">
                                            <span className="d-none d-md-block">{upperCaseFirstLetter(skill.level)}</span>
                                            <div className="skill-level">
                                                {[...Array(3)].map((_, i) => (
                                                    <div key={index} className={cls("level-item", skillInfo.level >= i + 1 && `level-${i + 1}`)}></div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </PageBody>
    );
};

export default ResumePage;

export const Head: HeadFC = () => <PageHead title="CV" />;
