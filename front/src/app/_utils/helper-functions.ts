export function isProductInStock(qteStock: number | undefined): boolean {

  return qteStock? qteStock > 0:false ;
}
