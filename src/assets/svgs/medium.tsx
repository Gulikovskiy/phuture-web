import React, { FunctionComponent } from "react";

type PropTypes = {
  className?: string;
};

const MediumLogo: FunctionComponent<PropTypes> = (props) => (
  <svg
    width="32"
    height="30"
    viewBox="0 0 32 25"
    fill="black"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M29.4467 2.93816L32 0.527632V0H23.1547L16.8507 15.4842L9.67867 0H0.404V0.527632L3.38667 4.07105C3.67733 4.33289 3.82933 4.71579 3.79067 5.10132V19.0263C3.88267 19.5276 3.71733 20.0434 3.36 20.4079L0 24.4263V24.9474H9.52667V24.4197L6.16667 20.4079C5.80267 20.0421 5.63067 19.5355 5.704 19.0263V6.98158L14.0667 24.9539H15.0387L22.2293 6.98158V21.2987C22.2293 21.6763 22.2293 21.7539 21.9787 22.0013L19.392 24.4711V25H31.9413V24.4724L29.448 22.0632C29.2293 21.9 29.116 21.6263 29.1627 21.3605V3.64079C29.116 3.37368 29.228 3.1 29.4467 2.93816Z"
      fill="black"
    />
  </svg>
);

export default MediumLogo;
