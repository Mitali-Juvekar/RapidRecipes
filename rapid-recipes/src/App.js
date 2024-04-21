import './App.scss';
import Header from './components/Header'
import Tabs from './components/Tabs'
import RecipeLists from './components/RecipeLists'

function App() {
  return (
    <div className="main">
      <Header />
      <Tabs />
      <RecipeLists />

    </div>
  );
}

export default App;
