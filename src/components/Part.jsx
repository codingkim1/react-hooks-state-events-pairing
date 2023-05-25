import React, { useState } from "react";
// import video from "../data/video";

function Part({video}){

const [count, setCount]=useState(9210)
function handleClick(){
    setCount(count22=>count22+1)

}
    return(
        <>

        <iframe
        width="919"
        height="525"
        // src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        src="https://www.youtube.com/embed/a7BOwi0ikV4"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h2> {video.title} </h2>
      <h4> {video.views} Views | Uploaded {}</h4>
      {video.comments.map((comment)=> {
        return(
            <div>
                <h3>{comment.user}</h3>
                <h3>{comment.comment}</h3>
            </div>
        )})};
        <button onClick={handleClick}>{count}</button>
        <button>Dislike</button>

        </>
      )
}

export default Part