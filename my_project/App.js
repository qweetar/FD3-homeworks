"use strict"

import React from "react";
import ReactDOM from "react-dom";
import MobileCompany from "./components/MobileCompany";

var clientsArr = require("./components/users.json").users;

var companyName = "Velcom";

ReactDOM.render(
    <React.Fragment>
    <header>
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
      <div className="container">
        <a href="#" className="navbar-brand">Navbar</a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
        aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle Navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
          <div className="collapse navbar-collapse" id="basicExampleNav">
            <ul className="navbar-nav mr-auto smooth-scroll">
              <li className="nav-item">
                <a href="#intro" className="nav-link waves-effect waves-light">Home</a>
              </li>
              <li className="nav-item">
                <a href="#best-features" className="nav-link waves-effect waves-light">Blog</a>
              </li>
              <li className="nav-item">
                <a href="#examples" className="nav-link waves-effect waves-light">Contact</a>
              </li>
              <li className="nav-item">
                <a href="#gallery" className="nav-link waves-effect waves-light">News</a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link waves-effect waves-light">Support</a>
              </li>
            </ul>
            <ul className="navbar-nav nav-flex-icons">
              <li className="nav-item">
                <a href="#" className="nav-link waves-effect waves-light">
                  <i className="fab fa-youtube-square"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link waves-effect waves-light">
                  <i className="fab fa-apple"></i>
                </a>
              </li><li className="nav-item">
                <a href="#" className="nav-link waves-effect waves-light">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
            </ul>
          </div>
      </div>
    </nav>

    <div id="intro" className="view" >
      <div className="mask rgba-black-strong">
        <div className="container-fluid d-flex align-items-center justify-content-center h-100">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-md-10">
              <h2 className="display-4 font-weight-bold white-text pt-5 mb-2">
                First Material Bootstrap
              </h2>
              <hr className="hr-light"/>
              <h4 className="white-text my-4">World's most popular framework for building
              responsive, mobile-first website and apps</h4>
              <button className="btn btn-outline-white waves-effect waves-light">Read More
              <i className="fa fa-book"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <main className="mt-5">
    <div className="container">
      <section id="best-features" className="text-center">
        <h2 className="mb-5 font-weight-bold">Best Features</h2>
        <div className="row d-flex justify-content-center mb-4">
          <div className="col-md-8">
            <p className="grey-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mb-5">
            <i className="fas fa-archive fa-4x grey-text"></i>
            <h4 className="my-4 font-weight-bold">Archive</h4>
            <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="col-md-4 mb-5">
            <i className="fab fa-amazon fa-4x grey-text"></i>
            <h4 className="my-4 font-weight-bold">Amazon</h4>
            <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="col-md-4 mb-5">
            <i className="fab fa-bitcoin fa-4x grey-text"></i>
            <h4 className="my-4 font-weight-bold">Bitcoin</h4>
            <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>  
      </section>

      <hr className="my-5"/>

      <section id="examples" className="text-center">
        <h2 className="mb-5 font-weight-bold">Examples</h2>

        <div className="row">
          <div className="col-lg-4 col-md-12 mb-4">
            <div className="view overlay zoom">
              <img src="img/chelovek.jpg" alt="" className="img-fluid"/>
              <div className="mask flex-center"></div>
            </div>

            <h4 className="my-4 font-weight-bold">Heading</h4>
            <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="view overlay">
              <img src="img/devushka.jpg" alt="" className="img-fluid"/>
              <div className="mask flex-center rgba-red-strong"></div>
            </div>

            <h4 className="my-4 font-weight-bold">Heading</h4>
            <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="view overlay hoverable">
              <img src="img/ostrov.jpg" alt="" className="img-fluid"/>
              <div className="mask flex-center"></div>
            </div>

            <h4 className="my-4 font-weight-bold">Heading</h4>
            <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="col-lg-4 col-md-12 mb-4">
            <div className="view overlay hoverable">
              <img src="img/ballintoy.jpg" alt="" className="img-fluid"/>
              <div className="mask flex-center"></div>
            </div>

            <h4 className="my-4 font-weight-bold">Heading</h4>
            <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="view overlay hoverable">
              <img src="img/otpusk.jpg" alt="" className="img-fluid"/>
              <div className="mask flex-center"></div>
            </div>

            <h4 className="my-4 font-weight-bold">Heading</h4>
            <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="view overlay hoverable">
              <img src="img/paren.jpg" alt="" className="img-fluid"/>
              <div className="mask flex-center"></div>
            </div>

            <h4 className="my-4 font-weight-bold">Heading</h4>
            <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </section>

      <hr className="my-5"/>

      <section id="gallery">
        <h2 className="mb-5 font-weight-bold text-center">Gallery</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div id="carousel-example-1z" className="carousel slide carousel-fade" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carousel-example-1z" data-slide-to="0" className="active"></li>
                <li data-target="#carousel-example-1z" data-slide-to="1" className=""></li>
                <li data-target="#carousel-example-1z" data-slide-to="2" className=""></li>
              </ol>

              <div className="carousel-inner z-depth-1-half" role="listbox">
                <div className="carousel-item active">
                  <img src="img/fort.jpg" alt="" className="d-block w-100"/>
                </div>
                <div className="carousel-item">
                  <img src="img/gory.jpg" alt="" className="d-block w-100"/>
                </div>
                <div className="carousel-item">
                  <img src="img/nebo.jpg" alt="" className="d-block w-100"/>
                </div>
              </div>

              <a href="#carousel-example-1z" className="carousel-control-prev" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              </a>
              <a href="#carousel-example-1z" className="carousel-control-next" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
              </a>
            </div>
          </div>

          <div className="col-md-6">
            <h4 className="mb-3">
              <strong>Title</strong>
            </h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>by <a> <strong>John Doe </strong></a>, 17/01/2020 </p>
            <a href="#" className="btn btn-primary btn-md waves-effect waves-light">Read more</a>
          </div>
        </div>
      </section>

      <hr className="my-5"/>

      <section id="contact">
        <h2 className="mb-5 font-weight-bold text-center">Contact us</h2>
        <div className="row">
          <div className="col-lg-5 col-md-12">
            <form className="p-5">
              <div className="md-form form-sm">
                <i className="fas fa-user prefix grey-text"></i>
                <input type="text" id="form3" className="form-control form-control-sm"/>
                <label htmlFor="form3">Your name</label>
              </div>
              <div className="md-form form-sm">
                <i className="fas fa-envelope prefix grey-text"></i>
                <input type="text" id="form2" className="form-control form-control-sm"/>
                <label htmlFor="form2">Your email</label>
              </div>
              <div className="md-form form-sm">
                <i className="fas fa-tag prefix grey-text"></i>
                <input type="text" id="form32" className="form-control form-control-sm"/>
                <label htmlFor="form32">Subject</label>
              </div>
              <div className="md-form form-sm">
                <i className="fas fa-pencil-alt prefix grey-text"></i>
                <textarea type="text" id="form8" className="md-textarea form-control form-control-sm" rows="3"></textarea>
                <label htmlFor="form8">Your message</label>
              </div>
              <div className="text-center mt-4">
                <button className="btn btn-primary waves-effect waves-light">
                  Send <i className="fas fa-paper-plane ml-1"></i> </button>
              </div>
            </form>
          </div>
          <div className="col-lg-7 col-md-12">
            <div className="row text-center">
              <div className="col-lg-4 col-md-12 mb-3">
                <p><i className="fas fa-map fa-1x mr-2 grey-text"> Rome</i></p>
              </div>
              <div className="col-lg-4 col-md-6 mb-3">
                <p><i className="fas fa-building fa-1x mr-2 grey-text"> Mon - Fri</i></p>
              </div>
              <div className="col-lg-4 col-md-6 mb-3">
                <p><i className="fas fa-phone fa-1x mr-2 grey-text"> +380 123 45 67</i></p>
              </div>
            </div>
            <div id="map-container-google-2" className="z-depth-1-half map-container" style={{height: 400 + "px"}}>
              <iframe src="https://maps.google.com/maps?q=rome&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0"
              style={{border : "0"}} allowFullScreen/>
              <iframe src="https://maps.google.com/maps?q=rome&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0"
              style={{border : "0"}} allowFullScreen/>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>

  <footer className="page-footer font-className unique-color-dark pt-0">
    <div className="primary-color">
      <div className="container">
        <div className="row py-4 d-flex align-items-center">
          <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
            <h6 className="mb-0 white-text">Get connected with us on social nerworks!</h6>
          </div>
          <div className="col-md-6 col-lg-7 text-center text-md-right">
            <a href="#" className="fb-ic ml-0">
              <i className="fab fa-facebook white-text mr-4"></i>
            </a>
            <a href="#" className="fb-ic ml-0">
              <i className="fab fa-twitter white-text mr-4"></i>
            </a>
            <a href="#" className="fb-ic ml-0">
              <i className="fab fa-google-plus-g white-text mr-4"></i>
            </a>
            <a href="#" className="fb-ic ml-0">
              <i className="fab fa-linkedin-in white-text mr-4"></i>
            </a>
            <a href="#" className="fb-ic ml-0">
              <i className="fab fa-instagram white-text mr-4"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="container mt-5 mb-4 text-center text-md-left">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
          <h6 className="text-uppercase font-weight-bold"><strong>Our Company</strong></h6>
          <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase font-weight-bold"><strong>Products</strong></h6>
          <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
          <p><a href="#">MDBootstrap</a></p>
          <p><a href="#">FontAwsome</a></p>
          <p><a href="#">Pexel</a></p>
        </div>

        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase font-weight-bold"><strong>Links</strong></h6>
          <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
          <p><a href="#">Account</a></p>
          <p><a href="#">Help</a></p>
          <p><a href="#">FAQ</a></p>
        </div>

        <div className="col-md-4 col-lg-3 col-xl-3">
          <h6 className="text-uppercase font-weight-bold"><strong>Contact</strong></h6>
          <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
          <p><i className="fas fa-home mr-3"></i>Rome</p>
          <p><i className="fas fa-envelope mr-3"></i>info@gmail.com</p>
          <p><i className="fas fa-phone mr-3"></i>+375 29 388 64 22</p>
        </div>
      </div>
    </div>

  </footer>
    {/* <MobileCompany 
        companyName={companyName}
        clients={clientsArr}
    /> */}
    </React.Fragment>,
    document.getElementById("container")
);