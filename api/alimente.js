const URL = 'https://67164e0f33bc2bfe40bd56fe.mockapi.io/alimente';


export async function getAllProducts() {
const response = await fetch(URL);
const products = await response.json();

return products;

}