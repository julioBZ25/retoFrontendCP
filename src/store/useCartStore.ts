import { ICartItem } from '../modules/Cart/types'

const useCartStore = () => {
  const getCart = () => {
    const value = localStorage.getItem('CART')
    if (value) return JSON.parse(value)
    return []
  }
  const setCart = (cartItem: ICartItem, addingValue: number) => {
    const prevCart = getCart() as ICartItem[]
    const newCart = addQuantity(prevCart, cartItem, addingValue)
    localStorage.setItem('CART', JSON.stringify(newCart));
  }
  const addQuantity = (prevCart: ICartItem[], cartItem: ICartItem, addingValue: number) => {
    let listName
    listName = prevCart.find(item => item.name === cartItem.name)
    if (listName) {
      listName.quantity += addingValue
      if (listName.quantity <= 0) {
        const filteredList = prevCart.filter((item) => item.name !== listName.name)
        console.log({filteredList})
        return filteredList;
      }
      return [...prevCart]
    }
    else {
      listName = {...cartItem, quantity: 1}
      return [...prevCart, listName]
    }
  }
  const getQuantity = (name: string) => {
    const values = getCart()
    return values?.find(item => item.name === name)?.quantity
  }
  const removeCart = () => {
    localStorage.removeItem('CART')
  }
  return {
    getCart,
    setCart,
    getQuantity,
    removeCart
  }
}

export default useCartStore;