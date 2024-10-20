  import { isEmpty, isNull } from "lodash";

export function isString(x) {
  return Object.prototype.toString.call(x) === "[object String]";
}

export function isValidEmailAddress(value) {
  return (
    value &&
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
      value,
    )
  );
}


export const isPhoneValid = (value) => {
  return value && value.length === 8;
};

export const isCountryValid = (value) => {
  return value && value.length >= 4;
};

export const isNotEmpty = (value) => {
  return value && value.length > 0;
};