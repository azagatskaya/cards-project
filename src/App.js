import styles from './App.css';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Card from './components/Card/Card.jsx';
import words from './words.json';
  
function App() {
  return (
    <div className={styles.App}>
      <Header></Header>
      <div className={styles.card_wrapper}><Card item={words[0]}></Card></div>
      <Footer></Footer>
    </div>
  );
}

export default App;
