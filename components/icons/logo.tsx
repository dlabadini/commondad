export default function LogoIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label={`${process.env.SITE_NAME} logo`}
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* "C" */}
      <path d="M18 14C14.5 10.5 8 12 8 20s6.5 9.5 10 6" />
      {/* "D" */}
      <path d="M22 18v14" />
      <path d="M22 18c10 0 12 4 12 7s-2 7-12 7" />
    </svg>
  );
}
