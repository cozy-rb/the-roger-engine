import React, { useState, useEffect } from "react";
import "./AuthButtonToolbar.css";
import {useAuth0} from "@auth0/auth0-react";
import { Button } from 'rsuite';
import "./AuthButtonToolbar.css";
import AuthUserDrawer from "../auth-user-drawer/AuthUserDrawer.js";

function SignInButton(){
  const {loginWithRedirect} = useAuth0();
  return (
    <Button className="sign-in-button" appearance="default" onClick={(e)=>{
      e.preventDefault();
      loginWithRedirect();
    }}>Sign In</Button>
  );
}

function ProfileButton(){
  const {user} = useAuth0();
  let [show, setShow] = useState(false);

  const showDrawer = () => { setShow(true) }
  const hideDrawer = () => { setShow(false) }

  return (
    <div className="profile-button">
      <img src={user.picture} alt="avatar" style=
        {{ cursor:"pointer", width: 32, height: 32, borderRadius: 16 }}
        onClick={showDrawer} />

        <AuthUserDrawer show={show} hideDrawer={hideDrawer} />
    </div>
  );
}

function AuthButtonToolbar(){
  let [shown, setShown] = useState(null)
  const { isAuthenticated, isLoading } = useAuth0();

  useEffect(()=>{
    if(isLoading){ setShown(null); }
    else{
      if(isAuthenticated){ setShown(<ProfileButton />); }
      else{ setShown(<SignInButton />); }
    }
  }, [isAuthenticated, isLoading]);

  return(<div className="auth-button-toolbar">{shown}</div>);
}

export default AuthButtonToolbar;
