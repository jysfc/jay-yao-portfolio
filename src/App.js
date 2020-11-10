import React from "react";
import "./style/master.scss";
import Project from "./components/Project";
import { projects } from "./data/projects";

console.log(projects);

function App() {
   return (
      <div className="container">
         <div className="row mt-2">
            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
               {/* <!--Title--> */}
               <h1 className="display-3 mb-1 text-center">Jay Yao</h1>
               {/* <!--Position--> */}
               <p className="lead font-weight-normal mb-4 text-center">
                  Full stack developer
               </p>
               {/* <!--Social Profile Icons--> */}
               <p className="lead font-weight-normal text-center mb-4 mb-sm-5">
                  <a
                     href="https://github.com/jysfc"
                     className="text-decoration-none d-inline-block"
                     type="button"
                  >
                     <img
                        src="/icon/github.svg"
                        width="24px"
                        alt="github logo"
                        className="ml-4 mt-n1"
                     />
                     <span className="ml-2">Github</span>
                  </a>
                  <a
                     href="https://linkedin.com/in/j-yao"
                     className="text-decoration-none d-inline-block"
                     type="button"
                  >
                     <img
                        src="/icon/linkedin.svg"
                        width="24 px"
                        alt="linkedin logo"
                        className="ml-4 mt-n1"
                     />
                     <span className="ml-2">LinkedIn</span>
                  </a>
                  <a
                     href="https://www.youtube.com/channel/UCfebDXylKdoFQnzOIqGgp5A"
                     className="text-decoration-none d-inline-block"
                     type="button"
                  >
                     <img
                        src="/icon/youtube.svg"
                        width="28px"
                        alt="youtube logo"
                        className="ml-4 mt-1"
                     />
                     <span className="ml-2">YouTube</span>
                  </a>
               </p>
               {/* <!--Input Bar & Adv Btn--> */}
               <div className="row mb-2">
                  <div className="col-12 col-sm-8">
                     <input
                        className="form-control"
                        id="search-projects"
                        placeholder="Search projects"
                     />
                  </div>
                  <div className="col-12 col-sm-4">
                     <div className="custom-control custom-checkbox custom-control-inline float-right mr-0 mt-2">
                        <input
                           type="checkbox"
                           className="custom-control-input"
                           id="advance-view"
                        />
                        <label
                           className="custom-control-label"
                           htmlFor="advanced-view"
                        >
                           Advanced view
                        </label>
                     </div>
                  </div>
               </div>
               {/* <!--Radio Buttons--> */}
               <div className="row mb-5">
                  <div className="col-12">
                     <div className="custom-control custom-radio custom-control-inline">
                        <input
                           type="radio"
                           id="most-recent"
                           name="order-projects"
                           className="custom-control-input"
                        />
                        <label
                           className="custom-control-label"
                           htmlFor="most-recent"
                        >
                           Most recent
                        </label>
                     </div>
                     <div className="custom-control custom-radio custom-control-inline">
                        <input
                           type="radio"
                           id="most-popular"
                           name="order-projects"
                           className="custom-control-input"
                        />
                        <label
                           className="custom-control-label"
                           htmlFor="most-popular"
                        >
                           Most popular
                        </label>
                     </div>
                  </div>
               </div>
               {/* <!-- Video 1 --> */}
               <div className="row mb-5">
                  <div className="col-12 mb-2">
                     <a
                        href="https://youtu.be/K-1caHSiObc"
                        className="text-dark text-reset"
                     >
                        <h3 className="font-weight-normal">
                           Validation of Email and Password on Account Creation
                        </h3>
                     </a>
                  </div>
                  <div className="col-12 col-md-4">
                     <a
                        href="https://youtu.be/K-1caHSiObc"
                        className="text-dark text-reset"
                     >
                        <img
                           src="/images/validemailpwvid.webp"
                           className="img-fluid"
                           width="510px"
                           alt="validemailpwvid"
                        />
                     </a>
                  </div>
                  <div className="col-12 col-md-8 mt-3 mt-md-n1">
                     <a
                        href="https://youtu.be/K-1caHSiObc"
                        className="text-decoration-none text-reset"
                     >
                        <p>
                           <img
                              src="/icon/star.svg"
                              width="16px"
                              alt="star"
                              className="mr-n1"
                           />
                           <img
                              src="/icon/star.svg"
                              width="16px"
                              alt="star"
                              className="mr-n1"
                           />
                           <img
                              src="/icon/star.svg"
                              width="16px"
                              alt="star"
                              className="mr-n1"
                           />
                           <img
                              src="/icon/star.svg"
                              width="16px"
                              alt="star"
                              className="mr-n1"
                           />
                           <span className="text-decoration-none ml-2">
                              Validation of email and password fields in White
                              Bear, following best security and UX practices.
                              (3:10 min.)
                           </span>
                        </p>
                        <p className="text-decoration-none my-3">
                           Nov. 4, 2020
                        </p>
                     </a>
                     <a
                        href="https://github.com/jysfc/jay-yao-portfolio"
                        className="text-decoration-none d-inline-block"
                     >
                        <img
                           src="/icon/link.svg"
                           width="16px"
                           alt="link"
                           className="mr-2"
                        />
                        https://github.com/jysfc/jay-yao-...
                     </a>
                  </div>
               </div>

               {/* <!--Video 2--> */}
               <div className="row mb-5">
                  <div className="col-12 mb-2">
                     <a
                        href="https://youtu.be/PTpVOe1NjpQ"
                        className="text-dark text-reset"
                     >
                        <h3 className="font-weight-normal">
                           Walkthrough of Suite Project Prototype
                        </h3>
                     </a>
                  </div>
                  <div className="col-12 col-md-4">
                     <a
                        href="https://youtu.be/PTpVOe1NjpQ"
                        className="text-dark text-reset"
                     >
                        <img
                           src="/images/walkthruvid.webp"
                           className="img-fluid"
                           width="510px"
                           alt="walkthroughvid"
                        />
                     </a>
                  </div>
                  <div className="col-12 col-md-8 mt-3 mt-md-n1">
                     <a
                        href="https://youtu.be/PTpVOe1NjpQ"
                        className="text-decoration-none text-reset"
                     >
                        <p>
                           <img
                              src="/icon/star.svg"
                              width="16px"
                              alt="star"
                              className="mr-n1"
                           />
                           <img
                              src="/icon/star.svg"
                              width="16px"
                              alt="star"
                              className="mr-n1"
                           />
                           <img
                              src="/icon/star.svg"
                              width="16px"
                              alt="star"
                              className="mr-n1"
                           />
                           <img
                              src="/icon/star.svg"
                              width="16px"
                              alt="star"
                              className="mr-n1"
                           />
                           <img
                              src="/icon/star.svg"
                              width="16px"
                              alt="star"
                              className="mr-n1"
                           />
                           <span className="text-decoration-none ml-2">
                              Prototype of Suite Project, an app that makes
                              finding accommodation easier. (4:56 min.)
                           </span>
                        </p>
                        <p className="text-decoration-none my-3">
                           Nov. 4, 2020
                        </p>
                     </a>
                     <a
                        href="https://github.com/jysfc/jay-yao-portfolio"
                        className="text-decoration-none d-inline-block"
                     >
                        <img
                           src="/icon/link.svg"
                           width="16px"
                           alt="link"
                           className="mr-2"
                        />
                        https://github.com/jysfc/jay-yao-...
                     </a>
                  </div>
               </div>
               {/* <!----> */}
            </div>
         </div>
      </div>
   );
}

export default App;
