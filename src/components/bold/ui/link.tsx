import { HTMLAttributes } from "react";

interface LinkProps extends Omit<HTMLAttributes<HTMLAnchorElement>, "className"> {
  href: string;
}

export const Link = (props: LinkProps) => {
  return <a target="_blank" className="underline" {...props} />
}