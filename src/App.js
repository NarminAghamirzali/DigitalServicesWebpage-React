import './css/App.css';
import './css/reset.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './css/style.css';
import Starting from './components/Starting';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <>
        <Starting />
        <Header />
        <Main />
        <Footer />
    </>
  );
}

export default App;
