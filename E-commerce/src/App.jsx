import { useState, useReducer } from 'react';
import Header from './components/header/Header';
import Review from './components/review/Review';
import data from './ecom.json';
import './App.css';
import Footer from './components/footer/Footer';
import OfferBanner from './components/offer/OfferBanner';
import ProductList from './components/ProductList/ProductList';
import AboutUs from './components/AboutUs/AboutUs';
import { NotifiyPopup } from './components/Notifications/NotifyPopup';
import TestimonialSlider from './components/TestimonialSlider/TestimonialSlider';
import FAQ from './components/FAQ/FAQ';
import AddProductForm from './components/AddProductForm/AddProductForm';
import Filter from './components/filter/Filter';
import HelpF from './components/helpandsuppotform/form';

export default function App() {
  if (!localStorage.getItem('Data')) {
    localStorage.setItem('Data', JSON.stringify(data));
  }
  const storedData = JSON.parse(localStorage.getItem('Data'));
  const initProduct = storedData.products;

  const [load, setLoad] = useState(false);
  const cartItemsReducer = (state, action) => {
    switch (action.type) {
      case "addToCart":
        {
          const existingItem = state.find(item => item.id === action.product.id);
          if (existingItem) {
            return state.map(item =>
              item.id === action.product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
          }
          return [...state, { ...action.product, quantity: 1 }];
        }

      case "quantity":
        return state.map(item => {
          if (item.id === action.id) {
            const newQuantity = item.quantity + action.val;
            setLoad(!load);
            return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
          }
          return item;
        });

      case "delete":
        {
          const remainingItems = state.filter(item => item.id !== action.id);
          localStorage.setItem("cartItems", JSON.stringify(remainingItems));
          return remainingItems;
        }

      case "buy":
        localStorage.setItem("cartItems", "[]");
        return [];

      default:
        return state;
    }
  };

  const [products, setProducts] = useState(initProduct);
  const [cartItems, cartItemsDispatch] = useReducer(
    cartItemsReducer,
    JSON.parse(localStorage.getItem("cartItems") || "[]")
  );

  return (
    <div>
      <header>
        <Header props={{ cartItems, cartItemsDispatch, setProducts }} />
        <NotifiyPopup />

      </header>
      <main className='contents'>
        <OfferBanner />
        <ProductList product={products} cartItemsDispatch={cartItemsDispatch} />
        <AboutUs />
        <TestimonialSlider testimonials={storedData.reviews}/>
        <Review />
        <FAQ />
        <HelpF/>
        <AddProductForm/>
        <Filter/>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}