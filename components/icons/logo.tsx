import clsx from "clsx";

export default function LogoIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label={`${process.env.SITE_NAME} logo`}
      viewBox="0 0 40 40"
      {...props}
      className={clsx("fill-black dark:fill-white", props.className)}
    >
      <text
        x="4"
        y="24"
        fontSize="26"
        fontWeight="bold"
        fontFamily="system-ui, sans-serif"
      >
        C
      </text>
      <text
        x="14"
        y="34"
        fontSize="26"
        fontWeight="bold"
        fontFamily="system-ui, sans-serif"
      >
        D
      </text>
    </svg>
  );
}
