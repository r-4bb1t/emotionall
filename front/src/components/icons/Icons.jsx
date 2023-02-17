// color: "positive" | "negative" | "ambiguous" | "neutral" | "disactive"

import cc from "classcat";

export const HomeIcon = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M4 21V9L12 3L20 9V21H14V14H10V21H4Z"
      className={cc([
        color === "positive" && "fill-positive",
        color === "negative" && "fill-negative",
        color === "ambiguous" && "fill-ambiguous",
        color === "neutral" && "fill-neutral",
        color === "disactive" && "fill-black-200",
      ])}
    />
  </svg>
);

export const ListIcon = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M6 13H15V11H6V13ZM6 10H15V8H6V10ZM4 20C3.45 20 2.97933 19.8043 2.588 19.413C2.196 19.021 2 18.55 2 18V6C2 5.45 2.196 4.97933 2.588 4.588C2.97933 4.196 3.45 4 4 4H20C20.55 4 21.021 4.196 21.413 4.588C21.8043 4.97933 22 5.45 22 6V18C22 18.55 21.8043 19.021 21.413 19.413C21.021 19.8043 20.55 20 20 20H4Z"
      className={cc([
        color === "positive" && "fill-positive",
        color === "negative" && "fill-negative",
        color === "ambiguous" && "fill-ambiguous",
        color === "neutral" && "fill-neutral",
        color === "disactive" && "fill-black-200",
      ])}
    />
  </svg>
);

export const ContentsIcon = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M3.7249 11C3.34157 11 3.05423 10.8373 2.8629 10.512C2.6709 10.1873 2.66657 9.85833 2.8499 9.525L6.1499 3.575C6.2499 3.39167 6.3749 3.25833 6.5249 3.175C6.6749 3.09167 6.84157 3.05 7.0249 3.05C7.20823 3.05 7.3749 3.09167 7.5249 3.175C7.6749 3.25833 7.7999 3.39167 7.8999 3.575L11.1999 9.525C11.3832 9.85833 11.3792 10.1873 11.1879 10.512C10.9959 10.8373 10.7082 11 10.3249 11H3.7249ZM7.0249 21C5.9249 21 4.98323 20.6083 4.1999 19.825C3.41657 19.0417 3.0249 18.1 3.0249 17C3.0249 15.8833 3.41657 14.9373 4.1999 14.162C4.98323 13.3873 5.9249 13 7.0249 13C8.1249 13 9.06657 13.3917 9.8499 14.175C10.6332 14.9583 11.0249 15.9 11.0249 17C11.0249 18.1 10.6332 19.0417 9.8499 19.825C9.06657 20.6083 8.1249 21 7.0249 21ZM14.0249 21C13.7416 21 13.5039 20.904 13.3119 20.712C13.1206 20.5207 13.0249 20.2833 13.0249 20V14C13.0249 13.7167 13.1206 13.479 13.3119 13.287C13.5039 13.0957 13.7416 13 14.0249 13H20.0249C20.3082 13 20.5459 13.0957 20.7379 13.287C20.9292 13.479 21.0249 13.7167 21.0249 14V20C21.0249 20.2833 20.9292 20.5207 20.7379 20.712C20.5459 20.904 20.3082 21 20.0249 21H14.0249ZM17.0249 10.625C16.8916 10.625 16.7582 10.604 16.6249 10.562C16.4916 10.5207 16.3749 10.4583 16.2749 10.375C15.3582 9.60833 14.6206 8.975 14.0619 8.475C13.5039 7.975 13.0749 7.54167 12.7749 7.175C12.4749 6.80833 12.2749 6.475 12.1749 6.175C12.0749 5.875 12.0249 5.54167 12.0249 5.175C12.0249 4.425 12.2872 3.79167 12.8119 3.275C13.3372 2.75833 13.9916 2.5 14.7749 2.5C15.2249 2.5 15.6459 2.604 16.0379 2.812C16.4292 3.02067 16.7582 3.30833 17.0249 3.675C17.2916 3.30833 17.6209 3.02067 18.0129 2.812C18.4042 2.604 18.8249 2.5 19.2749 2.5C20.0582 2.5 20.7126 2.75833 21.2379 3.275C21.7626 3.79167 22.0249 4.425 22.0249 5.175C22.0249 5.525 21.9792 5.85 21.8879 6.15C21.7959 6.45 21.5999 6.78333 21.2999 7.15C20.9999 7.51667 20.5709 7.954 20.0129 8.462C19.4542 8.97067 18.7166 9.60833 17.7999 10.375C17.6999 10.4583 17.5792 10.5207 17.4379 10.562C17.2959 10.604 17.1582 10.625 17.0249 10.625Z"
      className={cc([
        color === "positive" && "fill-positive",
        color === "negative" && "fill-negative",
        color === "ambiguous" && "fill-ambiguous",
        color === "neutral" && "fill-neutral",
        color === "disactive" && "fill-black-200",
      ])}
    />
  </svg>
);

