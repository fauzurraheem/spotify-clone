import { getSession } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import Center from '../components/Center'
import SideBar from '../components/SideBar'



export default function Home() {
  return (
    <div className='bg-black h-screen overflow-hidden'>
      <Head>
        <title>Spotify-clone</title>
      </Head>

     <main className='flex'>
      <SideBar/>
      <Center />
     </main>



    </div>
  )
}

export async function getServerSideProps(context){

  const session = await getSession(context)

  return {
    props: {
      session
    }
  }
}
