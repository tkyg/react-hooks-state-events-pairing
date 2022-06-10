import { useState } from "react";
import CommentsCard from "./CommentsCard"

function VideoInfo({videoData}){

  const [videoInfo, setVideoInfo] = useState(videoData)
  const [isVisible, setIsVisible] = useState(true)

  function handleLikes(){
    const video = {...videoInfo}
    video.upvotes = video.upvotes + 1
    setVideoInfo(video)
  }

  function handleDislikes(){
    const video = {...videoInfo}
    video.downvotes = video.downvotes + 1
    setVideoInfo(video)
  }

  function handleVisibility(){
    setIsVisible(!isVisible)
  }

  return(
    <div>
      <iframe
        width="919"
        height="525"
        src={videoData.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={videoData.title}
      />
      <h1>{videoData.title}</h1>
      <span>{videoData.views} views | Uploaded { videoData.createdAt}
      </span>
      <button onClick={handleLikes}>{videoInfo.upvotes}👍 </button>
      <button onClick={handleDislikes}>{videoInfo.downvotes}👎 </button>
      <button onClick={handleVisibility}>{ isVisible ? "Hide Comments" : "Show Comments"} </button>
      {isVisible ? <CommentsCard comments={videoData.comments} /> : null}
    </div>
  )
}
export default VideoInfo