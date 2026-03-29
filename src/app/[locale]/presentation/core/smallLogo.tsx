/** biome-ignore-all lint/a11y/noSvgWithoutTitle: I don't care */
import type * as React from "react";

const SmallLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox='0 0 190 209'  fill="none" {...props}>
    <path
      fill="url(#a)"
      d="M95 100c3-15 16-43 43-40 28 4 33 30 32 42 0 33-12 47-25 60-13 14-40 37-52 47 18-18 51-57 50-74 3-16 1-48-25-47-7 2-21 8-23 12"
    />
    <circle cx={89.9} cy={22.9} r={22.9} fill="url(#b)" />
    <path
      fill="url(#c)"
      d="M49 101c-20 30 23 90 39 106-15-8-61-52-66-79-5-20 0-41 8-46 16-10 44-7 58-1 5-15 15-16 24-19-4 2-21 22-23 35-18-15-34-2-40 4"
    />
    <rect width={44.5} height={12.7} x={67.8} y={127.9} fill="#12a594" rx={6.4} />
    <rect width={12.7} height={44.5} x={84.3} y={111.3} fill="#12a594" rx={6.4} />
    <defs>
      <linearGradient id="a" x1={131.4} x2={131.4} y1={60.1} y2={208.6} gradientUnits="userSpaceOnUse">
        <stop stopColor="#12a594" />
        <stop offset={1} stopColor="#a1ded2" />
      </linearGradient>
      <linearGradient id="b" x1={89.9} x2={89.9} y1={0} y2={45.7} gradientUnits="userSpaceOnUse">
        <stop stopColor="#12a594" />
        <stop offset={1} stopColor="#a1ded2" />
      </linearGradient>
      <linearGradient id="c" x1={69.7} x2={69.7} y1={58.7} y2={188.4} gradientUnits="userSpaceOnUse">
        <stop stopColor="#0d74ce" />
        <stop offset={1} stopColor="#58b0f4" />
      </linearGradient>
    </defs>
  </svg>
);
export default SmallLogo;
