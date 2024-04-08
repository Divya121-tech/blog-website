import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import PostCard from '../components/PostCard' ;

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getposts');
      const data = await res.json();
      setPosts(data.posts);
    }
    fetchPosts();
  }, [])
  return (
    <div> 
      <div className='flex flex-col gap-6 p-28 px-3 ax-w-6xl mx-auto'>
        <h1 className='text-3xl p-6 font-bold lg:text-6xl'>Welcome to my Blog</h1>
        <p className='text-gray-500 lg:text-xl sm:text-lg px-6'>
          Here You'll find a variety of articles and tutorials on topic such as web development, software engineering, and programming language.
        </p>
      
    <Link to='/search' className='text-lg sm:text text-teal-500 font-bold hover:underline p-6'>View all posts</Link>
    </div>
    <div className='p-6 bg-amber-100 dark:bg-slate-700'>
      <CallToAction  />
    </div>
    <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
      {
        posts && posts.length> 0 && (
          <div className=" flex flex-col gap-2">
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            <div className=" grid grid-rows-3 grid-flow-col gap-4 justify-center"> {/*flex-wrap for small size devices*/ }
              {posts.map((post) =>(
                <PostCard key={post._id} post={post} />

              ))}
            </div>
            <Link to={'/search'} className='text-sm text-teal-500 hover:underline text-center'>View all posts</Link>
          </div>
        )
      }
    </div>
    </div>
  )
}
