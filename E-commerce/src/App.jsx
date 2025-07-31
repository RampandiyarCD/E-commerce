import Header from './components/header/Header';
import Review from './components/review/Review';
import data from './ecom.json'

export default function App() {
  if (!localStorage.getItem('Data')) {
    localStorage.setItem('Data', JSON.stringify(data));
  }
  return (
    <>
      <Header />
      <Review />

    </>

  );
}
