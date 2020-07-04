import React, { FunctionComponent } from "react";

type PropTypes = {
  className?: string;
};

const CreateIcon: FunctionComponent<PropTypes> = (props) => (
  <svg
    width="47"
    height="47"
    viewBox="0 0 47 47"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="23.5" cy="23.5" r="22.85" stroke="black" stroke-width="1.3" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M21 23.9C22.1046 23.9 23 24.7954 23 25.9V38.35C23 38.709 23.291 39 23.65 39C24.009 39 24.3 38.709 24.3 38.35V25.9C24.3 24.7954 25.1954 23.9 26.3 23.9H39.35C39.709 23.9 40 23.609 40 23.25C40 22.891 39.709 22.6 39.35 22.6H26.3C25.1954 22.6 24.3 21.7045 24.3 20.6V7.65C24.3 7.29101 24.009 7 23.65 7C23.291 7 23 7.29101 23 7.65V20.6C23 21.7045 22.1046 22.6 21 22.6H8.65C8.29101 22.6 8 22.891 8 23.25C8 23.609 8.29101 23.9 8.65 23.9H21Z"
      fill="black"
    />
  </svg>
);

export default CreateIcon;