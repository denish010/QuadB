import { DARK_JUNGLE_GREEN_100_1 } from "../../tw-config/colors";
import { FC, SVGComponents } from "../../types/common.types";

const AppModeIcon: FC<SVGComponents> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width ?? "24"}
      height={props.height ?? "24"}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M10 6C9.99965 7.40007 10.3667 8.77571 11.0646 9.98947C11.7624 11.2032 12.7666 12.2126 13.9767 12.9167C15.1868 13.6208 16.5605 13.995 17.9606 14.0019C19.3606 14.0088 20.738 13.6482 21.955 12.956C21.474 18.03 17.2 22 12 22C6.477 22 2 17.523 2 12C2 6.8 5.97 2.526 11.044 2.045C10.3574 3.24988 9.99754 4.61323 10 6ZM4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C13.4136 20.0005 14.8021 19.6265 16.0241 18.916C17.2462 18.2054 18.2582 17.1838 18.957 15.955C18.6403 15.985 18.3213 16 18 16C12.477 16 8 11.523 8 6C8 5.67933 8.015 5.36033 8.045 5.043C6.81623 5.74185 5.79458 6.75381 5.08404 7.97585C4.37351 9.1979 3.99947 10.5864 4 12ZM18.164 2.291L19 2.5V3.5L18.164 3.709C17.8124 3.79693 17.4913 3.97875 17.235 4.23503C16.9788 4.4913 16.7969 4.8124 16.709 5.164L16.5 6H15.5L15.291 5.164C15.2031 4.8124 15.0212 4.4913 14.765 4.23503C14.5087 3.97875 14.1876 3.79693 13.836 3.709L13 3.5V2.5L13.836 2.291C14.1874 2.20291 14.5083 2.02102 14.7644 1.76475C15.0205 1.50849 15.2021 1.18748 15.29 0.836L15.5 0H16.5L16.709 0.836C16.7969 1.1876 16.9788 1.5087 17.235 1.76497C17.4913 2.02125 17.8124 2.20307 18.164 2.291ZM23.164 7.291L24 7.5V8.5L23.164 8.709C22.8124 8.79693 22.4913 8.97875 22.235 9.23503C21.9788 9.4913 21.7969 9.8124 21.709 10.164L21.5 11H20.5L20.291 10.164C20.2031 9.8124 20.0212 9.4913 19.765 9.23503C19.5087 8.97875 19.1876 8.79693 18.836 8.709L18 8.5V7.5L18.836 7.291C19.1876 7.20307 19.5087 7.02125 19.765 6.76497C20.0212 6.5087 20.2031 6.1876 20.291 5.836L20.5 5H21.5L21.709 5.836C21.7969 6.1876 21.9788 6.5087 22.235 6.76497C22.4913 7.02125 22.8124 7.20307 23.164 7.291Z"
        fill={props?.fill ?? DARK_JUNGLE_GREEN_100_1}
      />
    </svg>
  );
};

export default AppModeIcon;
