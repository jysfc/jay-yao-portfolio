import React from "react";
import "../style/master.scss";
import Project from "./Project";
import { projects } from "../data/projects";
import githubLogo from "../icon/github.svg";
import linkedInLogo from "../icon/linkedin.svg";
import youtubeLogo from "../icon/youtube.svg";

console.log(projects);

export default function Home() {
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
                        src={githubLogo}
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
                        src={linkedInLogo}
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
                        src={youtubeLogo}
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
               {/* <!-- components --> */}
               {projects.map((project) => {
                  return <Project project={project} key={project.id} />;
               })}

               {/* <!----> */}
            </div>
         </div>
      </div>
   );
}
