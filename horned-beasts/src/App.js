import './App.css';
import Header from './header';
import Main from './main';
import Footer from './footer';

function App() {
  return (
    <>
      <Header title="Horned Beasts Project" />
      <Main />
      {/* BeastIterations="beastArr.length" To be put above*/}
      <Footer author="Antoine Charette" />
    </>
  );
}

export default App;
