import './assets/css/base/reset.css';
import './assets/css/base/base.css';
import GlobalStyle from './Global';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Formulario from './components/Forms';





function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Banner />
      <Formulario />
      <Footer />
    </>
  );
}

export default App;
