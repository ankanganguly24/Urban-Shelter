import React from 'react'
import { GoogleAuthProvider,getAuth, signInWithPopup, } from "firebase/auth";
import app from "../firebase";

const OAuth = () => {

   const GoogleAuth = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);

      console.log(result);
      
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

export default OAuth