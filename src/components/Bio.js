import React from "react";
import githubLogo from "../icon/github.svg";
import linkedInLogo from "../icon/linkedin.svg";
import youtubeLogo from "../icon/youtube.svg";

export default function Bio() {
   return (
      <>
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
      </>
   );
}
