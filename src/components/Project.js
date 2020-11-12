import React from "react";
import starIcon from "../icon/star.svg";
import linkIcon from "../icon/link.svg";
import { truncate } from "../utils/helpers";
import format from "date-fns/format";

export default function Project(props) {
   const rating = props.project.rating;
   function displayStars() {
      let stars = [];
      for (let i = 0; i < rating; i++) {
         stars = stars.concat(
            <img src={starIcon} width="16px" alt="star" key={i} />
         );
      }
      return stars;
   }
   return (
      <div className="row mb-5">
         <div className="col-12 mb-2">
            <a href={props.project.youtubeUrl} className="text-dark text-reset">
               <h3 className="font-weight-normal">{props.project.title}</h3>
            </a>
         </div>
         <div className="col-12 col-md-4">
            <a href={props.project.youtubeUrl} className="text-dark text-reset">
               <img
                  src={require("../image/" + props.project.image).default}
                  className="img-fluid"
                  width="510px"
                  alt={props.project.title}
               />
            </a>
         </div>
         <div className="col-12 col-md-8 mt-3 mt-md-n1">
            <a
               href={props.project.youtubeUrl}
               className="text-decoration-none text-reset"
            >
               <p>
                  {displayStars()}
                  <span className="text-decoration-none ml-2">
                     {props.project.desc} ({props.project.totalMinutes} min.)
                  </span>
               </p>
               <p className="text-decoration-none my-3">
                  {format(props.project.postedAt, "MMM. d, yyyy")}
               </p>
            </a>
            <a href={props.project.githubUrl}>
               <img src={linkIcon} width="16px" alt="link" className="mr-2" />
               {truncate(props.project.githubUrl, 33)}
            </a>
         </div>
      </div>
   );
}
