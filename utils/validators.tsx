export const isValidEmail = (value: string) => {
  if (typeof value === 'string') {
    return (
      value
        .trim()
        .match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/) !==
      null
    );
  }
  return false;
};

export const isValidNumber = (value: string) => {
  if (!/^[0-9]+$/.test(value)) {
    return true;
  }
  return false;
};
