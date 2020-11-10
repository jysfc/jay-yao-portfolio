import React from "react";
import starIcon from "../icon/star.svg";
import linkIcon from "../icon/link.svg";
import video1 from "../image/validemailpwvid.webp";
import video2 from "../image/walkthruvid.webp";

function Project(props) {
   console.log(props);
   return (
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
                     Validation of email and password fields in White Bear,
                     following best security and UX practices. (3:10 min.)
                  </span>
               </p>
               <p className="text-decoration-none my-3">Nov. 4, 2020</p>
            </a>
            <a
               href="https://github.com/jysfc/jay-yao-portfolio"
               className="text-decoration-none d-inline-block"
            >
               <img src={linkIcon} width="16px" alt="link" className="mr-2" />
               https://github.com/jysfc/jay-yao-...
            </a>
         </div>
      </div>
   );
}

export default Project;
