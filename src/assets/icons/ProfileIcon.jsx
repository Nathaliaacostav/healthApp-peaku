import PropTypes from "prop-types";

export default function HomeIcon({ active }) {
  return (
    <svg
      width="22"
      height="27"
      viewBox="0 0 22 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 25C2 20.0601 6.02944 16.0556 11 16.0556C15.9706 16.0556 20 20.0601 20 25M16.1429 7.11111C16.1429 9.9339 13.8403 12.2222 11 12.2222C8.15968 12.2222 5.85714 9.9339 5.85714 7.11111C5.85714 4.28832 8.15968 2 11 2C13.8403 2 16.1429 4.28832 16.1429 7.11111Z"
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
