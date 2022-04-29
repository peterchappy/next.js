import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import Cookie from 'js-cookie'

type AuthContextType = {
  token?: string
  login: (user: { email: string, password: string }) => Promise<void>
  logout: () => void
}

const defaultValue: AuthContextType = {
  login: () => Promise.resolve(),
  logout: () => {},
}

export const AuthContext = createContext(defaultValue)
export const useAuthContext = () => useContext(AuthContext)

const AUTH_COOKIE = 'auth'
const TEST_TOKEN = 'test_token'
const TEST_USER = 'admin@blog.com'
const TEST_PASSWORD = 'password1234'

const AuthContextProvider: React.FC = ({ children }) => {
  const [token, setToken] = useState<string>()
  const getToken = () => Cookie.get(AUTH_COOKIE)

  useEffect(() => {
    setToken(getToken())
  }, [])

  const login = useCallback(({ email, password }: { email: string, password: string }) => {
    if(email === TEST_USER && password === TEST_PASSWORD){
      const token = TEST_TOKEN
      Cookie.set(AUTH_COOKIE, token, { expires: 1 })
      setToken(token)
      return Promise.resolve()
    }

    throw new Error('Username or password is incorrect')
  }, [])

  const logout = useCallback(() => {
    Cookie.remove(AUTH_COOKIE)
    setToken(undefined)
  }, [])

  const contextValue = {
    token,
    login,
    logout,
  }

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}

export default AuthContextProvider
