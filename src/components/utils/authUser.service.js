/* eslint-disable */
const ID_USER_KEY = "user";

export const getUser = () => {
    return JSON.parse(window.localStorage.getItem(ID_USER_KEY));
};

export const saveUser = user => {
  window.localStorage.setItem(ID_USER_KEY, JSON.stringify(user));
};

export const removeUser = () => {
    window.localStorage.removeItem(ID_USER_KEY);
};

export default { getUser, saveUser, removeUser };