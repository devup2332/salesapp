interface LogoIconProps extends React.SVGProps<SVGSVGElement> {}

const LogoIcon = (props: LogoIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      id="chart"
      {...props}
    >
      <path
        d="M14.6694,0.0004 C18.0704,0.0004 19.9904,1.9294 20.0004,5.3304 L20.0004,5.3304 L20.0004,14.6704 C20.0004,18.0704 18.0704,20.0004 14.6694,20.0004 L14.6694,20.0004 L5.3304,20.0004 C1.9294,20.0004 0.0004,18.0704 0.0004,14.6704 L0.0004,14.6704 L0.0004,5.3304 C0.0004,1.9294 1.9294,0.0004 5.3304,0.0004 L5.3304,0.0004 Z M10.5004,4.1304 C10.2194,3.9604 9.8794,3.9604 9.6104,4.1304 C9.3394,4.2994 9.1904,4.6104 9.2194,4.9204 L9.2194,4.9204 L9.2194,15.1104 C9.2704,15.5404 9.6294,15.8604 10.0494,15.8604 C10.4804,15.8604 10.8394,15.5404 10.8794,15.1104 L10.8794,15.1104 L10.8794,4.9204 C10.9194,4.6104 10.7704,4.2994 10.5004,4.1304 Z M5.8304,7.4104 C5.5604,7.2404 5.2194,7.2404 4.9504,7.4104 C4.6794,7.5804 4.5304,7.8894 4.5604,8.2004 L4.5604,8.2004 L4.5604,15.1104 C4.5994,15.5404 4.9594,15.8604 5.3894,15.8604 C5.8204,15.8604 6.1794,15.5404 6.2194,15.1104 L6.2194,15.1104 L6.2194,8.2004 C6.2504,7.8894 6.0994,7.5804 5.8304,7.4104 Z M15.0894,11.0404 C14.8204,10.8704 14.4804,10.8704 14.2004,11.0404 C13.9294,11.2104 13.7804,11.5094 13.8204,11.8304 L13.8204,11.8304 L13.8204,15.1104 C13.8604,15.5404 14.2194,15.8604 14.6504,15.8604 C15.0704,15.8604 15.4294,15.5404 15.4804,15.1104 L15.4804,15.1104 L15.4804,11.8304 C15.5094,11.5094 15.3604,11.2104 15.0894,11.0404 Z"
        transform="translate(2 2)"
      ></path>
    </svg>
  );
};

export default LogoIcon;
