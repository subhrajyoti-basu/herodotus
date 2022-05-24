import React from 'react'
import { FeedCard } from './FeedCard'

export const Feed = () => {
  return (
    <div className='divide-y space-y-5'>
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
    </div>
  )
}
