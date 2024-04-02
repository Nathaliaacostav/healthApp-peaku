import PropTypes from "prop-types";

export default function HomeIcon({ active }) {
  return (
    <svg
      width="32"
      height="25"
      viewBox="0 0 32 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 13.4504H7.50088C7.79894 13.4504 8.06358 13.2594 8.15784 12.9762L11.75 2.18505C11.8325 1.93716 12.1836 1.93948 12.2728 2.18505L19.75 22.7756L19.77 22.8306C19.8506 23.0527 20.1624 23.0575 20.25 22.8382L23.7682 14.0308C23.9082 13.6803 24.2472 13.4504 24.6244 13.4504H30"
        stroke={active ? "#8176B6" : "#A5A5A5"}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
HomeIcon.propTypes = {
  active: PropTypes.bool,
};
