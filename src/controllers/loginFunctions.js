import axios from "axios";
import { getRequestOptions } from "./utils.js";
import { setLocalStorage } from "./localStorage.js";

function login(username, password){
    const authString = "Basic " + btoa(username + ":" + password);
    const requestOptions = getRequestOptions();
    const url = "https://proyecto-informatico-backend.onrender.com/user/login"; 

    return axios
      .post(url, {}, {
        headers: {
          "Content-Type": "application/json",
          Authorization: authString,
        },
      })
      .then((resp) => {
        if(resp.token){
          setLocalStorage("token", resp.data.token);
          setLocalStorage("username", resp.data.username);
          setLocalStorage("id", resp.data.id);

          window.location.href = "/Home";
        }
        if (resp.data.token) {

          setLocalStorage("token", resp.data.token);
          setLocalStorage("username", resp.data.username);
          setLocalStorage("id", resp.data.id);

          window.location.href = "/Home";

        } else {
          console.log("Inicio de sesión fallido");
        }
      })
      .then(() => {
        console.log(resp.data);
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error);
      });
}

export default login;