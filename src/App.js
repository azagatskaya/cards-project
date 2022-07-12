import styles from './App.css';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Sets from './components/Sets/Sets.jsx';
  
function App() {
  return (
    <div className={styles.App}>      
      <Header></Header>
      <div className={styles.main}>
        <div className={styles.main__wrapper}>
          <Sets></Sets>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
