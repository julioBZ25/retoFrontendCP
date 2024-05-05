const useLocalStorage = () => {
  const getUser = () => {
    const value = localStorage.getItem('USER')
    if (value) return JSON.parse(value)
    return null
  }
  const setUser = (user: {name: string, email: string}) => {
    localStorage.setItem('USER', JSON.stringify(user));
  }
  const removeUser = () => {
    localStorage.removeItem('USER')
  }
  return {
    getUser,
    setUser,
    removeUser
  }
}

export default useLocalStorage;