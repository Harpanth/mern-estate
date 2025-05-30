import React from 'react'
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { signInSuccess } from '../redux/user/userSlice'
import { useNavigate } from 'react-router-dom'
const OAuth = async () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider()
            const auth = getAuth(app)

            const result = await signInWithPopup(auth, provider);

            const res =await fetch ('/api/auth/google',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body: JSON.stringify({name:result.user.displayName,email:result.user.email, photo: result.user.photoURL}),
            })

            const data = res.json();
            dispatch(signInSuccess(data));
            navigate('/')
            
        } catch (error) {
            console.log('could not sign in with google',error)
        }
    }
    return (
        <button type='buttin' onClick={handleGoogleClick} className='bg-red-700 text-white p-3 wounded-lg uppercase hover:opacity-95'>continue with Googel</button>
    )
}

export default OAuth