/* eslint-disable */
const SECURITY_CODE = "security_code";

export const getSecureCode = () => {
  console.log('securCode', localStorage.getItem(SECURITY_CODE))
    return localStorage.getItem(SECURITY_CODE);
};

export const saveSecureCode = code => {
    localStorage.setItem(SECURITY_CODE, code);
};

export const destroySecureCode = () => {
    localStorage.removeItem(SECURITY_CODE);
};

export default { getSecureCode, saveSecureCode, destroySecureCode };
