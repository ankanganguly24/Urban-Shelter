import React from 'react'
import { GoogleAuthProvider,getAuth, signInWithPopup, } from "firebase/auth";
import app from "../firebase";
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

const OAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

   const GoogleAuth = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);

      console.log(result);

      const res = await fetch ('api/auth/google',{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({name: result.user.displayName, email: result.user.email, photo: result.user.photoURL})
      });

      const data = await res.json();
      dispatch(loginSuccess(data));
    
      if (res.ok) {
        navigate("/");
      } else {
        const responseData = await res.json();
        console.error("Login failed:", responseData);
      }
    }
    catch (error) {
      console.log("signin failed",error)
    }
  }
  return (
    <div className='m-2 flex flex-col items-center pr-1'>
    <button
          className="bg-brown text-white py-2 px-4 rounded-md font-semibold hover:bg-lightbrown hover:shadow-lg transition-transform transform hover:scale-105 "
          type="button"
          onClick={GoogleAuth}
        >
          Continue with Google
        </button>

        

</div>
  )
}

export default OAuth;