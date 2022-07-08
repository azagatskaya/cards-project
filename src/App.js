import styles from './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Card from './components/Card';
import words from './words.json';



function App() {
  return (
    <div className={styles.App}>
      <Header></Header>
      {console.log(words)}
      <Card item={words[0]}></Card>
      <Footer></Footer>
    </div>
  );
}

export default App;
