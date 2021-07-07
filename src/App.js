import Header from './components/structure/Header/Header';
import Storyboard from './components/structure/Storyboard/Storyboard';
import Mainfeed from './components/structure/Mainfeed/Mainfeed';
import './App.css';
import Sidebar from './components/structure/Sidebar/Sidebar';

function App() {
  return (
    <>
      <Header />
      <div className="section">
        <div className="maincontent">
          <Storyboard />
          <Mainfeed />
        </div>
        <div className="sidebar">
          <Sidebar />
        </div>
      </div>
    </>
  );
}

export default App;
