import React from "react";
import "./style/master.scss";
import Project from "./components/Project";
import { projects } from "./data/projects";

console.log(projects);

function App() {
   return (
      <div class="container">
         <div class="row mt-2">
            <div class="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
               {/* <!--Title--> */}
               <h1 class="display-3 mb-1 text-center">Jay Yao</h1>
               {/* <!--Position--> */}
               <p class="lead font-weight-normal mb-4 text-center">
                  Full stack developer
               </p>
               {/* <!--Social Profile Icons--> */}
               <p class="lead font-weight-normal text-center mb-4 mb-sm-5">
                  <a
                     href="https://github.com/jysfc"
                     class="text-decoration-none d-inline-block"
                     type="button"
                  >
                     <img
                        src="/icon/github.svg"
                        width="24px"
                        alt="github"
                        class="ml-4 mt-n1"
                     />
                     <span class="ml-2">Github</span>
                  </a>
                  <a
                     href="https://linkedin.com/in/j-yao"
                     class="text-decoration-none d-inline-block"
                     type="button"
                  >
                     <img
                        src="/icon/linkedin.svg"
                        width="24 px"
                        alt="linkedin"
                        class="ml-4 mt-n1"
                     />
                     <span class="ml-2">LinkedIn</span>
                  </a>
                  <a
                     href="https://www.youtube.com/channel/UCfebDXylKdoFQnzOIqGgp5A"
                     class="text-decoration-none d-inline-block"
                     type="button"
                  >
                     <img
                        src="/icon/youtube.svg"
                        width="28px"
                        alt="youtube"
                        class="ml-4 mt-1"
                     />
                     <span class="ml-2">YouTube</span>
                  </a>
               </p>
               {/* <!--Input Bar & Adv Btn--> */}
               <div class="row mb-2">
                  <div class="col-12 col-sm-8">
                     <input
                        class="form-control"
                        id="search-projects"
                        placeholder="Search projects"
                     />
                  </div>
                  <div class="col-12 col-sm-4">
                     <div class="custom-control custom-checkbox custom-control-inline float-right mr-0 mt-2">
                        <input
                           type="checkbox"
                           class="custom-control-input"
                           id="advance-view"
                        />
                        <label class="custom-control-label" for="advanced-view">
                           Advanced view
                        </label>
                     </div>
                  </div>
               </div>
               {/* <!--Radio Buttons--> */}
               <div class="row mb-5">
                  <div class="col-12">
                     <div class="custom-control custom-radio custom-control-inline">
                        <input
                           type="radio"
                           id="most-recent"
                           name="order-projects"
                           class="custom-control-input"
                           checked="checked"
                        />
                        <label class="custom-control-label" for="most-recent">
                           Most recent
                        </label>
                     </div>
                     <div class="custom-control custom-radio custom-control-inline">
                        <input
                           type="radio"
                           id="most-popular"
                           name="order-projects"
                           class="custom-control-input"
                        />
                        <label class="custom-control-label" for="most-popular">
                           Most popular
                        </label>
                     </div>
                  </div>
               </div>
               {/* <!-- Video 1 --> */}
               <div class="row mb-5">
                  <div class="col-12 mb-2">
                     <a
                        href="https://youtu.be/K-1caHSiObc"
                        class="text-dark text-reset"
                     >
                        <h3 class="font-weight-normal">
                           Validation of Email and Password on Account Creation
                        </h3>
                     </a>
                  </div>
                  <div class="col-12 col-md-4">
                     <a
                        href="https://youtu.be/K-1caHSiObc"
                        class="text-dark text-reset"
                     >
                        <img
                           src="/images/validemailpwvid.webp"
                           class="img-fluid"
                           width="510px"
                           alt="validemailpwvid"
                        />
                     </a>
                  </div>
                  <div class="col-12 col-md-8 mt-3 mt-md-n1">
                     <a
                        href="https://youtu.be/K-1caHSiObc"
                        class="text-decoration-none text-reset"
                     >
                        <p>
                           <img
                              src="/icon/star.svg"
                              width="16px"
                              alt="star"
                              class="mr-n1"
                           />
                           <img
                              src="/icon/star.svg"
                              width="16px"
                              alt="star"
                              class="mr-n1"
                           />
                           <img
                              src="/icon/star.svg"
                              width="16px"
                              alt="star"
                              class="mr-n1"
                           />
                           <img
                              src="/icon/star.svg"
                              width="16px"
                              alt="star"
                              class="mr-n1"
                           />
                           <span class="text-decoration-none ml-2">
                              Validation of email and password fields in White
                              Bear, following best security and UX practices.
                              (3:10 min.)
                           </span>
                        </p>
                        <p class="text-decoration-none my-3">Nov. 4, 2020</p>
                     </a>
                     <a
                        href="https://github.com/jysfc/jay-yao-portfolio"
                        class="text-decoration-none d-inline-block"
                     >
                        <img
                           src="/icon/link.svg"
                           width="16px"
                           alt="link"
                           class="mr-2"
                        />
                        https://github.com/jysfc/jay-yao-...
                     </a>
                  </div>
               </div>

               {/* <!--Video 2--> */}
               <div class="row mb-5">
                  <div class="col-12 mb-2">
                     <a
                        href="https://youtu.be/PTpVOe1NjpQ"
                        class="text-dark text-reset"
                     >
                        <h3 class="font-weight-normal">
                           Walkthrough of Suite Project Prototype
                        </h3>
                     </a>
                  </div>
                  <div class="col-12 col-md-4">
                     <a
                        href="https://youtu.be/PTpVOe1NjpQ"
                        class="text-dark text-reset"
                     >
                        <img
                           src="/images/walkthruvid.webp"
                           class="img-fluid"
                           width="510px"
                           alt="walkthroughvid"
                        />
                     </a>
                  </div>
                  <div class="col-12 col-md-8 mt-3 mt-md-n1">
                     <a
                        href="https://youtu.be/PTpVOe1NjpQ"
                        class="text-decoration-none text-reset"
                     >
                        <p>
                           <img
                              src="/icon/star.svg"
                              width="16px"
                              alt="star"
                              class="mr-n1"
                           />
                           <img
                              src="/icon/star.svg"
                              width="16px"
                              alt="star"
                              class="mr-n1"
                           />
                           <img
                              src="/icon/star.svg"
                              width="16px"
                              alt="star"
                              class="mr-n1"
                           />
                           <img
                              src="/icon/star.svg"
                              width="16px"
                              alt="star"
                              class="mr-n1"
                           />
                           <img
                              src="/icon/star.svg"
                              width="16px"
                              alt="star"
                              class="mr-n1"
                           />
                           <span class="text-decoration-none ml-2">
                              Prototype of Suite Project, an app that makes
                              finding accommodation easier. (4:56 min.)
                           </span>
                        </p>
                        <p class="text-decoration-none my-3">Nov. 4, 2020</p>
                     </a>
                     <a
                        href="https://github.com/jysfc/jay-yao-portfolio"
                        class="text-decoration-none d-inline-block"
                     >
                        <img
                           src="/icon/link.svg"
                           width="16px"
                           alt="link"
                           class="mr-2"
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
