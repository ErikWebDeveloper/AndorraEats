import React, { useEffect, useState } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

function GoogleAuth() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  // Iniciar sesión con Google
  const login = useGoogleLogin({
    onSuccess: (response) => setUser(response),
    onError: (error) => console.error("Error en login:", error),
  });

  // Obtener información del usuario con el access_token
  useEffect(() => {
    if (user) {
      axios
        .get("https://www.googleapis.com/oauth2/v1/userinfo", {
          headers: { Authorization: `Bearer ${user.access_token}` },
        })
        .then((res) => setProfile(res.data))
        .catch((err) => console.error(err));
    }
  }, [user]);

  // Cerrar sesión
  const logout = () => {
    googleLogout();
    setUser(null);
    setProfile(null);
  };

  return (
    <div>
      {profile ? (
        <div>
          <h2>Bienvenido, {profile.name}</h2>
          <img src={profile.picture} alt="Avatar" width="50" />
          <button onClick={logout}>Cerrar sesión</button>
        </div>
      ) : (
        <button onClick={login}>Iniciar sesión con Google</button>
      )}
    </div>
  );
}

export default GoogleAuth;


/**
 * 
import { GoogleOAuthProvider } from "@react-oauth/google";
 * 
 * 
 *         <GoogleOAuthProvider clientId=`${import.meta.env.VITE_GOOGLE_CLIENT_ID}`>
          <h1>Autenticación con Google</h1>
          <GoogleAuth />
        </GoogleOAuthProvider>
 */