import api from "./api";

export async function createUser(user) {
    try {
        const result = await api.post("/user/store", user, {
            'Content-Type': 'application/json'
        })
        return result
    } catch (err) {
        throw err
    }
}

export async function login(nick, password) {
    try {
        const result = await api.post("/user/login", {
            nick: nick,
            password: password,
            mid: "ok"
        }, {
            'Content-Type': 'application/json'
        })
        return result.data
    } catch (err) {
        throw err
    }
}

export async function getUser(token) {
    try {
        console.log(token)
        if (!token) {
            return {
                error: "Token invalido"
            }
        }

        const configs = {
            headers: { Authorization: `Bearer ${token}` }
        }

        const result = await api.get(
            "user/status?mid=ok", configs
        )

        return result.data
    } catch (err) {
        console.log(err)
    }
}

export async function likePost(token, postID, mid) {
    try {
        const result = await api.post(`/user/post/like`, {
            postID: postID,
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

export async function deslikePost(token, postID, mid) {
    try {
        const result = await api.delete(`/user/post/deslike`, {
            data: {
                postID: postID,
                mid: mid
            },
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