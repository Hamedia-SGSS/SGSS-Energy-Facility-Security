import React from "react";

export type ShieldIconName =
  | "perimeter"
  | "unauthorized"
  | "equipment"
  | "demonstration"
  | "vandalism"
  | "vendor"
  | "gate"
  | "remote"
  | "patrol"
  | "emergency"
  | "utility"
  | "power"
  | "solar"
  | "storage"
  | "substation"
  | "maintenance"
  | "infrastructure"
  | "facility"
  | "check";

interface ShieldIconProps {
  name: ShieldIconName;
  size?: number;
  className?: string;
}

const SHIELD_PATH =
  "M20 2.5L35.5 7.5C36.2 7.7 36.7 8.4 36.7 9.1V20.5C36.7 30.2 29.6 37.8 20.5 41.3C20.2 41.4 19.8 41.4 19.5 41.3C10.4 37.8 3.3 30.2 3.3 20.5V9.1C3.3 8.4 3.8 7.7 4.5 7.5L20 2.5Z";

function renderInnerIcon(name: ShieldIconName) {
  switch (name) {
    case "perimeter":
      // Security barrier / fence posts
      return (
        <g stroke="#ffffff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <path d="M12 27V15l2-2 2 2v12" />
          <path d="M24 27V15l2-2 2 2v12" />
          <path d="M12 18.5h16" />
          <path d="M12 23h16" />
          <path d="M18.5 18.5l3 4.5" />
        </g>
      );
    case "unauthorized":
      // Person with alert/lock silhouette
      return (
        <g stroke="#ffffff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <circle cx="18.5" cy="15.5" r="3" />
          <path d="M12.5 26.5c0-3.2 2.7-5.5 6-5.5 1.4 0 2.7.4 3.7 1.1" />
          <path d="M23.5 22.5l4 4" />
          <path d="M27.5 22.5l-4 4" />
        </g>
      );
    case "equipment":
      // Electric plug / cable
      return (
        <g stroke="#ffffff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <path d="M17 13v3.5" />
          <path d="M23 13v3.5" />
          <path d="M14.5 16.5h11v3a5.5 5.5 0 0 1-11 0v-3Z" />
          <path d="M20 25v4" />
        </g>
      );
    case "demonstration":
      // Megaphone
      return (
        <g stroke="#ffffff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <path d="M12.5 19.5v3a1.5 1.5 0 0 0 1.5 1.5h2l6.5 3.5v-13L16 18h-2a1.5 1.5 0 0 0-1.5 1.5Z" />
          <path d="M16 24l1.2 4" />
          <path d="M25.5 18.5c1 .8 1.5 1.6 1.5 2.5s-.5 1.7-1.5 2.5" />
        </g>
      );
    case "vandalism":
      // Spray / warning brush
      return (
        <g stroke="#ffffff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <rect x="14" y="18" width="8" height="10" rx="1.5" />
          <path d="M16 18v-2.5h4V18" />
          <path d="M18 15.5v-1.5" />
          <path d="M23.5 14.5l3-1.5" />
          <path d="M24 17.5h3" />
          <path d="M23.5 20.5l3 1.5" />
        </g>
      );
    case "vendor":
      // Delivery truck
      return (
        <g stroke="#ffffff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <path d="M11.5 16h10.5v8.5H11.5V16Z" />
          <path d="M22 18.5h3.5l2.5 2.5v3.5H22v-6Z" />
          <circle cx="15" cy="26" r="1.7" />
          <circle cx="25" cy="26" r="1.7" />
        </g>
      );
    case "gate":
      // Security key / ID access
      return (
        <g stroke="#ffffff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <circle cx="16" cy="20.5" r="3.5" />
          <path d="M19.5 20.5H28" />
          <path d="M24.5 20.5v3" />
          <path d="M27.5 20.5v2" />
        </g>
      );
    case "remote":
      // Signal / radar tower
      return (
        <g stroke="#ffffff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <circle cx="20" cy="18.5" r="1.8" fill="#ffffff" stroke="none" />
          <path d="M16 15a5.5 5.5 0 0 0 0 7" />
          <path d="M24 15a5.5 5.5 0 0 1 0 7" />
          <path d="M13.5 12.5a9 9 0 0 0 0 12" />
          <path d="M26.5 12.5a9 9 0 0 1 0 12" />
          <path d="M20 20.5v7.5" />
          <path d="M16.5 28h7" />
        </g>
      );
    case "patrol":
      // Crescent moon & star (after-hours)
      return (
        <g stroke="#ffffff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <path d="M24.5 23.5A6.5 6.5 0 0 1 16.5 15.5a6.5 6.5 0 1 0 8 8Z" />
          <path d="M24 14v2.5" />
          <path d="M22.75 15.25h2.5" />
        </g>
      );
    case "emergency":
      // Emergency beacon / siren
      return (
        <g stroke="#ffffff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <path d="M15 24v-4.5a5 5 0 0 1 10 0V24" />
          <path d="M13 24h14v2.5H13V24Z" />
          <path d="M20 11.5v1.5" />
          <path d="M13.5 14l1.2 1.2" />
          <path d="M26.5 14l-1.2 1.2" />
        </g>
      );
    case "utility":
      // Lightning bolt
      return (
        <path
          d="M21 12.5l-6.5 9h5l-1 6.5 6.5-9h-5l1-6.5Z"
          fill="#ffffff"
          stroke="#ffffff"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      );
    case "power":
      // Power facility / industrial plant
      return (
        <g stroke="#ffffff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <path d="M12.5 27V18.5l5 3v-3l5 3V15h5v12h-15Z" />
          <path d="M25 12v3" />
          <path d="M15.5 24h1.5" />
          <path d="M19.5 24h1.5" />
        </g>
      );
    case "solar":
      // Sun / solar energy
      return (
        <g stroke="#ffffff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <circle cx="20" cy="20.5" r="3.5" />
          <path d="M20 13v2" />
          <path d="M20 26v2" />
          <path d="M12.5 20.5h2" />
          <path d="M25.5 20.5h2" />
          <path d="M14.7 15.2l1.4 1.4" />
          <path d="M23.9 24.4l1.4 1.4" />
          <path d="M25.3 15.2l-1.4 1.4" />
          <path d="M16.1 24.4l-1.4 1.4" />
        </g>
      );
    case "storage":
      // Energy storage battery
      return (
        <g stroke="#ffffff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <rect x="15" y="15" width="10" height="13" rx="1.5" />
          <path d="M18 15v-2h4v2" />
          <path d="M20.5 18.5l-2 3h3l-2 3" />
        </g>
      );
    case "substation":
      // Transformer / substation coils
      return (
        <g stroke="#ffffff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <rect x="13" y="16" width="14" height="11" rx="1.5" />
          <path d="M16 16v-2.5" />
          <path d="M20 16v-2.5" />
          <path d="M24 16v-2.5" />
          <path d="M17.5 21.5h5" />
          <path d="M20 19v5" />
        </g>
      );
    case "maintenance":
      // Wrench (matching the screenshot style)
      return (
        <path
          d="M24.2 14.3a4 4 0 0 0-5.1 4.9l-5.3 5.3a1.6 1.6 0 0 0 2.3 2.3l5.3-5.3a4 4 0 0 0 4.9-5.1l-2.3 2.3-2.1-.6-.6-2.1 2.9-1.7Z"
          fill="#ffffff"
          stroke="none"
        />
      );
    case "infrastructure":
      // Globe / network
      return (
        <g stroke="#ffffff" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <circle cx="20" cy="20.5" r="7" />
          <ellipse cx="20" cy="20.5" rx="3" ry="7" />
          <path d="M13 20.5h14" />
        </g>
      );
    case "facility":
      // Critical facility building
      return (
        <g stroke="#ffffff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <path d="M14 27.5V14.5h12v13" />
          <path d="M12 27.5h16" />
          <path d="M17.5 18h1" />
          <path d="M21.5 18h1" />
          <path d="M17.5 21.5h1" />
          <path d="M21.5 21.5h1" />
          <path d="M18.5 27.5v-3h3v3" />
        </g>
      );
    case "check":
    default:
      // Checkmark
      return (
        <path
          d="M14.5 21l3.5 3.5 7.5-7.5"
          stroke="#ffffff"
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      );
  }
}

export function ShieldIcon({ name, size = 40, className }: ShieldIconProps) {
  const height = Math.round(size * 1.1);
  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 40 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d={SHIELD_PATH}
        fill="#1d2c48"
        stroke="#fecf31"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      {renderInnerIcon(name)}
    </svg>
  );
}
