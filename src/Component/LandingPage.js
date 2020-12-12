import React from 'react';
import Navbar from './Navbar';
class LandingPage extends React.Component{
    render(){
        return(
<div className="parent">
            <Navbar/>
    <section id="home" class="slider_area">
        <div id="carouselThree" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselThree" data-slide-to="0" class="active"></li>
                <li data-target="#carouselThree" data-slide-to="1"></li>
                <li data-target="#carouselThree" data-slide-to="2"></li>
            </ol>

            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="slider-content">
                                    <h1 class="title">MyCollege</h1>
                                    <h1 class="title">.com</h1>
                                    <p class="text">A platform that connects Students and Colleges.</p>
                                    <ul class="slider-btn rounded-buttons">
                                        <li><a class="main-btn rounded-one" href="#">Login</a></li>
                                        <li><a class="main-btn rounded-two" href="#">Signup</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div> 
                    </div> 
                    <div class="slider-image-box d-none d-lg-flex align-items-end">
                        <div class="slider-image">
                            <img src="assets/images/slider/1.png" alt="Hero"></img>
                        </div> 
                    </div> 
                </div> 

                <div class="carousel-item">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="slider-content">
                                    <h1 class="title">Social Website</h1>
                                    <p class="text">We provide platform for Students and Colleges to share a virtual space.</p>
                                    <ul class="slider-btn rounded-buttons">
                                        <li><a class="main-btn rounded-one" href="#">Login</a></li>
                                        <li><a class="main-btn rounded-two" href="#">Signup</a></li>
                                    </ul>
                                </div> 
                            </div>
                        </div> 
                    </div> 
                    <div class="slider-image-box d-none d-lg-flex align-items-end">
                        <div class="slider-image">
                            <img src="assets/images/slider/2.png" alt="Hero"></img>
                        </div> 
                    </div> 
                </div> 

                <div class="carousel-item">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="slider-content">
                                    <h1 class="title">ERP Management</h1>
                                    <p class="text">ERP Management tools for colleges and Students</p>
                                    <ul class="slider-btn rounded-buttons">
                                        <li><a class="main-btn rounded-one" href="#">Login</a></li>
                                        <li><a class="main-btn rounded-two" href="#">Signup</a></li>
                                    </ul>
                                </div> 
                            </div>
                        </div> 
                    </div> 
                    <div class="slider-image-box d-none d-lg-flex align-items-end">
                        <div class="slider-image">
                            <img src="assets/images/slider/3.png" alt="Hero"></img>
                        </div> 
                    </div> 
                </div>
            </div>

            <a class="carousel-control-prev" href="#carouselThree" role="button" data-slide="prev">
                <i class="lni lni-arrow-left"></i>
            </a>
            <a class="carousel-control-next" href="#carouselThree" role="button" data-slide="next">
                <i class="lni lni-arrow-right"></i>
            </a>
        </div>
    </section>



    <div id="services" class="features-area">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6 col-md-10">
                    <div class="section-title text-center pb-10">
                        <h3 class="title">Our Services</h3>
                        <p class="text">Bridging Gap between Students and Colleges</p>
                    </div> 
                </div>
            </div> 
            <div class="row justify-content-center">
                
                <div class="col-lg-4 col-md-7 col-sm-9">
                    <div class="single-features mt-40">
                        <div class="features-title-icon d-flex justify-content-between">
                            <h4 class="features-title"><a href="#">Social Media</a></h4>
                            <div class="features-icon">
                                <i class="lni lni-layout"></i>
                                <img class="shape" src="assets/images/f-shape-1.svg" alt="Shape"></img>
                            </div>
                        </div>
                        <div class="features-content">
                            <p class="text">A Social Media website designed to connect Colleges and Students. Share your thoughts, moments, discover new people.</p>
                            <a class="features-btn" href="#">LEARN MORE</a>
                        </div>
                    </div> 
                </div>
                <div class="col-lg-4 col-md-7 col-sm-9">
                    <div class="single-features mt-40">
                        <div class="features-title-icon d-flex justify-content-between">
                            <h4 class="features-title"><a href="#">ERP Management</a></h4>
                            <div class="features-icon">
                                <i class="lni lni-bolt"></i>
                                <img class="shape" src="assets/images/f-shape-1.svg" alt="Shape"></img>
                            </div>
                        </div>
                        <div class="features-content">
                            <p class="text">We provide the ERP Management tools designed specially for the Students and the Colleges. Stay updated with your college any-where any-time. </p>
                            <a class="features-btn" href="#">LEARN MORE</a>
                        </div>
                    </div> 
                </div>
            </div> 
        </div> 
    </div>



    <div id="portfolio" class="portfolio-area portfolio-four pb-100">
        
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6 col-md-10 ">
                    <div class="section-title text-center pb-10">
                        <h3 class="title">Gallery</h3>
                        <p class="text">Share Moments and Discover New People</p>
                    </div> 
                </div>
            </div> 
            <div class="row justify-content-center">
               
                <div class="col-lg-9 col-md-9">
                    <div class="row no-gutters grid mt-50 mb-50 parentgrid">
                        <div class="col-lg-4 col-sm-6 br/anding-4 planning-4 ">
                            <div class="single-portfolio">
                                <div class="portfolio-image">
                                    <img src="assets/images/portfolio/1.png" alt=""></img>
                                    <div class="portfolio-overlay d-flex align-items-center justify-content-center">
                                        <div class="portfolio-content">
                                            <div class="portfolio-icon">
                                                <a class="image-popup" href="assets/images/portfolio/1.png"><i class="lni lni-zoom-in"></i></a>
                                                <img src="assets/images/portfolio/shape.svg" alt="shape" class="shape"></img>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div class="col-lg-4 col-sm-6 marketing-4 research-4 ">

                            <div class="single-portfolio">
                                <div class="portfolio-image">
                                    <img src="assets/images/portfolio/2.png" alt=""></img>
                                    <div class="portfolio-overlay d-flex align-items-center justify-content-center">
                                        <div class="portfolio-content">
                                            <div class="portfolio-icon">
                                                <a class="image-popup" href="assets/images/portfolio/2.png"><i class="lni lni-zoom-in"></i></a>
                                                <img src="assets/images/portfolio/shape.svg" alt="shape" class="shape"></img>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        
                        <div class="col-lg-4 col-sm-6 br/anding-4 marketing-4 ">
                            <div class="single-portfolio">
                                <div class="portfolio-image">
                                    <img src="assets/images/portfolio/3.png" alt=""></img>
                                    <div class="portfolio-overlay d-flex align-items-center justify-content-center">
                                        <div class="portfolio-content">
                                            <div class="portfolio-icon">
                                                <a class="image-popup" href="assets/images/portfolio/3.png"><i class="lni lni-zoom-in"></i></a>
                                                <img src="assets/images/portfolio/shape.svg" alt="shape" class="shape"></img>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        
                        <div class="col-lg-4 col-sm-6 planning-4 research-4 ">
                            <div class="single-portfolio">
                                <div class="portfolio-image">
                                    <img src="assets/images/portfolio/4.png" alt=""></img>
                                    <div class="portfolio-overlay d-flex align-items-center justify-content-center">
                                        <div class="portfolio-content">
                                            <div class="portfolio-icon">
                                                <a class="image-popup" href="assets/images/portfolio/4.png"><i class="lni lni-zoom-in"></i></a>
                                                <img src="assets/images/portfolio/shape.svg" alt="shape" class="shape"></img>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div class="col-lg-4 col-sm-6 marketing-4 ">
                            <div class="single-portfolio">
                                <div class="portfolio-image">
                                    <img src="assets/images/portfolio/5.png" alt=""></img>
                                    <div class="portfolio-overlay d-flex align-items-center justify-content-center">
                                        <div class="portfolio-content">
                                            <div class="portfolio-icon">
                                                <a class="image-popup" href="assets/images/portfolio/5.png"><i class="lni lni-zoom-in"></i></a>
                                                <img src="assets/images/portfolio/shape.svg" alt="shape" class="shape"></img>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div class="col-lg-4 col-sm-6 planning-4 ">
                            <div class="single-portfolio">
                                <div class="portfolio-image">
                                    <img src="assets/images/portfolio/6.png" alt=""></img>
                                    <div class="portfolio-overlay d-flex align-items-center justify-content-center">
                                        <div class="portfolio-content">
                                            <div class="portfolio-icon">
                                                <a class="image-popup" href="assets/images/portfolio/6.png"><i class="lni lni-zoom-in"></i></a>
                                                <img src="assets/images/portfolio/shape.svg" alt="shape" class="shape"></img>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div class="col-lg-4 col-sm-6 research-4 ">
                            <div class="single-portfolio">
                                <div class="portfolio-image">
                                    <img src="assets/images/portfolio/7.png" alt=""></img>
                                    <div class="portfolio-overlay d-flex align-items-center justify-content-center">
                                        <div class="portfolio-content">
                                            <div class="portfolio-icon">
                                                <a class="image-popup" href="assets/images/portfolio/7.png"><i class="lni lni-zoom-in"></i></a>
                                                <img src="assets/images/portfolio/shape.svg" alt="shape" class="shape"></img>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div class="col-lg-4 col-sm-6 br/anding-4 planning-4 ">
                            <div class="single-portfolio">
                                <div class="portfolio-image">
                                    <img src="assets/images/portfolio/8.png" alt=""></img>
                                    <div class="portfolio-overlay d-flex align-items-center justify-content-center">
                                        <div class="portfolio-content">
                                            <div class="portfolio-icon">
                                                <a class="image-popup" href="assets/images/portfolio/8.png"><i class="lni lni-zoom-in"></i></a>
                                                <img src="assets/images/portfolio/shape.svg" alt="shape" class="shape"></img>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div class="col-lg-4 col-sm-6 marketing-4 ">
                            <div class="single-portfolio">
                                <div class="portfolio-image">
                                    <img src="assets/images/portfolio/9.png" alt=""></img>
                                    <div class="portfolio-overlay d-flex align-items-center justify-content-center">
                                        <div class="portfolio-content">
                                            <div class="portfolio-icon">
                                                <a class="image-popup" href="assets/images/portfolio/9.png"><i class="lni lni-zoom-in"></i></a>
                                                <img src="assets/images/portfolio/shape.svg" alt="shape" class="shape"></img>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div> 
                </div>
            </div> 

        </div> 
    </div>



    <section id="pricing" class="pricing-area ">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6 col-md-10">
                    <div class="section-title text-center pb-25">
                        <h3 class="title">Register</h3>
                        <p class="text">Stop wasting time and Register now.</p>
                    </div> 
                </div>
            </div> 
            <div class="row justify-content-center">
               
                <div class="col-lg-4 col-md-7 col-sm-9 justify-content-center">
                    <div class="pricing-style mt-30">
                        <div class="pricing-icon text-center">
                            <img src="assets/images/pro.png" alt=""></img>
                        </div>
                        <div class="pricing-header text-center">
                            <h5 class="sub-title">Student</h5>
                            
                        </div>
                        <div class="pricing-list  text-center ">
                            <ul>
                                <li><i class="lni lni-check-mark-circle"></i > Register as a Student</li>
                                
                            </ul>
                        </div>
                        <div class="pricing-btn rounded-buttons text-center">
                            <a class="main-btn rounded-one" href="#">GET STARTED</a>
                        </div>
                    </div> 
                </div>
                
                <div class="col-lg-4 col-md-7 col-sm-9 justify-content-center">
                    <div class="pricing-style mt-30">
                        <div class="pricing-icon text-center">
                            <img src="assets/images/college.png" alt=""></img>
                        </div>
                        <div class="pricing-header text-center">
                            <h5 class="sub-title">College</h5>
                        </div>
                        <div class="pricing-list text-center justify-content-center">
                            <ul>
                                <li><i class="lni lni-check-mark-circle"/><i class="flex justify-content-center"/> Register as a College</li>
                                
                            </ul>
                        </div>
                        <div class="pricing-btn rounded-buttons text-center">
                            <a class="main-btn rounded-one" href="#">GET STARTED</a>
                        </div>
                    </div> 
                </div>
            </div> 
        </div> 
    </section>



    <section id="about" class="about-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-5">
                    <div class="faq-content mt-45">
                        <div class="about-title">
                            <h6 class="sub-title">A Little More About Us</h6>
                            <h4 class="title">Frequently Asked Questions <br/> About Our Site</h4>
                        </div> 
                        <div class="about-accordion">
                            <div class="accordion" id="accordionExample">
                                <div class="card">
                                    <div class="card-header" id="headingOne">
                                        <a href="#" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Frequently Asked Question One</a>
                                    </div>

                                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <p class="text">Morbi vehicula arcu et pellentesque tincidunt. Nunc ligula nulla, lobortis a elementum non, vulputate ut arcu. Aliquam erat volutpat. Nullam lacinia felis.</p>
                                        </div>
                                    </div> 
                                </div> 
                                <div class="card">
                                    <div class="card-header" id="headingTwo">
                                        <a href="#" class="collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Frequently Asked Question Two</a>
                                    </div>
                                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <p class="text">Morbi vehicula arcu et pellentesque tincidunt. Nunc ligula nulla, lobortis a elementum non, vulputate ut arcu. Aliquam erat volutpat. Nullam lacinia felis.</p>
                                        </div>
                                    </div>
                                </div> 
                                <div class="card">
                                    <div class="card-header" id="headingThree">
                                        <a href="#" class="collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Frequently Asked Question Three</a>
                                    </div>
                                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <p class="text">Morbi vehicula arcu et pellentesque tincidunt. Nunc ligula nulla, lobortis a elementum non, vulputate ut arcu. Aliquam erat volutpat. Nullam lacinia felis.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingFore">
                                        <a href="#" class="collapsed" data-toggle="collapse" data-target="#collapseFore" aria-expanded="false" aria-controls="collapseFore">Frequently Asked Question Four</a>
                                    </div>
                                    <div id="collapseFore" class="collapse" aria-labelledby="headingFore" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <p class="text">Morbi vehicula arcu et pellentesque tincidunt. Nunc ligula nulla, lobortis a elementum non, vulputate ut arcu. Aliquam erat volutpat. Nullam lacinia felis.</p>
                                        </div>
                                    </div>
                                </div> 
                                <div class="card">
                                    <div class="card-header" id="headingFive">
                                        <a href="#" class="collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">Frequently Asked Question Five</a>
                                    </div>
                                    <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <p class="text">Morbi vehicula arcu et pellentesque tincidunt. Nunc ligula nulla, lobortis a elementum non, vulputate ut arcu. Aliquam erat volutpat. Nullam lacinia felis.</p>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div> 
                    </div> 
                </div>
                <div class="col-lg-7">
                    <div class="about-image mt-50">
                        <img src="assets/images/about.jpg" alt="about"></img>
                    </div> 
                </div>
            </div>
        </div>
    </section>



    <section id="team" class="team-area pt-120 pb-130">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6 col-md-10">
                    <div class="section-title text-center pb-30">
                        <h3 class="title">Meet The Team</h3>
                        <p class="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
                    </div> 
                </div>
            </div> 
            <div class="row">
                <div class="col-lg-4 col-sm-6">
                    <div class="team-style-eleven text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
                        <div class="team-image">
                            <img src="assets/images/team-1.jpg" alt="Team"></img>
                        </div>
                        <div class="team-content">
                            <div class="team-social">
                                <ul class="social">
                                    <li><a href="#"><i class="lni lni-facebook-filled"></i></a></li>
                                    <li><a href="#"><i class="lni lni-twitter-original"></i></a></li>
                                    <li><a href="#"><i class="lni lni-linkedin-original"></i></a></li>
                                    <li><a href="#"><i class="lni lni-instagram"></i></a></li>
                                </ul>
                            </div>
                            <h4 class="team-name"><a href="#">Jeffery Riley</a></h4>
                            <span class="sub-title">Art Director</span>
                        </div>
                    </div> 
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="team-style-eleven text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
                        <div class="team-image">
                            <img src="assets/images/team-2.jpg" alt="Team"></img>
                        </div>
                        <div class="team-content">
                            <div class="team-social">
                                <ul class="social">
                                    <li><a href="#"><i class="lni lni-facebook-filled"></i></a></li>
                                    <li><a href="#"><i class="lni lni-twitter-original"></i></a></li>
                                    <li><a href="#"><i class="lni lni-linkedin-original"></i></a></li>
                                    <li><a href="#"><i class="lni lni-instagram"></i></a></li>
                                </ul>
                            </div>
                            <h4 class="team-name"><a href="#">Riley Beata</a></h4>
                            <span class="sub-title">Web Developer</span>
                        </div>
                    </div> 
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="team-style-eleven text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
                        <div class="team-image">
                            <img src="assets/images/team-3.jpg" alt="Team"></img>
                        </div>
                        <div class="team-content">
                            <div class="team-social">
                                <ul class="social">
                                    <li><a href="#"><i class="lni lni-facebook-filled"></i></a></li>
                                    <li><a href="#"><i class="lni lni-twitter-original"></i></a></li>
                                    <li><a href="#"><i class="lni lni-linkedin-original"></i></a></li>
                                    <li><a href="#"><i class="lni lni-instagram"></i></a></li>
                                </ul>
                            </div>
                            <h4 class="team-name"><a href="#">Mark A. Parker</a></h4>
                            <span class="sub-title">UX Designer</span>
                        </div>
                    </div> 
                </div>
            </div> 
        </div> 
    </section>




    <section class="footer-area footer-dark">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="footer-logo text-center">
                        <a class="mt-30" href="index.html"><img src="assets/images/logo.svg" alt="Logo"></img></a>
                    </div> 
                    <ul class="social text-center mt-60">
                        <li><a href="https://facebook.com/uideckHQ"><i class="lni lni-facebook-filled"></i></a></li>
                        <li><a href="https://twitter.com/uideckHQ"><i class="lni lni-twitter-original"></i></a></li>
                        <li><a href="https://instagram.com/uideckHQ"><i class="lni lni-instagram-original"></i></a></li>
                        <li><a href="#"><i class="lni lni-linkedin-original"></i></a></li>
                    </ul> 
                    <div class="footer-support text-center">
                        <span class="number">+8801234567890</span>
                        <span class="mail">support@uideck.com</span>
                    </div>
                    <div class="copyright text-center mt-35">
                        <p class="text">Designed by <a href="https://uideck.com" rel="nofollow">UIdeck</a> and Built-with <a rel="nofollow" href="https://ayroui.com">Ayro UI</a> </p>
                    </div> 
                </div>
            </div> 
        </div> 
    </section>

</div>



        )
    }
}

export default LandingPage;