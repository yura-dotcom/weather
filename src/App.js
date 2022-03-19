import React, { useState, useEffect } from 'react';
import AppBody from './components/AppBody';
import './App.sass';

function App() {



  const [location, setLocation] = useState(''),
    [resJson, setResJson] = useState(false);


  let start = (
    <div className='no_query'>Type Your location</div>
  );

  let error = (
    <div className='no_query'>Some's went wrong... Check Your query</div>
  );

  function reqResp() {
    fetch(`https://weatherdbi.herokuapp.com/data/weather/${location}`)
      .then(res => res.json())
      .then(json => (json.status === 'fail') ? setResJson(false) : setResJson(json))
      .catch(() => setResJson(false))


  }


  useEffect(() => {
    reqResp()
  }, []);

  function handleFormSubmit(event) {
    event.preventDefault();
    reqResp()
  }


  function printLocation(event) {
    setLocation(event.target.value.toLowerCase());
  }


  return (
    <div className="App">
      <div className='container'>
        <form className='app_head' onSubmit={handleFormSubmit} >
          <h1>Weather</h1>
          {/* querystring */}
          <label>
            Your location
          </label>
          <input type='text' placeholder='location' value={location} onChange={(e) => printLocation(e)} />

        </form>

        {location ?  (resJson ? <AppBody resJson={resJson} /> : error) : start}

      </div>
    </div>
  );
}

export default App;


