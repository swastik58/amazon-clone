import { createSlice } from "@reduxjs/toolkit";

//global items variable
const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    //actions for adding and removing items
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(basketItem => basketItem.id === action.payload.id);
      // copy of the current basket  
      let newBasket = [...state.items];

      if(index >=0 ) {
        // the items exists in the basket... remove it
        newBasket.splice(index, 1)
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload.id}) as its not in the basket!`
        );
      }
      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
// state is the global state

export const selectItems = (state) => state.basket.items;

//Selector to get the total price of all items in the basket
export const selectTotal = (state) => state.basket.items.reduce((total, item) => total + item.price, 0);

export default basketSlice.reducer;
