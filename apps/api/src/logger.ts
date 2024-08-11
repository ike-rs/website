// @ts-ignore
import { styleText } from 'node:util';

export const info = (...args: any[]) => {
  console.log(styleText('cyan', 'info:'), ...args);
};

export const error = (...args: any[]) => {
  console.error(styleText('red', 'error:'), ...args);
};

export const warn = (...args: any[]) => {
  console.warn(styleText('yellow', 'warn:'), ...args);
};

export const debug = (...args: any[]) => {
  if (process.argv.includes("--debug")) {
    console.debug(styleText('magenta', 'debug:'), ...args);
  }
};
