import type { NextPage } from 'next'
import { Profile } from '../components/leftColumn/Profile'
import { Feed } from '../components/middleColumn/Feed'
import { NavBar } from '../components/NavBar'
import { MetaData } from '../components/rightColumn/MetaData'


const Home: NextPage = () => {
  return (
    <div className='h-screen overflow-y-hidden'>
      <NavBar />
      <div className='flex h-full justify-around pb-[100px]'>
        <div className='flex items-center'>
          <Profile />
        </div>
        <div className='max-w-[700px] mx-4'>
          <Feed />
        </div>
      </div>
    </div>
  )
}

export default Home
