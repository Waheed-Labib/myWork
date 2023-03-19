import './App.css';
import Header from './component/Header/Header';
import Aside from './component/Aside/Aside';
import Works from './component/Works/Works'
import { useState, useEffect } from 'react';
import Footer from './component/Footer/Footer';

function App() {
  const [profile, setProfile] = useState({});
  useEffect(() => {
    fetch('profile.json')
      .then(res => res.json())
      .then(data => setProfile(data))
  }, [])

  return (
    <div className="App">
      <Header></Header>
      <div className='main-body'>
        <Works profile={profile}></Works>
        <Aside profile={profile}></Aside>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