export const SettingIcon = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <g clip-path="url(#clip0_51_48)">
      <path
        d="M11.0779 1.82514e-06C11.3719 1.82514e-06 11.6349 0.183002 11.7339 0.457002L12.4399 2.414C12.6929 2.477 12.9099 2.54 13.0939 2.606C13.2949 2.678 13.5539 2.787 13.8739 2.936L15.5179 2.066C15.6521 1.99491 15.8057 1.96925 15.9557 1.99287C16.1057 2.01649 16.244 2.08811 16.3499 2.197L17.7959 3.692C17.9879 3.891 18.0419 4.182 17.9339 4.436L17.1629 6.243C17.2909 6.478 17.3929 6.679 17.4709 6.847C17.5549 7.03 17.6589 7.282 17.7829 7.607L19.5799 8.377C19.8499 8.492 20.0169 8.762 19.9989 9.051L19.8669 11.126C19.8579 11.2608 19.8095 11.39 19.7277 11.4975C19.6459 11.6051 19.5344 11.6863 19.4069 11.731L17.7049 12.336C17.6559 12.571 17.6049 12.772 17.5509 12.942C17.4638 13.2045 17.3643 13.4628 17.2529 13.716L18.1079 15.606C18.1682 15.7388 18.1845 15.8874 18.1542 16.0301C18.124 16.1728 18.0489 16.3021 17.9399 16.399L16.3139 17.851C16.2068 17.9462 16.0732 18.0064 15.9309 18.0236C15.7886 18.0408 15.6445 18.014 15.5179 17.947L13.8419 17.059C13.5797 17.1978 13.3092 17.3204 13.0319 17.426L12.2999 17.7L11.6499 19.5C11.6017 19.6318 11.5148 19.746 11.4006 19.8276C11.2864 19.9091 11.1502 19.9542 11.0099 19.957L9.10988 20C8.96584 20.0038 8.82417 19.9628 8.70437 19.8828C8.58456 19.8027 8.49251 19.6875 8.44088 19.553L7.67488 17.526C7.41353 17.4367 7.15476 17.34 6.89888 17.236C6.68959 17.1454 6.48347 17.0477 6.28088 16.943L4.38088 17.755C4.25569 17.8084 4.11767 17.8243 3.98362 17.8007C3.84958 17.7771 3.72528 17.715 3.62588 17.622L2.21988 16.303C2.1152 16.2052 2.04391 16.077 2.0161 15.9365C1.98828 15.796 2.00535 15.6503 2.06488 15.52L2.88188 13.74C2.77322 13.5292 2.67249 13.3144 2.57988 13.096C2.47178 12.8287 2.37174 12.5583 2.27988 12.285L0.489879 11.74C0.34438 11.696 0.217474 11.6052 0.128869 11.4817C0.0402643 11.3582 -0.00507958 11.2089 -0.000120812 11.057L0.0698792 9.136C0.0748618 9.01066 0.114016 8.88907 0.183107 8.78438C0.252198 8.67968 0.348597 8.59587 0.461879 8.542L2.33988 7.64C2.42688 7.321 2.50288 7.073 2.56988 6.892C2.66422 6.65025 2.76899 6.41269 2.88388 6.18L2.06988 4.46C2.0081 4.32938 1.98935 4.18254 2.0163 4.04059C2.04325 3.89864 2.11453 3.76889 2.21988 3.67L3.62388 2.344C3.7223 2.25117 3.84545 2.18876 3.97851 2.16428C4.11156 2.1398 4.24886 2.15429 4.37388 2.206L6.27188 2.99C6.48188 2.85 6.67188 2.737 6.84388 2.646C7.04888 2.537 7.32288 2.423 7.66788 2.3L8.32788 0.459002C8.37667 0.32427 8.46586 0.207883 8.58327 0.125733C8.70068 0.0435827 8.84058 -0.000326251 8.98388 1.82514e-06H11.0779ZM10.0239 7.019C8.35688 7.019 7.00588 8.354 7.00588 10.002C7.00588 11.65 8.35688 12.986 10.0239 12.986C11.6899 12.986 13.0409 11.65 13.0409 10.002C13.0409 8.354 11.6909 7.019 10.0239 7.019Z"
        className={cc([
          color === "positive" && "fill-positive",
          color === "negative" && "fill-negative",
          color === "ambiguous" && "fill-ambiguous",
          color === "neutral" && "fill-neutral",
          color === "disactive" && "fill-black-200",
        ])}
      />
    </g>
    <defs>
      <clipPath id="clip0_51_48">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
