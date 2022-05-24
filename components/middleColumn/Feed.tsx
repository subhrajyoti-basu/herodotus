import React from 'react'
import { FeedCard } from './FeedCard'

export const Feed = () => {
  return (
    <div className='divide-y space-y-5 overflow-y-scroll h-full pr-4' id='journal-scroll'>
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
    </div>
  )
}
