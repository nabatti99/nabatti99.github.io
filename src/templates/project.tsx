import { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import PageBody from "../components/page-body/page-body";
import PageHead from "../components/page-head/page-head";
import { projects } from "../data/projects.data";

const ProjectDetailPage: React.FC<PageProps<unknown, (typeof projects)[0]>> = ({ pageContext }) => {
    React.useEffect(() => {
        const key = "project_detail_js";
        document.getElementById(key)?.remove();

        const script = document.createElement("script");
        script.id = key;
        script.src = "/js/project-detail.js";

        document.body.appendChild(script);
    }, []);

    return (
        <PageBody>
            <div id="content" className="page-content site-content single-post" role="main">
                <div id="ajax-page" className="ajax-page-content">
                    <div className="ajax-page-wrapper">
                        <div className="ajax-page-nav">
                            <div className="nav-item ajax-page-prev-next">
                                <a className="ajax-page-load" href="portfolio-project-3.html">
                                    <i className="lnr lnr-chevron-left"></i>
                                </a>
                                <a className="ajax-page-load" href="portfolio-project-2.html">
                                    <i className="lnr lnr-chevron-right"></i>
                                </a>
                            </div>
                            <div className="nav-item ajax-page-close-button">
                                <a id="ajax-page-close-button" href="/projects">
                                    <i className="lnr lnr-cross"></i>
                                </a>
                            </div>
                        </div>

                        <div className="ajax-page-title">
                            <h1>{pageContext.name}</h1>
                        </div>

                        <div className="row">
                            <div className="col-sm-8 col-md-8 portfolio-block">
                                <div className="owl-carousel portfolio-page-carousel" data->
                                    <div className="item">
                                        <img src={pageContext.imageUrl} alt={pageContext.name} />
                                    </div>
                                </div>

                                {/* <div className="portfolio-page-video embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item" src="https://player.vimeo.com/video/97102654?autoplay=0"></iframe>
                                </div> */}

                                <script src="./index.js" type="text/javascript"></script>
                            </div>

                            <div className="col-sm-4 col-md-4 portfolio-block">
                                {/* <!-- Project Description --> */}
                                <div className="project-description">
                                    <div className="block-title">
                                        <h3>Description</h3>
                                    </div>
                                    <ul className="project-general-info">
                                        {/* <li>
                                            <p>
                                                <i className="fa fa-globe"></i>{" "}
                                                <a href="#" target="_blank">
                                                    www.project-site.com
                                                </a>
                                            </p>
                                        </li> */}
                                        <li>
                                            <p>
                                                <i className="fa fa-calendar"></i> 25 december, 2016
                                            </p>
                                        </li>
                                    </ul>

                                    <p>{pageContext.description}</p>
                                    {/* <!-- /Project Description --> */}

                                    {/* <!-- Technology --> */}
                                    <div className="tags-block">
                                        <div className="block-title">
                                            <h3>Technology</h3>
                                        </div>
                                        <ul className="tags">
                                            {pageContext.techStacks.map((techStack) => (
                                                <li key={techStack}>
                                                    <a href="#">{techStack}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {/* <!-- /Technology --> */}

                                    {/* <!-- Share Buttons --> */}
                                    {/* <div className="btn-group share-buttons">
                                        <a href="#" target="_blank" className="btn">
                                            <i className="fab fa-facebook-f"></i>{" "}
                                        </a>
                                        <a href="#" target="_blank" className="btn">
                                            <i className="fab fa-twitter"></i>{" "}
                                        </a>
                                        <a href="#" target="_blank" className="btn">
                                            <i className="fab fa-dribbble"></i>{" "}
                                        </a>
                                    </div> */}
                                    {/* <!-- /Share Buttons --> */}
                                </div>
                                {/* <!-- Project Description --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageBody>
    );
};

export default ProjectDetailPage;

export const Head: HeadFC = () => <PageHead title="Project Detail" />;
