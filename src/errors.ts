import { MNullish, MValue, Nullish } from "./value";

export function onUndefined<T>(v: MValue<T>, orElse: T): T {
  return undefined === v ? orElse : v;
}

export const isNullish = (v: unknown): v is Nullish =>
  v === undefined || v === null || (typeof v === "number" && Number.isNaN(v));

export function onNullish<T>(orElse: T, v: T | Nullish): T;
export function onNullish<T>(orElse: T): (v: T | Nullish) => T;
export function onNullish<T>(
  ...args: [T] | [T, T | Nullish]
): T | ((v: T | Nullish) => T) {
  return args.length === 1
    ? (v: T | Nullish): T => (isNullish(v) ? args[0] : v)
    : isNullish(args[1])
    ? args[0]
    : args[1];
}

export const throwOnNullish =
  <T>(msg: string) =>
  (t: MValue<T>): T => {
    if (isNullish(t)) {
      throw new Error(msg);
    }

    return t;
  };

export function onEmpty<T>(empty: T, v: MValue<T>, orElse?: T): MValue<T> {
  return !isNullish(v) && v !== empty ? v : orElse;
}

export const isT = <T>(t: MNullish<T>): t is T => !isNullish(t);
export const isAllT = <T>(t: MNullish<T>): t is T => !isNullish(t) && t !== "";
