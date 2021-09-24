import { ADD_TO_CART, REMOVE_CART_ITEM, TOGGLE_CART_ITEM_AMOUNT, CLEAR_CART, COUNT_CART_TOTALS } from '../actions';

const cart_reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { id, color, amount, product } = action.payload;
      const tempItem = state.cart.find(item => item.id === id + color);

      if (tempItem) {
        const tempCart = state.cart.map(cartItem => {
          if (cartItem.id === id + color) {
            const newAmount = cartItem.amount + amount >= cartItem.max ? cartItem.max : cartItem.amount + amount;
            return { ...cartItem, amount: newAmount };
          } else {
            return cartItem;
          }
        });
        return { ...state, cart: tempCart };
      } else {
        const newItem = {
          id: id + color,
          name: product.name,
          color,
          amount,
          image: product.images[0].url,
          price: product.price,
          max: product.stock,
        };
        return { ...state, cart: [...state.cart, newItem] };
      }

    case REMOVE_CART_ITEM:
      return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };

    case TOGGLE_CART_ITEM_AMOUNT:
      const tempCart = state.cart.map(item => {
        let newAmount;
        if (item.id === action.payload.id) {
          if (action.payload.value === 'decrease') newAmount = item.amount === 1 ? 1 : item.amount - 1;
          if (action.payload.value === 'increase') newAmount = item.amount === item.max ? item.max : item.amount + 1;
          return { ...item, amount: newAmount };
        } else {
          return item;
        }
      });
      return { ...state, cart: tempCart };

    case CLEAR_CART:
      return { ...state, cart: [] };

    case COUNT_CART_TOTALS:
      const { total_items, total_amount } = state.cart.reduce((total, item) => {
        const { price, amount } = item;
        total.total_items += amount;
        total.total_amount += price * amount;
        return total;
      }, { total_items: 0, total_amount: 0 });
      return { ...state, total_items, total_amount };

    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default cart_reducer;