import { DARK_JUNGLE_GREEN_100_1 } from "../../tw-config/colors";
import { FC, SVGComponents } from "../../types/common.types";

const AddPlayListTabIcon: FC<SVGComponents> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
    >
      <g clipPath="url(#clip0_5_2249)">
        <path
          d="M11.1667 13.7667H2V12.1001H11.1667V2.93341H12.8333V12.1001H22V13.7667H12.8333V22.9334H11.1667V13.7667Z"
          fill={props?.fill ?? DARK_JUNGLE_GREEN_100_1}
        />
      </g>
      <defs>
        <clipPath id="clip0_5_2249">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 0.933411)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default AddPlayListTabIcon;
