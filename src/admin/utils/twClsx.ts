import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const twClsx = (...classes: ClassValue[]): string => {
  return twMerge(clsx(classes));
};
