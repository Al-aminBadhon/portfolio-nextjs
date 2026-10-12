import classNames from "classnames";

export function cn(...inputs: Array<string | false | null | undefined | Record<string, boolean>>) {
  return classNames(...inputs);
}
