function CommentSection({comment}){

  return(
    <div>
      <h2>{comment.user}</h2>
      <span>{comment.comment}</span>
    </div>
  )
}
export default CommentSection