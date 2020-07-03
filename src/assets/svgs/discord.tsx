import React, { FunctionComponent } from "react";

type PropTypes = {
  className?: string;
};

const DiscordLogo: FunctionComponent<PropTypes> = (props) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clip-path="url(#clip0)">
      <path
        d="M4.475 26.495H22.2988L21.4475 23.7387L23.4838 25.4862L25.35 27.1587L28.75 30V3.09375C28.665 1.42125 27.225 0 25.44 0L4.48125 0.00375C2.6975 0.00375 1.25 1.4275 1.25 3.1V23.4C1.25 25.1637 2.695 26.495 4.475 26.495ZM17.66 7.10375L17.6187 7.11875L17.6338 7.10375H17.66ZM8.12125 8.69C10.4125 7.0225 12.5363 7.1025 12.5363 7.1025L12.7075 7.27125C9.90375 7.94 8.6325 9.1925 8.6325 9.1925C8.6325 9.1925 8.9725 9.02625 9.56625 8.7725C13.3425 7.2875 17.4663 7.395 21.2838 9.275C21.2838 9.275 20.01 8.10375 17.3787 7.35375L17.6112 7.125C17.975 7.12625 19.9 7.19375 21.96 8.7C21.96 8.7 24.265 12.6375 24.265 17.475C24.1888 17.3825 22.835 19.5575 19.3512 19.6325C19.3512 19.6325 18.7612 18.965 18.3413 18.3825C20.3787 17.7975 21.1413 16.6275 21.1413 16.6275C20.4725 17.0487 19.8625 17.2987 19.3675 17.5487C18.6063 17.8837 17.8438 18.0487 17.0825 18.2175C13.4775 18.8025 11.4537 17.8237 9.54125 17.0475L8.8875 16.715C8.8875 16.715 9.64875 17.885 11.605 18.47C11.0913 19.0562 10.5825 19.7225 10.5825 19.7225C7.1 19.64 5.83 17.465 5.83 17.465C5.83 12.62 8.12125 8.69 8.12125 8.69Z"
        fill="black"
      />
      <path
        d="M17.885 15.9639C18.7737 15.9639 19.4975 15.2139 19.4975 14.2889C19.4975 13.3701 18.7775 12.6201 17.885 12.6201V12.6239C17 12.6239 16.275 13.3714 16.2725 14.2964C16.2725 15.2139 16.9962 15.9639 17.885 15.9639Z"
        fill="black"
      />
      <path
        d="M12.1123 15.9639C13.001 15.9639 13.7247 15.2139 13.7247 14.2889C13.7247 13.3701 13.006 12.6201 12.1173 12.6201L12.1123 12.6239C11.2235 12.6239 10.4998 13.3714 10.4998 14.2964C10.4998 15.2139 11.2235 15.9639 12.1123 15.9639Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="30" height="30" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default DiscordLogo;
