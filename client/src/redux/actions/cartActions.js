import * as actionTypes from '../constants/cartConst';
import PhonesService from '../../service/phones.service'

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await PhonesService.getPhone(id);

    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            product: data._id,
            name: data.name,
            imageFileName: data.imageFileName,
            price: data.price,
            qty,
        },
    });

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};


export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id,
    });

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};