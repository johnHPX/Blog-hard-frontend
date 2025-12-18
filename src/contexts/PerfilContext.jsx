import { useContext, useState, createContext, useEffect } from "react";

import { getUser } from "../services/user";

const PerfilContext = createContext()

export function PerfilProvider({ children }) {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true)
      try {
        const tokenValue = localStorage.getItem("token")
        const result = await getUser(tokenValue)

        const u = {
          name: result.name,
          email: result.email,
          nick: result.nick,
          telephone: result.telephone,
          avatar: "images/profile.jpg"
        }

        setUser(u)

      } catch (err) {
        console.error("Erro ao carregar perfil: ", err)
      } finally {
        setLoading(false)
      }

    }

    fetchUser()
  }, [])


  return (
    <PerfilContext.Provider value={{ user, loading }}>
      {children}
    </PerfilContext.Provider>
  )
}

export function usePerfilContext() {
  return useContext(PerfilContext)
}