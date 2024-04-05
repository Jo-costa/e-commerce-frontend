export function cartItemCount(state) {
    let count = 0;
    for (let i = 0; i < state.cart.length; i++) {
        if ('quantity' in state.cart[i]) {
            count += state.cart[i].quantity
        }
    }
    return count;

}