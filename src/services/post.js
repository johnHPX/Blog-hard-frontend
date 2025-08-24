import api from "./api";

export async function listAllPost(){
    try{
        const result = await api.get("/post/list")
        console.log(result)
        return result.data
    }catch (error){
        console.log(error)
        return {}
    }
}