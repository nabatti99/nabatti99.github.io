import { HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import PageHead from "../components/page-head/page-head";
import PageBody from "../components/page-body/page-body";

const HomePage: React.FC<PageProps> = () => {
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
                                                <h4>Frontend-developer</h4>
                                            </div>

                                            <div className="item">
                                                <h4>Web Designer</h4>
                                            </div>
                                        </div>

                                        <h1>Alex Smith</h1>
                                        <p>
                                            Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, risus non condimentum gravida, odio mauris ullamcorper felis,
                                            ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a placerat sapien pretium eu.
                                        </p>

                                        <div className="home-buttons">
                                            <a href="#" target="_blank" className="btn btn-primary">
                                                Download CV
                                            </a>
                                            <a href="#" target="_self" className="btn btn-secondary">
                                                Contact
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
                        <div className="p-50"></div>

                        <div className="block-title">
                            <h2>What I Do</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-sm-6">
                        <div className="info-list-w-icon">
                            <div className="info-block-w-icon">
                                <div className="ci-icon">
                                    <i className="linecons linecons-pen"></i>
                                </div>

                                <div className="ci-text">
                                    <h4>Copywrite</h4>
                                    <p>
                                        Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae
                                        lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.
                                    </p>
                                </div>
                            </div>

                            <div className="info-block-w-icon">
                                <div className="ci-icon">
                                    <i className="linecons linecons-display"></i>
                                </div>

                                <div className="ci-text">
                                    <h4>Web Design</h4>
                                    <p>
                                        Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae
                                        lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-6">
                        <div className="info-list-w-icon">
                            <div className="info-block-w-icon">
                                <div className="ci-icon">
                                    <i className="linecons linecons-shop"></i>
                                </div>

                                <div className="ci-text">
                                    <h4>Ecommerce</h4>
                                    <p>
                                        Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae
                                        lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.
                                    </p>
                                </div>
                            </div>

                            <div className="info-block-w-icon">
                                <div className="ci-icon">
                                    <i className="linecons linecons-megaphone"></i>
                                </div>

                                <div className="ci-text">
                                    <h4>Marketing</h4>
                                    <p>
                                        Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae
                                        lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- /Services --> */}

                <div className="row">
                    <div className="col-xs-12 col-sm-12">
                        <div className="p-20"></div>

                        {/* <!-- Testimonials --> */}
                        <div className="block-title">
                            <h2>Testimonials</h2>
                        </div>

                        <div id="testimonials_1" className="testimonials owl-carousel" data-mobile-items="1" data-tablet-items="2" data-items="2">
                            {/* <!-- Testimonial 1 --> */}
                            <div className="testimonial-item">
                                {/* <!-- Testimonial Content --> */}
                                <div className="testimonial-content">
                                    {/* <!-- Picture --> */}
                                    <div className="testimonial-picture">
                                        <img src="/img/testimonials/testimonial-1.jpg" alt="Billy Adams" />
                                    </div>
                                    {/* <!-- /Picture --> */}

                                    {/* <!-- Testimonial Text --> */}
                                    <div className="testimonial-text">
                                        <p>Donec eu est vel metus consequat volutpat. Nunc aliquet euismod mauris, a feugiat urna ullamcorper non.</p>
                                    </div>
                                    {/* <!-- /Testimonial Text --> */}

                                    {/* <!-- Testimonial author information --> */}
                                    <div className="testimonial-author-info">
                                        <h5 className="testimonial-author">Billy Adams</h5>
                                        <p className="testimonial-firm">Rolling Thunder</p>
                                    </div>
                                    {/* <!-- /Testimonial author information --> */}

                                    <div className="testimonial-icon">
                                        <i className="fa fa-quote-left"></i>
                                    </div>

                                    <div className="testimonial-icon-big">
                                        <i className="fa fa-quote-right"></i>
                                    </div>
                                </div>
                                {/* <!-- /Testimonial Content --> */}
                            </div>
                            {/* <!-- End of Testimonial 1 --> */}

                            {/* <!-- Testimonial 2 --> */}
                            <div className="testimonial-item">
                                {/* <!-- Testimonial Content --> */}
                                <div className="testimonial-content">
                                    {/* <!-- Picture --> */}
                                    <div className="testimonial-picture">
                                        <img src="/img/testimonials/testimonial-2.jpg" alt="Gary Johnson" />
                                    </div>
                                    {/* <!-- /Picture --> */}

                                    {/* <!-- Testimonial Text --> */}
                                    <div className="testimonial-text">
                                        <p>Nam tempor commodo mi id sodales. Aenean sit amet nibh nec sapien consequat porta a sit amet diam.</p>
                                    </div>
                                    {/* <!-- /Testimonial Text --> */}

                                    {/* <!-- Testimonial author information --> */}
                                    <div className="testimonial-author-info">
                                        <h5 className="testimonial-author">Gary Johnson</h5>
                                        <p className="testimonial-firm">Locost Accessories</p>
                                    </div>
                                    {/* <!-- /Testimonial author information --> */}

                                    <div className="testimonial-icon">
                                        <i className="fa fa-quote-left"></i>
                                    </div>

                                    <div className="testimonial-icon-big">
                                        <i className="fa fa-quote-right"></i>
                                    </div>
                                </div>
                                {/* <!-- /Testimonial Content --> */}
                            </div>
                            {/* <!-- End of Testimonial 2 --> */}

                            {/* <!-- End of Testimonial 3 --> */}
                            <div className="testimonial-item">
                                {/* <!-- Testimonial Content --> */}
                                <div className="testimonial-content">
                                    {/* <!-- Picture --> */}
                                    <div className="testimonial-picture">
                                        <img src="/img/testimonials/testimonial-3.jpg" alt="Daniel Pringle" />
                                    </div>
                                    {/* <!-- /Picture --> */}

                                    {/* <!-- Testimonial Text --> */}
                                    <div className="testimonial-text">
                                        <p>Etiam pretium ipsum quis justo dictum accumsan. Phasellus egestas odio a velit scelerisque.</p>
                                    </div>
                                    {/* <!-- /Testimonial Text --> */}

                                    {/* <!-- Testimonial author information --> */}
                                    <div className="testimonial-author-info">
                                        <h5 className="testimonial-author">Daniel Pringle</h5>
                                        <p className="testimonial-firm">Sagebrush</p>
                                    </div>
                                    {/* <!-- /Testimonial author information --> */}

                                    <div className="testimonial-icon">
                                        <i className="fa fa-quote-left"></i>
                                    </div>

                                    <div className="testimonial-icon-big">
                                        <i className="fa fa-quote-right"></i>
                                    </div>
                                </div>
                                {/* <!-- /Testimonial Content --> */}
                            </div>
                            {/* <!-- End of Testimonial 3 --> */}
                        </div>
                        {/* <!-- /Testimonials --> */}

                        <div className="p-40"></div>

                        {/* <!-- Clients Slider --> */}
                        <div className="block-title">
                            <h2>Clients</h2>
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

                        <div className="p-40"></div>
                    </div>
                </div>

                {/* <!-- Fun Facts --> */}
                <div className="row">
                    <div className="col-xs-12 col-sm-12">
                        <div className="block-title">
                            <h2>Fun Facts</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-sm-3">
                        <div className="lm-info-block gray-default">
                            <i className="linecons linecons-heart"></i>
                            <h4>Happy Clients</h4>
                            <span className="lm-info-block-value">578</span>
                            <span className="lm-info-block-text"></span>
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-3">
                        <div className="lm-info-block gray-default">
                            <i className="linecons linecons-clock"></i>
                            <h4>Working Hours</h4>
                            <span className="lm-info-block-value">4,780</span>
                            <span className="lm-info-block-text"></span>
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-3 ">
                        <div className="lm-info-block gray-default">
                            <i className="linecons linecons-star"></i>
                            <h4>Awards Won</h4>
                            <span className="lm-info-block-value">15</span>
                            <span className="lm-info-block-text"></span>
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-3 ">
                        <div className="lm-info-block gray-default">
                            <i className="linecons linecons-cup"></i>
                            <h4>Coffee Consumed</h4>
                            <span className="lm-info-block-value">1,286</span>
                            <span className="lm-info-block-text"></span>
                        </div>
                    </div>
                </div>
                {/* <!-- /Fun Facts --> */}

                <div className="p-40"></div>

                {/* <!-- Pricing --> */}
                <div className="row">
                    <div className=" col-xs-12 col-sm-12 ">
                        <div className="block-title">
                            <h2>Pricing</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className=" col-xs-12 col-sm-12 ">
                        <div className="fw-pricing clearfix row">
                            <div className="fw-package-wrap col-md-4 ">
                                <div className="fw-package">
                                    <div className="fw-heading-row">
                                        <span>Silver</span>
                                    </div>

                                    <div className="fw-pricing-row">
                                        <span>$64</span>
                                        <small>per month</small>
                                    </div>

                                    <div className="fw-button-row">
                                        <a href="#" target="_self" className="btn btn-secondary">
                                            Free Trial
                                        </a>
                                    </div>

                                    <div className="fw-default-row">Lorem ipsum dolor</div>
                                    <div className="fw-default-row">Pellentesque scelerisque</div>
                                    <div className="fw-default-row">Morbi eu sagittis</div>
                                </div>
                            </div>

                            <div className="fw-package-wrap col-md-4 highlight-col ">
                                <div className="fw-package">
                                    <div className="fw-heading-row">
                                        <span>Gold</span>
                                    </div>

                                    <div className="fw-pricing-row">
                                        <span>$128</span>
                                        <small>per month</small>
                                    </div>

                                    <div className="fw-button-row">
                                        <a href="#" target="_self" className="btn btn-primary">
                                            Free Trial
                                        </a>
                                    </div>

                                    <div className="fw-default-row">Lorem ipsum dolor</div>
                                    <div className="fw-default-row">Pellentesque scelerisque</div>
                                    <div className="fw-default-row">Morbi eu sagittis</div>
                                    <div className="fw-default-row">Donec non diam</div>
                                    <div className="fw-default-row"></div>
                                </div>
                            </div>

                            <div className="fw-package-wrap col-md-4 default-col ">
                                <div className="fw-package">
                                    <div className="fw-heading-row">
                                        <span>Platinum</span>
                                    </div>

                                    <div className="fw-pricing-row">
                                        <span>$256</span>
                                        <small>per month</small>
                                    </div>

                                    <div className="fw-button-row">
                                        <a href="#" target="_self" className="btn btn-primary">
                                            Free Trial
                                        </a>
                                    </div>

                                    <div className="fw-default-row">Lorem ipsum dolor</div>
                                    <div className="fw-default-row">Pellentesque scelerisque</div>
                                    <div className="fw-default-row">Morbi eu sagittis</div>
                                    <div className="fw-default-row">Donec non diam</div>
                                    <div className="fw-default-row">Aenean nec libero</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Pricing --> */}
                </div>
            </div>
        </PageBody>
    );
};

export default HomePage;

export const Head: HeadFC = () => <PageHead />;
