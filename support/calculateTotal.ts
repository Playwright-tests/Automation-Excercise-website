export function calculateTotal(price: string, quantity: string) {
    
    const trimmed = price.replace('Rs. ', '');
    return 'Rs. ' + (parseInt(trimmed) * parseInt(quantity)).toString();
}