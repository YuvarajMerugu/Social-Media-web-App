import React from 'react'
import PostSide from '../../src/components/PostSide/PostSide'
import ProfileSide from '../../src/components/profileSide/ProfileSide'
import RightSide from '../../src/components/RightSide/RightSide'
import './Home.css'
const Home = () => {
  return (
    <div className="Home">
        <ProfileSide/>
        <PostSide/>
        <RightSide/>
    </div>
  )
}

export default Home