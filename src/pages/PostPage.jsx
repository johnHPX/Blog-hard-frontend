import { useEffect, useState } from "react";
import "../styles/postPage.css";
import { useParams } from "react-router-dom";
import { findByID } from "../services/post";
import ReactMarkdown from "react-markdown";
import { likePost, deslikePost } from "../services/user";
import { createComment, listAllByComment, listAllByPost } from "../services/comment";

import LoadingSpinner from "../components/LoadingSpinner";

export default function PostPage() {
  const token = localStorage.getItem("token")

  const { id } = useParams()
  const [comments, setComments] = useState([]);
  const [responseComments, setResponseComments] = useState({})
  const [post, setPost] = useState({ postID: "", title: "", Content: "", likes: 0, mid: "" })
  const [likes, setLikes] = useState(0);

  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(false);


  const loadComments = async (loadResponseComments) => {
    const resultComments = await listAllByPost(id, 0, 20, 1, "mid")
    if (resultComments?.count > 0) {
      setComments(resultComments.comments)
      if (loadResponseComments) {
        const responseCommentsObj = {}
        await Promise.all(
          resultComments.comments.map(async (c) => {
            const rResponseComments = await listAllByComment(c.commentID, 0, 5, 1, "mid")
            if (rResponseComments?.count > 0) {
              responseCommentsObj[c.commentID] = rResponseComments.responseComments
            }
          })
        )

        setResponseComments(responseCommentsObj)
      }
    } else {
      setComments([])
    }
  }

  useEffect(() => {
    async function find() {
      const result = await findByID(id, "ok")
      if (result?.mid) {
        setPost({
          postID: result.postID,
          title: result.title,
          Content: result.Content,
          likes: result.likes,
          mid: result.mid
        })
      }
      setLikes(result.likes)
    }
    find()
    loadComments(true)
  }, [])

  const addCommentInPost = async () => {

    if (!newComment.trim()) {
      return
    }

    if (loading){
      return
    }
    setLoading(true)

    try {
      const result = await createComment(token, id, "qualquer", newComment, "ok")
      if (result?.mid) {
        await loadComments(false)
      }
    } catch (err) {
      console.log(err)
    } finally {
      setNewComment("")
      setLoading(false)
    }

  }

  const likeBTN = async () => {
    const result = await likePost(token, post.postID, "ok")
    if (result?.mid) {
      setLikes(likes + 1)
    }
  }

  const deslikeBTN = async () => {
    const result = await deslikePost(token, post.postID, "ok")
    if (result?.mid) {
      setLikes(likes - 1)
    }
  }

  return (
    <div className="post-container">
      <article className="post">
        <div className="markdown-page-post">
          <ReactMarkdown>
            {post.Content}
          </ReactMarkdown>
        </div>
        <div className="likes">
          <span>{likes} curtidas</span>
          <button onClick={() => { likeBTN() }}>👍 Curtir</button>
          <button onClick={() => { deslikeBTN() }}>👎 Descurtir</button>
        </div>
      </article>

      <section className="comments">
        <h2>Comentários</h2>

        <div className="add-comment">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Escreva seu comentário..."
          />
          <button onClick={addCommentInPost}>Comentar</button>
        </div>

        <ul className="comment-list">
          {loading? 
            (<LoadingSpinner />)
           : 
            (<>
              {comments.map((c) => (
                <li key={c.commentID} className="comment">
                  <p><strong>"Use1":</strong> {c.content}</p>

                  <ul className="replies">
                    {responseComments[c.commentID]?.map((r) => (

                      <li key={r.responseCommentId}>
                        <p>
                          <strong>dev1:</strong> {r.content}
                        </p>
                      </li>

                    ))}
                  </ul>
                </li>
              ))}
            </>)
          }
        </ul>
      </section>
    </div>
  );
}
