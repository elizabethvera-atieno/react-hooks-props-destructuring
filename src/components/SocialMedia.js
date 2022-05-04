import React from "react";

// function SocialMedia({socialLinks}){
//     return (
//         <div>
//           <a href={socialLinks.github}>{socialLinks.github}</a>
//           <a href={socialLinks.linkedin}>{socialLinks.linkedin}</a>
//         </div>
//       );
// }
function SocialMedia({socialLinks :{ github, linkedin }}){
    console.log('hello')
    return (
        <div>
        <a href={github}>{github}</a>
        <a href={linkedin}>{linkedin}</a> 
        </div>
    );
}




export default SocialMedia