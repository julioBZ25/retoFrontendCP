import useUserStore from '../../store/useUserStore';
import { signInWithGooglePopup } from '../../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { TUser } from '../../modules/Login/utils/schema';
import useCartStore from '../../store/useCartStore';

const useLogin = () => {
  const { setUser, removeUser } = useUserStore();
  const { removeCart } = useCartStore()
  const navigate = useNavigate()
  const handleFirebaseLogin = async () => {
    const response = await signInWithGooglePopup();
    const {
      user: { providerData },
    } = response;
    setUser({
      name: providerData[0].displayName as string,
      email: providerData[0].email as string,
    });
  }
  const handleAnonLogin = async (payload:TUser) => {
    setUser(payload);
  }
  const handleLogout = () => {
    removeUser()
    removeCart()
    navigate('/home')
  }
  return {
    handleAnonLogin,
    handleFirebaseLogin,
    handleLogout,
  }
}

export default useLogin