import './App.css';
import Card from './components/card/Card';
import Header from './components/header/Header';
import Pagination from './components/pagination/Pagination';
import Home from './pages/home/Home'

import GlobalStyle from './styles/global';

function App() {
  return (
    <GlobalStyle>
      <Header />
      <div>
        <Home />
        <div id='pagination'>
          <Pagination />
        </div>
      </div>
      <footer/>
    </GlobalStyle>
  );
}

export default App;
