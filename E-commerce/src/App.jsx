import Header from './components/header/Header';
import Review from './components/review/Review';
import data from './ecom.json'
import './App.css';
import Footer from './components/footer/Footer';

export default function App() {
  if (!localStorage.getItem('Data')) {
    localStorage.setItem('Data', JSON.stringify(data));
  }
  return (
    <div >
      <header>
        <Header />
      </header>
      <main>
        <div className='contents'>
          <Review />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>

    </div>

  );
}
