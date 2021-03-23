import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[1];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return(
      <Link to='/sign-up' className='btn-mobile'>
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick}>
           {children}
        </button>
      </Link>
    )
  }

  export default Button;
