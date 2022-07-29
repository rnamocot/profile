import React from 'react';
import { FaUserGraduate, FaBookOpen, FaCogs, FaCode } from "react-icons/fa";
import { GiArchiveResearch } from "react-icons/gi";
import { SiCodersrank, SiVisualstudiocode, SiJquery, SiJavascript, SiPhp, SiLaravel, SiMysql, SiFirebase, SiCsharp, SiYoast, SiGoogletagmanager, SiAdobephotoshop, SiJpeg } from "react-icons/si";
import { FaPhoneSquareAlt,FaLinkedin,FaEnvelope,FaArrowAltCircleDown,FaHtml5, FaCss3Alt, FaSass, FaReact, FaBootstrap, FaWordpress, FaNodeJs, FaSearch, FaGithubSquare } from "react-icons/fa";
import { TbApi, TbError404Off, TbView360 } from "react-icons/tb";
import { DiGoogleAnalytics } from "react-icons/di";




const Home = () => {
    return (
        <>
            <div className='banner-sec'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='banner-text'>
                                <h3>Hello,</h3>
                                <h1>I'm Renie Namocot</h1>
                                <h4>Website Developer</h4>
                                <div className='banner-text-sub'>
                                    <h2>I build things for the web.</h2>
                                    <p>I'm a website developer based in Philippines, specializing in building exceptional websites, applications and everything in between.</p>
                                </div>
                                <div className='btn-gt'>
                                    <a href="mailto:namocotrenie@gmail.com">Contact Me</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='banner-image'>
                                <img src='./images/bannerhead.png' className='mybanner-right' width="100%" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='about-sec'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-7'>
                            <div className='abt-row' id="about">
                                <div className='abt-heading' >
                                    <h2>BIOGRAPHY</h2>< FaBookOpen />
                                </div>
                            </div>
                            <div className='bio-contents'>
                                <p>Hi, I'm Renie Namocot, currently working as Web Developer in an Australian company. I graduated a Bachelor of Science in Information Techonology (BSIT) in the Phillipines.</p>
                                <p>Previously, I worked in some local companies here in the Philippines as a Web Developer, where I worked on developing company websites and e-commerce sites, applications and and online softwares for companies.</p>
                                <p>Aside from work, I harness my skills at home by creating some website designs and applications using newly release updates ofn programming languages and frameworks.</p>
                            </div>
                            <div className='row educ-row'>
                                <div className='col-md-7'>
                                    <div className='educ-con'>
                                        <h2>Education</h2>

                                        <div className='educ-col2'>
                                            <div className='educ-icon'>
                                                <FaUserGraduate />
                                            </div>
                                            <div className='col-content'>
                                                <p> Bachelor of Science in Information Technology <br></br><span className='educ-school'>Bachelor College of Technology</span></p>
                                            </div>
                                        </div>
                                        <div className='educ-col2'>
                                            <div className='educ-icon'>
                                                <FaUserGraduate />
                                            </div>
                                            <div className='col-content'>
                                                <p> Associate in Computer Technology <br></br><span className='educ-school'>Bachelor College of Technology</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-5'>
                                    <h2>Interests</h2>
                                    <div className='interest-list'>
                                        <p>Website Development</p>
                                        <p>Software Engineering</p>
                                        <p>SEO</p>
                                        <p>Marketing</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='col-md-5 bio-img-col'>
                            <img src='./images/me.png' className='bio-img' width="100%" />
                        </div>
                    </div>
                </div>
            </div>


            <div className='skills-sec'>
                <div className='container'>
                    <div className='row' id="skills">
                        <div className='skill-heading'>
                            <h3 className='skill-heading-text'>SKILLS</h3><FaCogs />
                        </div>
                        <div className='col-md-4 '>
                            <div className='skill-col'>
                                <div className='heading-icon'>
                                    <SiVisualstudiocode />
                                </div>
                                <h2>Front-End</h2>
                                <div className='skills-listing'>
                                    <FaHtml5 className='icon-html' />
                                    <FaCss3Alt className='icon-css' />
                                    <SiJquery className='icon-jquery' />
                                    <SiJavascript className='icon-js' />
                                    <FaSass className='icon-sass' />
                                    <FaReact className='icon-react' />
                                    <FaBootstrap className='icon-bootstrap' />
                                    <FaWordpress className='icon-wordpress' />

                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 '>
                            <div className='skill-col'>
                                <div className='heading-icon'>
                                    <FaCode />
                                </div>
                                <h2>Back-End</h2>
                                <div className='skills-listing'>
                                    <SiPhp className='icon-php' />
                                    <SiLaravel className='icon-laravel' />
                                    <SiJavascript className='icon-js' />
                                    <FaNodeJs className='icon-node-js' />
                                    <SiMysql className='icon-sql' />
                                    <SiFirebase className='icon-firebase' />
                                    <SiCsharp className='icon-csharp' />
                                    <FaGithubSquare className='icon-git' />

                                    {/* <p>PHP(Laravel), C#, Javascript ,Node Js, MySql, Firebase, API</p> */}
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='skill-col'>
                                <div className='heading-icon'>
                                    <GiArchiveResearch />
                                </div>
                                <h2>Optimisation</h2>
                                <div className='skills-listing'>
                                    <FaSearch className='icon-search' />
                                    <SiYoast className='icon-yoast' />
                                    <DiGoogleAnalytics className='icon-ga' />
                                    <SiGoogletagmanager className='icon-gtm' />
                                    <SiAdobephotoshop className='icon-ps' />
                                    <TbError404Off className='icon-404' />
                                    <SiJpeg className='icon-jpeg' />

                                    {/* <p>Google Search Console , Yoast, GA , GTM, Meta Tags </p> */}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className='experience-sec'>
                <div className='container'>
                    <div className='row' >
                        <div className='col-md-3 ladder'>
                            <div className='exp-heading'>
                                <h2>Experience</h2>< SiCodersrank />
                            </div>
                            <div className='ladder-col'>
                                <img src='./images/ladder2.png' className='ladder2-img' width="100%" />
                            </div>
                        </div>
                        <div className='col-md-9 col-exp-main'>
                            <div className='exp-col'>

                                <div className='exp-title'>
                                    <h3>PHP Web Developer</h3>
                                </div>
                                <div className='exp-company'>
                                    <h4>EMAPTA</h4>
                                </div>
                                <div className='exp-work-text'>
                                    <p>Built and maintain websites from clients , this includes seo optimsation and support google ads marketing for data and analytics. using (HTML, CSS, Bootstrap,React Js, JS and Git). I handled various of CMS as well like Shopify, Wordpress , Magento, Bigcommerce, Squarespace that depends on clients requirements</p>
                                </div>
                                <div className='exp-work-year'>
                                    <h6>2020 - Current</h6>
                                </div>
                            </div>
                            <div className='exp-col'>

                                <div className='exp-title'>
                                    <h3>Website Developer</h3>
                                </div>
                                <div className='exp-company'>
                                    <h4>Gazillionaires Trading Inc</h4>
                                </div>
                                <div className='exp-work-text'>
                                    <p>I am a sole website developer, I built company static and e-commerce websites - using (HTML, CSS , JS ,Git and API)</p>
                                </div>
                                <div className='exp-work-year'>
                                    <h6>2019 - 2020</h6>
                                </div>
                            </div>
                            <div className='exp-col'>

                                <div className='exp-title'>
                                    <h3>Website Developer</h3>
                                </div>
                                <div className='exp-company'>
                                    <h4>LTY Group Philippines Inc.</h4>
                                </div>
                                <div className='exp-work-text'>
                                    <p>Built and maintain company websites - using (PHP, JS, JS, CSS ,Git, HTML and Wordpress)</p>
                                </div>
                                <div className='exp-work-year'>
                                    <h6>Aug 2019 - Oct 2019</h6>
                                </div>
                            </div>
                            <div className='exp-col'>

                                <div className='exp-title'>
                                    <h3>Junior Software Engineer</h3>
                                </div>
                                <div className='exp-company'>
                                    <h4>Business Swicth Manila</h4>
                                </div>
                                <div className='exp-work-text'>
                                    <p>Built company websites for Australian business owners - using (PHP, JS, Angular JS, CSS , HTML, Git and Wordpress) in Agile Development flow</p>
                                </div>
                                <div className='exp-work-year'>
                                    <h6>2017 - 2019</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='project-sec'>
                <div className='container'>
                    <div className='row' id="projects">
                        <div className='project-heading'>
                            <h3 className='project-heading-text'>Projects</h3><FaCogs />
                        </div>
                        <div className='project-notes'>
                            <p>I built and published a lot of websites and applications using some frameworks like React Js, Laravel ,CMS and API integrations.</p>
                            <p>Here are some of my previous projects that are allowed to display in my portfolio</p>
                        </div>
                        <div className='arrow'>
                            <FaArrowAltCircleDown className='arrow-down-p'/>
                        </div>
                        <div className='col-md-4'>
                            <div className='project-col'>
                                <div className='project-img-col'>
                                    <img src='./images/projects/eastrade.png' className='project-img' width="100%" />
                                </div>
                                <div className='project-details'>
                                    <div className='view-click'>
                                        <a href='https://eas.trade/' className='project-link'>Visit<TbView360 className='view-link' /></a>
                                    </div>
                                    <div className='project-text'>
                                        <p >HTML, CSS, JS, WORDPRESS</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className='project-col'>
                                <div className='project-img-col'>
                                    <img src='./images/projects/dental.png' className='project-img' width="100%" />
                                </div>
                                <div className='project-details'>
                                    <div className='view-click'>
                                        <a href='https://choctawdental.com/' className='project-link'>Visit<TbView360 className='view-link' /></a>
                                    </div>
                                    <div className='project-text'>
                                        <p >HTML, CSS, JS, Boostrap, PHP, API</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className='project-col'>
                                <div className='project-img-col'>
                                    <img src='./images/projects/painters.png' className='project-img' width="100%" />
                                </div>
                                <div className='project-details'>
                                    <div className='view-click'>
                                        <a href='https://truebluepainterssa.com.au/' className='project-link'>Visit<TbView360 className='view-link' /></a>
                                    </div>
                                    <div className='project-text'>
                                        <p >HTML, CSS, JS, WORDPRESS</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row project-row-2'>
                        <div className='col-md-4'>
                            <div className='project-col'>
                                <div className='project-img-col'>
                                    <img src='./images/projects/elreno.png' className='project-img' width="100%" />
                                </div>
                                <div className='project-details'>
                                    <div className='view-click'>
                                        <a href='https://elrenodental.com/' className='project-link'>Visit<TbView360 className='view-link' /></a>
                                    </div>
                                    <div className='project-text'>
                                        <p >HTML, CSS, JS, Boostrap, PHP, API</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className='project-col'>
                                <div className='project-img-col'>
                                    <img src='./images/projects/gutter.png' className='project-img' width="100%" />
                                </div>
                                <div className='project-details'>
                                    <div className='view-click'>
                                        <a href='https://overallperthguttercleaning.com.au/' className='project-link'>Visit<TbView360 className='view-link' /></a>
                                    </div>
                                    <div className='project-text'>
                                        <p >HTML, CSS, JS, WORDPRESS</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className='project-col'>
                                <div className='project-img-col'>
                                    <img src='./images/projects/success.png' className='project-img' width="100%" />
                                </div>
                                <div className='project-details'>
                                    <div className='view-click'>
                                        <a href='https://www.successsolutionsaustralia.com.au/' className='project-link'>Visit<TbView360 className='view-link' /></a>
                                    </div>
                                    <div className='project-text'>
                                        <p >HTML, CSS, JS, WORDPRESS</p>
                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>
                </div>


            </div>

            <div className='contact-sec'>
                <div className='container'>
                    <div className='row' id="contact">
                        <h2>Get in touch</h2>
                        <div className='icon-contact'>
                            <a href="mailto:namocotrenie@gmail.com"><FaEnvelope/></a>
                            <a href="https://www.linkedin.com/mwlite/in/renie-namocot-43700818b"><FaLinkedin/></a>
                            <a href="tel:0961 386 8728"><FaPhoneSquareAlt/></a>
                        </div>
                    </div>
                </div>                           
            </div>
        </>
    );
}

export default Home;