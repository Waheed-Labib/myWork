import './App.css';
import Header from './component/Header/Header';
import Aside from './component/Aside/Aside';
import Works from './component/Works/Works'
import { useState, useEffect } from 'react';
import QuesAnswers from './component/QuesAnswers/QuesAnswers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [profile, setProfile] = useState({});
  useEffect(() => {
    fetch('profile.json')
      .then(res => res.json())
      .then(data => setProfile(data))
  }, [])

  const [totalTime, setTotalTime] = useState(0);

  const showToast = () => {
    toast.success('Added ')
  };


  const handleAddToList = (work) => {
    setTotalTime(totalTime + work.time);
    showToast();
  }

  return (
    <div className="App">
      <Header></Header>
      <div className='main-body'>
        <Works profile={profile} handleAddToList={handleAddToList}></Works>
        <Aside profile={profile} totalTime={totalTime}></Aside>

      </div>
      <QuesAnswers></QuesAnswers>
    </div>
  );
}

export default App;
