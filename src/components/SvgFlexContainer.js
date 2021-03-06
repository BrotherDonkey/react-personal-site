import React from 'react';


const SvgFlexContainer = (props) => {

  if (props.children.length) {
  const number = props.children.length;
  const numStr = String(number);
  var classInput = "svg-flex-cont-" + numStr;
}


  return (
    <div className={classInput || "svg-flex-cont"}>
      {props.children}
    </div>
);}

export default SvgFlexContainer;
