import CommentSection from "./CommentSection"

function CommentsCard({comments}){
  return(
    <div>
      <h2>{comments.length} Comments</h2>
      <div>{comments.map(
        comment => (<CommentSection comment={comment} key={comment.id}/>)
      )}</div>
    </div>
  )
}
export default CommentsCard