import clsx from "clsx";
import Image from "next/image";
import Label from "../label";
import { ReactNode } from "react";

export function GridTileImage({
  isInteractive = true,
  active,
  label,
  actions,
  ...props
}: {
  isInteractive?: boolean;
  active?: boolean;
  label?: {
    title: string;
    amount: string;
    currencyCode: string;
    position?: "bottom" | "center";
  };
  actions?: ReactNode;
} & React.ComponentProps<typeof Image>) {
  return (
    <div
      className={clsx(
        // Use a noticeably off-black card surface in dark mode.
        "group/tile isolate relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-terracotta-600 dark:bg-neutral-900",
        {
          "border-2 border-terracotta-600": active,
          "border-neutral-200 dark:border-neutral-800": !active,
        },
      )}
    >
      {props.src ? (
        <Image
          className={clsx("relative z-0 h-full w-full object-contain", {
            "transition duration-300 ease-in-out group-hover/tile:scale-105":
              isInteractive,
          })}
          {...props}
        />
      ) : null}
      {label ? (
        <Label
          title={label.title}
          amount={label.amount}
          currencyCode={label.currencyCode}
          position={label.position}
        />
      ) : null}
      {actions ? (
        <div className="pointer-events-auto absolute right-2 top-2 z-30 flex items-center gap-0.5 rounded-md bg-black/60 p-1 opacity-0 transition-opacity group-hover/tile:opacity-100">
          {actions}
        </div>
      ) : null}
    </div>
  );
}
