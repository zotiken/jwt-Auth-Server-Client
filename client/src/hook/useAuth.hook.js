import React, { useState, useCallback, useEffect } from "react";

export const useAuth = () => {
  const [auth, setauth] = useState(null);
  const [error, seterror] = useState(false);


  if (auth) {
    const live = setTimeout(() => {
      console.log("remove");
      localStorage.removeItem("token");
      setauth(false);
    }, 10000);
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setauth(true);
    }
  }, []);

  const login = useCallback(async ({ email, password }) => {
    try {
      const response = await fetch("/app/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ email, password }),
      });
      const result = await response.json();
      if (result.token) {
        localStorage.setItem("token", JSON.stringify(result.token));
        console.log("Авторизация пройдена");
        setauth(true);
      } else if(result.error) {
        seterror(result.error.message)
      }
    } catch (error) {
      console.log("ERROR ", error);
    }
  }, []);

  return { auth, login, error };
};
