import { JAPANESE_LAUREL_100_1 } from "../../tw-config/colors";
import { FC, SVGComponents } from "../../types/common.types";

const TodayTabIcon: FC<SVGComponents> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width ?? "24"}
      height={props.height ?? "25"}
      viewBox="0 0 24 25"
      fill="none"
    >
      <path
        d="M21 10.9334H3M16 2.93341V6.93341M8 2.93341V6.93341M7.8 22.9334H16.2C17.8802 22.9334 18.7202 22.9334 19.362 22.6064C19.9265 22.3188 20.3854 21.8599 20.673 21.2954C21 20.6536 21 19.8136 21 18.1334V9.73341C21 8.05325 21 7.21317 20.673 6.57144C20.3854 6.00695 19.9265 5.54801 19.362 5.26039C18.7202 4.93341 17.8802 4.93341 16.2 4.93341H7.8C6.11984 4.93341 5.27976 4.93341 4.63803 5.26039C4.07354 5.54801 3.6146 6.00695 3.32698 6.57144C3 7.21317 3 8.05325 3 9.73341V18.1334C3 19.8136 3 20.6536 3.32698 21.2954C3.6146 21.8599 4.07354 22.3188 4.63803 22.6064C5.27976 22.9334 6.11984 22.9334 7.8 22.9334Z"
        stroke={props?.fill ?? JAPANESE_LAUREL_100_1}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TodayTabIcon;
