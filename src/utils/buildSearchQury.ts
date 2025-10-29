import { TQuery } from "../types/global";

const buildSearchQuery = (arg: TQuery[]) => {
  const params = new URLSearchParams(
    arg.reduce((acc, curr) => {
      acc.append(curr.name, curr.value);
      return acc;
    }, new URLSearchParams())
  ).toString();
  return Object.fromEntries(new URLSearchParams(params));
};

export default buildSearchQuery;
