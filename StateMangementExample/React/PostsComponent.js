import React, { useEffect, useState } from 'react';

const PostComponent = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostComponent;


import React, { useEffect } from 'react';

const DemoComponent = () => {
  useEffect(() => {
    console.log('Initialized');

    return () => {
      console.log('Component is destroyed');
    };
  }, []);

  return <p>React Component</p>;
};

export default DemoComponent;
