import type { NextPage } from 'next'
import { Profile } from '../components/leftColumn/Profile'
import { Feed } from '../components/middleColumn/Feed'


const Home: NextPage = () => {
  return (
    <>
      <div className='flex space-x-4 justify-around'>
        <div>
          <Profile/>
        </div>
        <div>
          <Feed />
        </div>
        <div>third col</div>
      </div>
    </>
  )
}

export default Home
