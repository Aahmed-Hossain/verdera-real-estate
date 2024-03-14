/* eslint-disable react/prop-types */
import React from "react";
const SubHeading2 = ({subHeading2}) => {
  return (
    <p  className="text-sm text-center my-6 hidden md:block lg:block">{subHeading2.split('<').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}</p>
  )
}



export default SubHeading2;