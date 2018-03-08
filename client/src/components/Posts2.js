import React from 'react';

const Posts2 = (props) => {

  return (
    <div>
      {props.posts.map(post => {
        return <div key={post.id}>{post.text}</div>
      })}
    </div>

  );
}

export default Posts2;