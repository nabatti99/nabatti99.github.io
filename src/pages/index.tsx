import { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import PageBody from "../components/page-body/page-body";
import PageHead from "../components/page-head/page-head";

const HomePage: React.FC<PageProps> = () => {
    const whatICanDoContents = [
        {
            icon: "linecons-display",
            title: "Full-stack Web Development",
            description:
                "Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.",
        },
        {
            icon: "linecons-data",
            title: "Data Analyzing",
            description:
                "Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.",
        },
        {
            icon: "linecons-eye",
            title: "Computer Vision",
            description:
                "Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.",
        },
        {
            icon: "linecons-world",
            title: "Blockchain",
            description:
                "Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.",
        },
    ];

    const latestProjectsContents = [
        {
            title: "NAPA Global: MPC-CMP Wallet",
            description: "Create a blockchain-base security wallet using MPC-CMP algorithm.",
            position: "Technical leader (Wallet team)",
            techStacks: ["OpenSSL", "MPC-Lib Cosigner (C++)", "AWS (Nitro, KMS, DynamoDB, Cognito)", "NodeJS (BE Server)", "Solidity (Blockchain)"],
            date: "Nov.2023 - Mar.2024",
            img: "/img/clients/client-7.png",
        },
        {
            title: "NAPA Global: Datasource",
            description: "A blockchain-based hackathon platform.",
            position: "Full-stack web developer",
            techStacks: ["Ruby", "MongoDB", "Flask (AI Server)"],
            date: "Oct.2023 - Dec.2023",
            img: "/img/clients/client-7.png",
        },
        {
            title: "Startup : The Rike",
            description: "Bring products of Vietnamese farmers to the US market.",
            position: "Technical leader",
            techStacks: ["NextJS (Client website)", "Shopify", "Amazon for Retailer (E-commerce platform)", "NestJS (BE)", "AppSheet (Admin)", "MongoDB"],
            date: "Feb.2023 - Nov.2023",
            img: "/img/clients/client-7.png",
        },
    ];

    return (
        <PageBody>
            <div id="content" className="page-content site-content single-post" role="main">
                {/* <!-- Home Page Top Part --> */}
                <div className="row">
                    <div className=" col-xs-12 col-sm-12">
                        <div className="home-content">
                            <div className="row flex-v-align">
                                <div className="col-sm-12 col-md-5 col-lg-5">
                                    <div className="home-photo">
                                        <div
                                            className="hp-inner"
                                            style={{
                                                backgroundImage: "url(/img/main_photo.jpg)",
                                            }}
                                        ></div>
                                    </div>
                                </div>

                                <div className="col-sm-12 col-md-7 col-lg-7">
                                    <div className="home-text hp-left">
                                        <div className="owl-carousel text-rotation">
                                            <div className="item">
                                                <h4>Full-stack Developer</h4>
                                            </div>

                                            <div className="item">
                                                <h4>AI Engineer</h4>
                                            </div>

                                            <div className="item">
                                                <h4>Blockchain Developer</h4>
                                            </div>
                                        </div>

                                        <h1>Nguyen Le Anh Minh</h1>
                                        <p>
                                            Eager to adopt and learn new technologies. Enthusiastic to attend a Master of Computer Science in order to understand and apply
                                            different Computer Science concepts.
                                        </p>

                                        <div className="home-buttons">
                                            <a href="/assets/NguyenLeAnhMinh_CV.pdf" download="NguyenLeAnhMinh_CV.pdf" className="btn btn-primary">
                                                Download CV
                                            </a>
                                            <a href="/contact" target="_self" className="btn btn-secondary">
                                                Contact Me
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Home Page Top Part --> */}

                {/* <!-- Services --> */}
                <div className="row">
                    <div className="col-xs-12 col-sm-12">
                        <div className="block-title p-50">
                            <h2>What I Can Do</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {whatICanDoContents.slice(0, 2).map((content) => (
                        <div key={content.title} className="col-xs-12 col-sm-6">
                            <div className="info-list-w-icon">
                                <div className="info-block-w-icon">
                                    <div className="ci-icon">
                                        <i className={`linecons ${content.icon}`}></i>
                                    </div>

                                    <div className="ci-text">
                                        <h4>{content.title}</h4>
                                        <p>{content.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {whatICanDoContents.slice(2, 4).map((content) => (
                        <div key={content.title} className="col-xs-12 col-sm-6">
                            <div className="info-list-w-icon">
                                <div className="info-block-w-icon">
                                    <div className="ci-icon">
                                        <i className={`linecons ${content.icon}`}></i>
                                    </div>

                                    <div className="ci-text">
                                        <h4>{content.title}</h4>
                                        <p>{content.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* <!-- /Services --> */}

                {/* <!-- Languages & Frameworks --> */}
                <div className="row">
                    <div className="col-xs-12 col-sm-12">
                        {/* <!-- Clients Slider --> */}
                        <div className="block-title p-20">
                            <h2>Languages & Frameworks</h2>
                        </div>

                        <div id="clients_1" className="clients owl-carousel" data-mobile-items="1" data-tablet-items="3" data-items="6">
                            <div className="client-block">
                                <a href="#" target="_blank" title="Golden Grid">
                                    <img src="/img/clients/client-1.png" alt="Golden Grid" />
                                </a>
                            </div>

                            <div className="client-block">
                                <a href="#" target="_blank" title="Sweety">
                                    <img src="/img/clients/client-2.png" alt="Sweety" />
                                </a>
                            </div>

                            <div className="client-block">
                                <a href="#" target="_blank" title="Magic Furnitures">
                                    <img src="/img/clients/client-3.png" alt="Magic Furnitures" />
                                </a>
                            </div>

                            <div className="client-block">
                                <a href="#" target="_blank" title="LifeGuard">
                                    <img src="/img/clients/client-4.png" alt="LifeGuard" />
                                </a>
                            </div>

                            <div className="client-block">
                                <a href="#" target="_blank" title="LESS">
                                    <img src="/img/clients/client-5.png" alt="LESS" />
                                </a>
                            </div>

                            <div className="client-block">
                                <a href="#" target="_blank" title="Design Lovers">
                                    <img src="/img/clients/client-6.png" alt="Design Lovers" />
                                </a>
                            </div>

                            <div className="client-block">
                                <a href="#" target="_blank" title="WordPress">
                                    <img src="/img/clients/client-7.png" alt="WordPress" />
                                </a>
                            </div>
                        </div>
                        {/* <!-- /Clients Slider --> */}
                    </div>
                </div>
                {/* <!-- /Languages & Frameworks --> */}

                {/* <!-- Latest Projects --> */}
                <div className="row">
                    <div className=" col-xs-12 col-sm-12 ">
                        <div className="block-title p-20">
                            <h2>Latest Projects</h2>
                        </div>
                    </div>

                    {latestProjectsContents.map((content) => (
                        <div key={content.title} className=" col-xs-12 col-sm-9">
                            <a href="/project/id" className="lightbox">
                                <div className="project-items clearfix">
                                    <div className="project-item-logo">
                                        <img src="/img/clients/client-7.png" alt="logo" />
                                    </div>

                                    <div className="project-item-content">
                                        <div className="project-item-title">
                                            <h4>{content.title}</h4>
                                        </div>

                                        <div className="project-item-description">
                                            <p>{content.description}</p>

                                            <p>
                                                <strong>Position:</strong> {content.position}
                                            </p>
                                        </div>

                                        <div className="project-item-tech-stacks">
                                            {content.techStacks.map((techStack) => (
                                                <span key={techStack}>{techStack}</span>
                                            ))}
                                        </div>

                                        <div className="project-item-date">{content.date}</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
                {/* <!-- /Latest Projects --> */}
            </div>
        </PageBody>
    );
};

export default HomePage;

export const Head: HeadFC = () => <PageHead />;
