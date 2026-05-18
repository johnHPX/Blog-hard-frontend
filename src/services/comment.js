import api from "./api";

export async function listAllByPost(idPost, offset, limit, page, mid) {
  try {
    const result = await api.get(`/comment/list/post/id/${idPost}?offset=${offset}&limit=${limit}&page=${page}&mid=${mid}`)
    return result.data
  } catch (error) {
    console.log(error)
    return { success: false, data: null };
  }
}

export async function listAllByComment(idComment, offset, limit, page, mid){
  try {
    const result = await api.get(`/response/comment/list/comment/id/${idComment}?offset=${offset}&limit=${limit}&page=${page}&mid=${mid}`)
    return result.data
  } catch (error) {
    console.log(error)
    return { success: false, data: null };
  }
}

export async function createComment(token, postID, title, textComment, mid) {
  try {
    const result = await api.post(`/comment/store`, {
      postID: postID,
      title: title,
      content: textComment,
      mid: mid
    }, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    })
    return result.data
  } catch (error) {
    console.log(error)
    return { success: false, data: null };
  }
}