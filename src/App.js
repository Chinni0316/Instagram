import logo from './logo.svg';
import './App.css';
import SideBar from './components/sidebar';
import Feed from './components/feed';
import Profile from './components/profile';

const App = () => {
  return (
    <div className="app-container">
      <SideBar />
      <div className="main-content">
        <Feed />
        <Profile userId={1} />
      </div>
    </div>
  );
};

export default App;
