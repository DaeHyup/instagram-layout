import Header from './components/structure/Header/Header';
import Storyboard from './components/structure/Storyboard/Storyboard';
import Mainfeed from './components/structure/Mainfeed/Mainfeed';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="section">
        <div className="maincontent">
          <Storyboard />
          <Mainfeed />
        </div>
        <div className="sidebar">{/* sidebar */}ss</div>
      </div>
    </>
  );
}

export default App;
