import { DARK_JUNGLE_GREEN_100_1 } from "../../tw-config/colors";
import { FC, SVGComponents } from "../../types/common.types";

const SearchIcon: FC<SVGComponents> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width ?? "24"}
      height={props?.height ?? "24"}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
        stroke={props?.fill ?? DARK_JUNGLE_GREEN_100_1}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SearchIcon;
