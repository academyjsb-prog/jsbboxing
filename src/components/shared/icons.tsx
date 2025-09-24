import type { SVGProps } from 'react';

export function BoxingGloveIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 22a2 2 0 0 0 2-2v-2H8v2c0 1.1.9 2 2 2Z" />
      <path d="M16 18H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.57a3 3 0 0 1 2.39 1.08L14 10h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2" />
      <path d="M9.5 8.5v-1a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2v2" />
      <path d="M12.5 6.5v-1a1 1 0 0 1 1-1h1" />
      <path d="M16 10h1.5a1 1 0 0 1 1 1v1" />
    </svg>
  );
}
