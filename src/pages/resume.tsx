import { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import PageBody from "../components/page-body/page-body";
import PageHead from "../components/page-head/page-head";

const ResumePage: React.FC<PageProps> = () => {
    return (
        <PageBody>
            <div className="page-title">
                <h1>Nguyen Le Anh Minh</h1>
                <div className="page-subtitle">
                    <h4>About 2 Years of Experience</h4>
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
                                <h5 className="item-period">2018 - 2023</h5>
                                <a href="https://dut.udn.vn" target="_blank" className="item-company">
                                    Danang University of Science and Technology (DUT)
                                </a>
                                <h4 className="item-title">Software Engineer</h4>
                                <p>
                                    <strong>GPA:</strong> 3.44/4.0
                                </p>
                                <p>Merges computer science with engineering practices, empowering to design, develop, and implement robust software systems.</p>
                                <p>Participate in many researches and contests. Learned how to build a software by combining technology and SDLC.</p>
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
                            <h2>Experience</h2>
                        </div>

                        <div id="timeline_2" className="timeline clearfix">
                            <div className="timeline-item clearfix">
                                <h5 className="item-period current">2022 - Current</h5>
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
                                <a href="https://therike.com" target="_blank" className="item-company">
                                    TheRike Online Tea Shop
                                </a>
                                <h4 className="item-title">Technical Leader</h4>
                                <p>Led the technical development of an e-commerce platform for a tea and seed retailer.</p>
                                <p>
                                    Involved building the online shop website, integrating with both Amazon and Shopify for expanded reach, and automating previously manual
                                    processes to improve efficiency.
                                </p>
                                <p>
                                    Additionally, established a system for tracking, storing and reporting sales data, providing valuable insights for monthly and annual analysis.
                                </p>
                            </div>

                            <div className="timeline-item clearfix">
                                <h5 className="item-period">2020 - 2023</h5>
                                <a href="https://dut.udn.vn/khoacntt" target="_blank" className="item-company">
                                    Information Technology Faculty - DUT
                                </a>
                                <h4 className="item-title">Researcher</h4>
                                <p>Motivated to explore the intersection of computer vision (CV) with AI in agriculture, GIS and remote sensing.</p>
                                <p>
                                    Driven by the potential to leverage CV techniques to analyze vast datasets from satellites and drones, ultimately contributing to more
                                    sustainable and productive farming practices.
                                </p>
                                <p>
                                    Developed innovative applications addressing farming issues and built a agricultural startup. Acquired several noteworthy certificates and
                                    awards.
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
                        <a href="/img/resume/toeic-certificate.jpg" className="lightbox">
                            <div className="certificate-item clearfix">
                                <div className="certi-logo">
                                    <img src="/img/resume/toeic-logo.png" alt="logo" />
                                </div>

                                <div className="certi-content">
                                    <div className="certi-title">
                                        <h4>TOEIC: 765 Points</h4>
                                    </div>

                                    <div className="certi-id">
                                        <span>Valid until 27 February 2026</span>
                                    </div>
                                    <div className="certi-date">
                                        <span>27 February 2024</span>
                                    </div>

                                    <div className="certi-company">
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </a>
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
                    <div className=" col-xs-12 col-sm-6 ">
                        <div className="block-title">
                            <h2>Design Skills</h2>
                        </div>

                        <div id="skills_1" className="skills-info skills-first-style">
                            {/* <!-- Skill 1 --> */}
                            <div className="clearfix">
                                <h4>UI/UX Design</h4>
                                <div className="skill-value">95%</div>
                            </div>

                            <div id="skill_1" data-value="95" className="skill-container">
                                <div className="skill-percentage"></div>
                            </div>
                            {/* <!-- /Skill 1 --> */}

                            {/* <!-- Skill 2 --> */}
                            <div className="clearfix">
                                <h4>Print Design</h4>
                                <div className="skill-value">75%</div>
                            </div>

                            <div id="skill_2" data-value="75" className="skill-container">
                                <div className="skill-percentage"></div>
                            </div>
                            {/* <!-- /Skill 2 --> */}

                            {/* <!-- Skill 3 --> */}
                            <div className="clearfix">
                                <h4>Graphic Design</h4>
                                <div className="skill-value">85%</div>
                            </div>
                            <div id="skill_3" data-value="85" className="skill-container">
                                <div className="skill-percentage"></div>
                            </div>
                            {/* <!-- Skill 3 --> */}

                            {/* <!-- Skill 4 --> */}
                            <div className="clearfix">
                                <h4>Logo Design</h4>
                                <div className="skill-value">90%</div>
                            </div>
                            <div id="skill_4" data-value="90" className="skill-container">
                                <div className="skill-percentage"></div>
                            </div>
                            {/* <!-- /Skill 4 --> */}
                        </div>
                    </div>

                    <div className=" col-xs-12 col-sm-6 ">
                        <div className="block-title">
                            <h2>Coding Skills</h2>
                        </div>

                        <div id="skills_2" className="skills-info skills-first-style">
                            {/* <!-- Skill 5 --> */}
                            <div className="clearfix">
                                <h4>HTML / CSS</h4>
                                <div className="skill-value">100%</div>
                            </div>
                            <div id="skill_5" data-value="100" className="skill-container">
                                <div className="skill-percentage"></div>
                            </div>
                            {/* <!-- /Skill 5 --> */}

                            {/* <!-- Skill 6 --> */}
                            <div className="clearfix">
                                <h4>PHP</h4>
                                <div className="skill-value">90%</div>
                            </div>
                            <div id="skill_6" data-value="90" className="skill-container">
                                <div className="skill-percentage"></div>
                            </div>
                            {/* <!-- /Skill 6 --> */}

                            {/* <!-- Skill 7 --> */}
                            <div className="clearfix">
                                <h4>JavaScript</h4>
                                <div className="skill-value">90%</div>
                            </div>
                            <div id="skill_7" data-value="90" className="skill-container">
                                <div className="skill-percentage"></div>
                            </div>
                            {/* <!-- /Skill 7 --> */}

                            {/* <!-- Skill 8 --> */}
                            <div className="clearfix">
                                <h4>Smarty / Twig</h4>
                                <div className="skill-value">85%</div>
                            </div>
                            <div id="skill_8" data-value="85" className="skill-container">
                                <div className="skill-percentage"></div>
                            </div>
                            {/* <!-- /Skill 8 --> */}
                        </div>
                    </div>
                </div>
            </div>
        </PageBody>
    );
};

export default ResumePage;

export const Head: HeadFC = () => <PageHead title="CV" />;
