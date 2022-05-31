export const cx = (classnames: (string | undefined | null | boolean)[]) => {
  return classnames
    .filter((cl) => (typeof cl === "string" ? cl : ""))
    .join(" ")
    .trim();
};
