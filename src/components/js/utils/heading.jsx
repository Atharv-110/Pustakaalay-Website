import React from 'react'
import "../../css/utils/heading.css";
export default function Heading(props) {
  return (
    <div className="heading">
        <p className="heading-text">
            {props.text}
        </p>
        <h1 className="heading-main">
            {props.main}
        </h1>
    </div>
  )
}