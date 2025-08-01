import products from "./components/Datas"
import ProductList from "./components/ProductList/ProductList"
import { NotifiyPopup,showMessage } from "./components/Notifications/NotifyPopup"
import Navigation from "./components/Navigation/Navigation"
import Footer from "./components/Footer/Footer"


export default function App() {
  return (
    <div>
      <Navigation />     
      <NotifiyPopup />
      <button onClick={()=>{showMessage("The user is created.","created")}}>Click me</button>
      <ProductList product={products} />
      <Footer />
     </div>
  )
}
