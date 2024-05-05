import { useNavigate } from 'react-router-dom'
import useUserStore from '../../../store/useUserStore'

const useRedirection = () => {
  const navigate = useNavigate()
  const { getUser } = useUserStore()
  const user = getUser()
  const handleRedirection = () => {
    if (user) navigate('/candystore')
    else navigate('/login')
  }
  return {
    handleRedirection
  }
}

export default useRedirection