import api from "./api";

export async function listAllPost(offset, limit, page, mid){
    try{
        const result = await api.get(`/post/list?offset=${offset}&limit=${limit}&page=${page}&mid=${mid}`)
        return result.data
    }catch (error){
        console.log(error)
        return { success: false, data: null };
    }
}

export async function findByCategory(category, offset, limit, page, mid){
    try{
        const result = await api.get(`/post/list/category/name/${category}?offset=${offset}&limit=${limit}&page=${page}&mid=${mid}`)
        return result.data
    }catch (error){
        console.log(error)
        return { success: false, data: null };
    }
}