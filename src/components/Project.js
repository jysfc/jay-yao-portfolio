import React from "react";
import starIcon from "../icon/star.svg";
import linkIcon from "../icon/link.svg";
import video1 from "../image/validemailpwvid.webp";
import video2 from "../image/walkthruvid.webp";

function Project(props) {
   console.log("The props we passed from the parent component: ", props);
   return (
      <div className="row mb-5">
         <div className="col-12 mb-2">
            <a
               href="https://youtu.be/K-1caHSiObc"
               className="text-dark text-reset"
            >
               <h3 className="font-weight-normal">{props.project.title}</h3>
            </a>
         </div>
         <div className="col-12 col-md-4">
            <a
               href="https://youtu.be/K-1caHSiObc"
               className="text-dark text-reset"
            >
               <img
                  src={video1}
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
                  <img src={starIcon} width="16px" alt="star" />
                  <img src={starIcon} width="16px" alt="star" />
                  <img src={starIcon} width="16px" alt="star" />
                  <img src={starIcon} width="16px" alt="star" />
                  <span className="text-decoration-none ml-2">
                     {props.project.desc} ({props.project.totalMinutes} min.)
                  </span>
               </p>
               <p className="text-decoration-none my-3">
                  {props.project.postedAt}
               </p>
            </a>
            <a
               href="https://github.com/jysfc/jay-yao-portfolio"
               className="text-decoration-none d-inline-block"
            >
               <img src={linkIcon} width="16px" alt="link" className="mr-2" />
               {props.project.githubUrl}
            </a>
         </div>
      </div>
   );
}

export default Project;
