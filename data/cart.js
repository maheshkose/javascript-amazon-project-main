export const cart = [];

export function addToCart(productId){
    let matchingItem;
    cart.forEach((item) => {
        if(productId === item.productId){
            matchingItem = item;
        }
    });
    const selectQuantity = document.querySelector(`.js-quantity-selector-${productId}`);
     if(matchingItem){
        console.log(selectQuantity.value);
        matchingItem.quantity += Number(selectQuantity.value);
    }
    
    else{
        console.log(selectQuantity.value);
        cart.push({
            productId:productId,
            quantity:Number(selectQuantity.value)
        });
    }
    
    
}

