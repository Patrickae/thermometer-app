import React from 'react';
import FbContext from './contexts/FbContext';
import './App.css';
import FireBoard from './components/FireBoard';
import axios from 'axios';

const App = (props) => {
  const [fb, setFb] = React.useState([]);
  const proxyUrl = 'https://test.cors.workers.dev/'
  const targetUrl = 'https://fireboard.io/api/v1/devices/6cafc0f4-bb32-41b8-a637-ba138bab7a0e/temps.json'
  const getTemps = () => {
    axios.get(proxyUrl + targetUrl, 
      {headers: {Authorization: 'Token e247d5bd7319548635cfcc946f2566e27ab3e61c'}})
    .then((response) => {
      console.log(response.data)
      setFb(response.data)
    })
  }
  React.useEffect(() =>{
    getTemps()
  }, [])
  return (
    <div className="App">
      <header className="App-header">
      <div className='container-fluid'>
        <FbContext.Provider value={fb}>
          <FireBoard />
        </FbContext.Provider>
        </div>
      </header>
    </div>
  );
}

export default App;
