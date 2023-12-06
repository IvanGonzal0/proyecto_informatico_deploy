const getId = () => {
    return JSON.parse(localStorage.getItem("id"));
} 
const getToken = localStorage.getItem("token");

export const setLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export { getId, getToken };
