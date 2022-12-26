type CartItemsPerPageProps = {
  countItemsPerPageCart: number;
  onCountItemsPerPageCart: (a: number) => void;
  onBlur: () => void;
}

export default function CartItemsPerPage({countItemsPerPageCart, onCountItemsPerPageCart, onBlur}: CartItemsPerPageProps) {
  return (
    <div className="cart__count">
      <label htmlFor="cart-elements-on-page">Items on the page: </label>
      <input className="cart__input-number" 
        type="number" value={countItemsPerPageCart}
        name="cart-elements-on-page" 
        id="cart-elements-on-page"
        onChange={(e) => {           
          onCountItemsPerPageCart(e.target.valueAsNumber);        
        }} 
        onBlur={onBlur}
      />
    </div>
  )
}