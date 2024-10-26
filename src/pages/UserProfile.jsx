import React from 'react'
import LeftSideBar from '../components/LeftSideBar/LeftSideBar'
import TopCard from '../components/Profile/TopCard'
import ListItems from '../components/Profile/ListItems'

const UserProfile = () => {
  return (
    <div className='min-h-screen flex'>
        <LeftSideBar />
        <section className='w-3/4 ms-4 my-5'>
           <TopCard />
           <ListItems />
        </section>
    </div>
  )
}

export default UserProfile