import { useState, useEffect } from 'react'
import axios from 'axios';
import Map from './Map'
import Info from "./Info";
import './App.css'

function App() {
  const [ip, setIp] = useState('');
  const [country, setCountry] = useState('');
  const [timezone, setTimezone] = useState('');
  const [org, setOrg] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!ip) {
      axios.get('https://api.ipify.org?format=json')
        .then((response) => {
          const userIp = response.data.ip;
          setIp(userIp);
        })
        .catch((error) => {
          // Handle error for the first Axios request
          setIsLoading(false);
          console.error('Error fetching IP address:', error);
        });
    }

    axios.get(`https://ipapi.co/${ip}/json`)
      .then((response) => {
        const json = response.data;
        setCountry(json.country_name);
        setTimezone(json.timezone);
        setOrg(json.org);
        setLatitude(json.latitude);
        setLongitude(json.longitude);
        setIsLoading(false);
      })
      .catch((error) => {
        // Handle error for the second Axios request
        setIsLoading(false);
        console.error('Error fetching IP data:', error);
      });

  }, [ip]);

  function search() {
    const inputValue = document.getElementById('ip').value;
    setIp(inputValue);
  }

  return (
    <>
      <div id="container">
        <div id="search-container">
          <span id="user-ip"></span>
          <input type="text" id="ip" placeholder="Search for any ip address" />
          <button id="search" onClick={search}>Search</button>
        </div>
        <Info ip={ip} country={country} timezone={timezone} org={org} />
      </div>
      {latitude && longitude ? (
        <Map latitude={latitude} longitude={longitude} />
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}

export default App
