import { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import PageBody from "../components/page-body/page-body";
import PageHead from "../components/page-head/page-head";
import { upperCaseFirstLetter } from "../utilities/text.util";
import cls from "classnames";
import { languages } from "../data/languages.data";

const ResearchesPage: React.FC<PageProps> = () => {
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
            name: "Deep Learning",
            level: "advanced",
        },
        {
            name: "Tensorflow",
            level: "advanced",
        },
        {
            name: "Machine Learning/AI",
            level: "intermediate",
        },
        {
            name: "GIS",
            level: "intermediate",
        },
        {
            name: "Knowledge About Water Resources",
            level: "intermediate",
        },
        {
            name: "Knowledge About Construction",
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
            name: "Teamwork",
            level: "advanced",
            tooltip: "Work well with over 20 people in a team or multiple teams",
        },
        {
            name: "Problem Solving",
            level: "advanced",
            tooltip: "Give idea & solve problems quickly",
        },
        {
            name: "Time Management",
            level: "advanced",
            tooltip: "Understanding about planning, alocate time effectively, time estimation, time techniques",
        },
        {
            name: "Graphic Design",
            level: "intermediate",
            tooltip: "Can design a logo, poster, banner, etc.",
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
                        Welcome to my research space! My academic journey began at university, where I juggled coursework, extracurricular activities, and research projects. This
                        experience showcases my ability to juggle multiple commitments with enthusiasm and dedication. I hope this provides a clear picture of my determination and
                        capabilities.
                    </h4>
                </div>
            </div>

            <div id="content" className="page-content site-content single-post" role="main">
                {/* Education */}
                <div className="row">
                    <div className=" col-xs-12 col-sm-12 ">
                        <div className="block-title">
                            <h2>Education</h2>
                        </div>

                        <div id="timeline_1" className="timeline clearfix">
                            <div className="timeline-item clearfix">
                                <h5 className="item-period">2020 - 2023</h5>
                                <a href="https://dut.udn.vn/khoacntt" target="_blank" className="item-company">
                                    Information Technology Faculty - DUT
                                </a>
                                <h4 className="item-title">Software Engineer</h4>
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
                {/* Research Experiences */}
                <div className="row">
                    <div className=" col-xs-12 col-sm-12 ">
                        <div className="block-title">
                            <h2>Research Experience</h2>
                        </div>

                        <div className="timeline clearfix">
                            <div className="timeline-item clearfix">
                                <h5 className="item-paper">12-2022</h5>
                                <a href="https://drive.google.com/file/d/1HFKENMTkHRCHVbvzTjZjloY3Vijtpda6/view?usp=sharing" target="_blank" className="item-company">
                                    N.D.Huy, N.L.A.Minh, P.T.Hung, <strong>"Using AI and Blockchain in Construction"</strong>, Da Nang University of Science and Technology, Da Nang
                                    City.
                                </a>
                            </div>
                            <div className="timeline-item clearfix">
                                <h5 className="item-paper">12-2022</h5>
                                <a href="https://drive.google.com/file/d/1JA5B-WaL-xGWidOly_IqIYHG6GkJk5kJ/view?usp=sharing" target="_bank" className="item-company">
                                    N.D.Huy, N.L.A.Minh, N.T.Hao, V.N.D.Phuoc, <strong>"Hydrology mobile application ecosystem"</strong>, Da Nang University of Science and
                                    Technology, Da Nang City.
                                </a>
                            </div>
                            <div className="timeline-item clearfix">
                                <h5 className="item-paper">02-2022</h5>
                                <a href="https://drive.google.com/file/d/1ko7fpVG2bqOHT6Qjju_McFFVwJC0bUSm/view?usp=sharing" target="_bank" className="item-company">
                                    N.D.Huy, N.L.A.Minh, P.T.Hung, V.N.D.Phuoc,{" "}
                                    <strong>"Evaluation of Machine Learning and Deep Learning models for drought forecasting using weather data"</strong>, Da Nang University of
                                    Science and Technology, Da Nang City.
                                </a>
                            </div>
                            <div className="timeline-item clearfix">
                                <h5 className="item-paper">02-2022</h5>
                                <a href="https://drive.google.com/file/d/1ko7fpVG2bqOHT6Qjju_McFFVwJC0bUSm/view?usp=sharing" target="_bank" className="item-company">
                                    N.D.Huy, N.L.A.Minh, P.T.Hung, V.N.D.Phuoc, <strong>"Build mobile application using Artificial Intelligence to forecast drought"</strong>, Water
                                    Resource Engineering Faculty, Da Nang City.
                                </a>
                            </div>
                            <div className="timeline-item clearfix">
                                <h5 className="item-paper">08-2021</h5>
                                <a href="https://drive.google.com/file/d/1DBtnIcQcaze-EuV0DXFTyVYp-aaWRjZ1/view?usp=sharing" target="_bank" className="item-company">
                                    N.D.Huy, N.L.A.Minh, P.T.Hung, V.N.D.Phuoc,{" "}
                                    <strong>"Building mobile applications in Agriculture using Artificial Intelligence and Remote Sensing"</strong>, Da Nang University of Science
                                    and Technology, Da Nang City.
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Honors and awards */}
                <div className="row">
                    <div className=" col-xs-12 col-sm-6 ">
                        <div className="block-title">
                            <h2 className="mr-2">Honors and awards</h2>
                            <a href="https://drive.google.com/drive/folders/13ClK_EWUBcX5l1P3LXjNXyuQPDO8rZ59?usp=sharing" target="_blank">
                                - Certificate Links
                            </a>
                        </div>
                        <div id="timeline_2" className="col-xs-12 col-sm-12 ">
                            {/* International  */}
                            <div className="timeline-item clearfix">
                                <h5 className="item-period current">International</h5>
                                <h4 className="item-title">International Programming Contest (2021)</h4>
                                <p>First prize of the international programming contest UAVS Hackatrix 2021 in New South Wales, Australia.</p>
                                <strong>News:</strong>
                                <a href="https://vov.vn/nguoi-viet/ung-dung-ho-tro-nong-dan-trong-trong-trot-gianh-giai-nhat-cuoc-thi-uavs-hackatrix-2021-895514.vov"> VOV </a>|
                                <a href="https://nhandan.vn/sinh-vien-da-nang-dat-giai-nhat-cuoc-thi-y-tuong-cong-nghe-uavs-hackatrix-2021-post668283.html"> Nhandan.com </a>|
                                <a href="https://doanthanhnien.ctuet.edu.vn/2021/10/05/chung-ket-uavs-hackatrix-2021-hoi-tu-nhung-y-tuong-cong-nghe-dot-pha/"> Doanthanhnien </a>|
                                <a href="https://www.udn.vn/bankhcnmt/tin-tuc/sinh-vien-dai-hoc-da-nang-dat-quan-quan-cuoc-thi-y-tuong-cong-nghe-uavs-hackatrix-2021-voi-ung-dung-ho-tro-nong-dan-trong-trot">
                                    {" "}
                                    Daihocdanang{" "}
                                </a>
                                |<a href="https://www.vietnamplus.vn/sinh-vien-viet-o-australia-hien-ke-thuc-day-phat-trien-cong-nghiep-post744756.vnp"> Vietnamplus </a>|
                                <a href="https://thanhgiong.vn/chung-ket-uavs-hackatrix-2021-ung-dung-ho-tro-nong-dan-trong-trong-trot-cua-sinh-vien-da-nang-gianh-giai-nhat-45825.html">
                                    {" "}
                                    ThanhGiong{" "}
                                </a>
                                |<a href="https://svvn.tienphong.vn/phan-mem-ho-tro-nong-dan-cua-ba-sinh-vien-dh-da-nang-post1384067.tpo"> TienPhong </a>|
                                <a href="https://www.google.com/search?q=UAVS+Hackatrix+2021&oq=UAVS+Hackatrix+2021&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRhBMgYIAhBFGEHSAQg4Mjg4ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#ip=1">
                                    {" "}
                                    See more...
                                </a>
                            </div>
                            {/* National  */}
                            <div className="timeline-item clearfix">
                                <h5 className="item-period current">National</h5>
                                <h4 className="item-title">Vietnam AI and Blockchain Programming Contest (2023)</h4>
                                <p>Consolation prize of Vietnam AI and Blockchain Programming Contest 2023 - Oraichain Hackathon.</p>
                                <strong>News:</strong>
                                <a href="https://doanthanhnien.vn/tin-tuc/tuoi-tre-sang-tao/tong-ket-trao-giai-cuoc-thi-%E2%80%9Coraichain-hackathon%E2%80%9D-nam-2023">
                                    {" "}
                                    Doanthanhnien{" "}
                                </a>
                                |
                                <a href="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0nwdwCe9ggq6yBdiBQrpDC6AyMh4NMqGeEqVTidqc753raFjnQh6jTXrk8AJL1Nkzl%26id%3D100010185792295&show_text=true&width=500&is_preview=true%22%20width%3D%22500%22%20height%3D%220%22%20style%3D%22border%3Anone%3Boverflow%3Ahidden%22%20scrolling%3D%22no%22%20frameborder%3D%220%22%20allowfullscreen%3D%22true%22%20allow%3D%22autoplay%3B%20clipboard-write%3B%20encrypted-media%3B%20picture-in-picture%3B%20web-share">
                                    {" "}
                                    Facebookshare{" "}
                                </a>
                                <h4 className="item-title">National Scientific Research (2022)</h4>
                                <p>Consolation of National Scientific Research Award 2021 – 2022.</p>
                            </div>
                            {/* City  */}
                            <div className="timeline-item clearfix">
                                <h5 className="item-period current">Da Nang City</h5>
                                <h4 className="item-title">Da Nang Startup Runway competition (2021)</h4>
                                <p>First prize of the Da Nang Startup Runway competition 2021.</p>
                                <strong>News:</strong>
                                <a href="http://due.udn.vn/en-us/news/newsdetail/id/14143"> due.udn.vn </a>|
                                <a href="https://tuoitredhdn.udn.vn/doan-dai-hoc-da-nang/co-so-doan-thanh-vien/truong-dai-hoc-kinh-te-dhdn-to-chuc-thanh-cong-chung-ket-startup-runway-2021-nhieu-y-tuong-khoi-nghiep-duoc-ho-tro-de-ung-dung-thuc-tien-1672.html">
                                    {" "}
                                    tuoitredhdn{" "}
                                </a>
                                <h4 className="item-title">Da Nang Science Research Student (2021)</h4>
                                <p>Consolation Prize of Da Nang Science Research Student 2021.</p>
                                <strong>News:</strong>
                                <a href="hhttps://en.dut.udn.vn/results-of-the-selection-of-topics-for-the-final-round-of-the-student-scientific-research-contest-in-danang-city-in-2021-70.html">
                                    {" "}
                                    dut.udn{" "}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className=" col-xs-12 col-sm-6 ">
                        <div className="block-title" style={{ opacity: 0 }}>
                            <h2>xxxx</h2>
                        </div>
                        <div id="timeline_2" className="col-xs-12 col-sm-12 ">
                            {/* Da Nang University  */}
                            <div className="timeline-item clearfix">
                                <h5 className="item-period current">Da Nang University</h5>
                                <h4 className="item-title">Technology Innovation Startup Competition (2021)</h4>
                                <p>Second prize in the Technology Innovation Startup Competition at the University of Danang in 2021.</p>
                                News:
                                <a href="https://www.udn.vn/english/Detail/the-final-round-of-innovative-technology-entrepreneurship-the-university-of-danang-2021-contest-spreading-the-spirit-of-innovation-40">
                                    {" "}
                                    udn.vn
                                </a>
                                <h4 className="item-title">Students Scientific Research (2021, 2022)</h4>
                                <p>Two Final awards for students Scientific Research at the University of Danang 2020 – 2021 and 2021 – 2022.</p>
                            </div>
                            {/* DUT  */}
                            <div className="timeline-item clearfix">
                                <h5 className="item-period current">Da Nang University of Science and Technology</h5>
                                <h4 className="item-title">Scientific Research and Technology Exhibition BK-TechShow (2020, 2021, 2022)</h4>
                                <p>
                                    One Best Presentation Second Prize, Two Technical Second Prizes, and One Technical Third Prize were awarded in the student competition for
                                    Danang University of Science and Technology's scientific research and technology exhibition BK-TechShow from 2020 to 2022.
                                </p>
                                News:
                                <a href="https://danang.gov.vn/chinh-quyen/chi-tiet?id=51607&_c=3,9,33"> danang.gov.vn </a>|
                                <a href="https://dantri.com.vn/giao-duc/sinh-vien-gay-an-tuong-voi-ung-dung-giup-ung-pho-ngap-lut-do-thi-20221218131014061.htm"> dantri </a>
                                <h4 className="item-title">Hult Prize (2021)</h4>
                                <p>Second prize in the Hult Prize startup competition at DUT 2021.</p>
                                News:
                                <a href="https://baodanang.vn/english/education-science/202101/hult-prize-at-dut-useful-startup-playground-for-students-3875737/"> baodanang </a>
                            </div>
                            {/* Faculty  */}
                            <div className="timeline-item clearfix">
                                <h5 className="item-period current">Faculty of Water Resource Engineering </h5>
                                <h4 className="item-title">Student Science Research Competition (2019, 2020, 2021, 2022, 2023)</h4>
                                <p>
                                    One First Prize, Two Second prizes and Two Technical Prizes at faculty level of student Science Research competition at Danang University of
                                    Science and Technology in from 2020 – 2022.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* References*/}
                <div className="row">
                    <div className=" col-xs-12 col-sm-6 ">
                        <div className="block-title">
                            <h2>References</h2>
                        </div>
                        <div id="timeline_2" className="col-xs-12 col-sm-12 ">
                            {/* International  */}
                            <div className="timeline-item clearfix">
                                <h5 className="item-period current">Da Nang University of Science and Technology</h5>
                                <h4 className="item-title">Assoc. PhD. Vo Ngoc Duong</h4>
                                <p>Faculty of Water Resource Engineering</p>
                                <a href="http://scv.udn.vn/vnduong" target="_blank">
                                    {" "}
                                    scv.udn.vn
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className=" col-xs-12 col-sm-6 ">
                        <div className="block-title" style={{ opacity: 0 }}>
                            <h2>xxxx</h2>
                        </div>
                        <div id="timeline_2" className="col-xs-12 col-sm-12 ">
                            {/* Da Nang University  */}
                            <div className="timeline-item clearfix">
                                <h5 className="item-period current">Da Nang University of Science and Technology</h5>
                                <h4 className="item-title">PhD. Pham Thanh Hung</h4>
                                <p>Faculty of Water Resource Engineering</p>
                                <a href="http://scv.udn.vn/pthung" target="_blank">
                                    {" "}
                                    scv.udn.vn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Languages */}
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

                {/* Skills */}
                <div className="row">
                    <div className=" col-xs-12 col-sm-12 ">
                        <div className="p-40"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-6">
                        <div className="block-title">
                            <h2>Academic Skills</h2>
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

export default ResearchesPage;

export const Head: HeadFC = () => <PageHead title="Research" />;
