import React from "react";
import "../style/master.scss";
import Project from "./Project";
import { projects } from "../data/projects";
import Bio from "./Bio";

console.log(projects);

export default class Home extends React.Component {
   constructor() {
      super();
      this.state = {
         isAdvanced: false,
      };
   }

   setIsAdvanced() {
      this.setState({ isAdvanced: !this.state.isAdvanced });
   }

   render() {
      return (
         <div className="container">
            <div className="row mt-2">
               <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                  {/* Title, Position, Social*/}
                  <Bio />
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
                              id="advanced-view"
                              checked={this.state.isAdvanced}
                              onChange={() => {
                                 this.setIsAdvanced();
                              }}
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
                     return (
                        <Project
                           project={project}
                           key={project.id}
                           isAdvanced={this.state.isAdvanced}
                        />
                     );
                  })}

                  {/* <!----> */}
               </div>
            </div>
         </div>
      );
   }
}
