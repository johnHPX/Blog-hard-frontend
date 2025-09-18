import api from "./api";

export async function createUser(user){
    try{
        const result = await api.post("/user/store", user, {
            'Content-Type': 'application/json'
        })
    }catch (err){
        console.log(err)
    }
}

export async function login(nick, password){
    try{
        const result = await api.post("/user/store", {
            nick: nick,
            password: password,
            mid: "ok"
        }, {
            'Content-Type': 'application/json'
        })
        return result.data
    }catch (err){
        console.log(err)
    }
}