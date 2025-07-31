import products from "./components/Datas"
import ProductList from "./components/ProductList"


export default function App() {
  return (
    <div>
      <ProductList product={products} />
     </div>
  )
}
