import api from "./api";

export async function listAllPost(){
    try{
        const result = await api.get("/post/list")
        return result.data
    }catch (error){
        console.log(error)
        return {}
    }
}

export async function findByCategory(category){
    try{
        const result = await api.get(`/post/list/category/name/${category}`)
        return result.data
    }catch (error){
        console.log(error)
        return {}
    }
}