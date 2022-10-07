import React from 'react'
import {signIn, getProviders} from "next-auth/react"
import spotify from '../assets/spotify.png'

const Login = ({providers}) => {
  return (<>
    <div className='text-center bg-black text-gray-100'>Login Only If You Have A Spotify Account That Is Linked To Google</div>
  <div className='flex flex-col items-center bg-black min-h-screen w-full justify-center'>
      <img className='w-52' src='https://links.papareact.com/9xl' alt=''/>

      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button className='bg-[#18D860] text-white p-5 rounded-full mt-4' onClick={() => signIn(provider.id, {callbackUrl:"/"})}>
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  </>
    
  )
}

export default Login

export async function getServerSideProps() {
  const providers = await getProviders()


  return {
    props: {
      providers,
    }
  }
}


