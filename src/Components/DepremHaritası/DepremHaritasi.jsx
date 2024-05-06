// DepremHaritasi.jsx

import './DepremHaritasi.css';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/NavbarAnasayfa';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import SonDeprem from './SonDepremler/SonDepremler';
import axios from 'axios';
import { useEffect, useState } from 'react';



const DepremHaritasi = () => {
    const [earthquakeData, setEarthquakeData] = useState([]);
    const [lastEarthquakeData, setLastEarthquakeData] = useState([]);
    const fetchData = async (url) => {
        try {
            const response = await axios.get(url);
            setLastEarthquakeData(prevData => [...prevData, ...response.data.content]);
        } catch (error) {
            console.error('Error fetching earthquake data: ', error);
        }
    };

    const clearData = () => {
        setLastEarthquakeData([]);
    };

    useEffect(() => {
        axios.get('http://localhost:8087/earthquakes/last-5-earthquakes')
          .then(response => {
            setEarthquakeData(response.data);
          })
          .catch(error => {
            console.error('Error fetching earthquake data: ', error);
          });
      }, []);
    return (
        <div className="harita-wrapper">
            <Navbar />
            <div className="harita-container">
                <MapContainer
                    center={[39.925533, 32.866287]}
                    zoom={6}
                    scrollWheelZoom={true}
                    className="harita"
                    zoomControl={false}
                    style={{ width: '100%', height: '500px', position: 'relative' }}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        maxZoom={18}
                        minZoom={5}
                    />
                    <ZoomControl position="topleft" />
                </MapContainer>
            </div>
            <div className="harita-sag-taraf">
                <h3>Deprem Büyüklüğü</h3>
                <label>
                    <input type="checkbox" name="m0_2_9" />
                    M ≥ 0  M ≤ 2.9 <span className="legend-marker"><FontAwesomeIcon className="ico1" icon={faCircle} style={{ color: 'green', fontSize: '0.5em' }} /></span>
                </label><br />
                <label>
                    <input type="checkbox" name="m3_3_9" />
                    M ≥ 3  M ≤ 3.9 <span className="legend-marker"><FontAwesomeIcon className="ico2" icon={faCircle} style={{ color: 'yellow', fontSize: '0.7em' }} /></span>
                </label><br />
                <label>
                    <input type="checkbox" name="m4_4_9" />
                    M ≥ 4  M ≤ 4.9 <span className="legend-marker"><FontAwesomeIcon className="ico3" icon={faCircle} style={{ color: 'orange', fontSize: '0.9em' }} /></span>
                </label><br />
                <label>
                    <input type="checkbox" name="m5_5_9" />
                    M ≥ 5  M ≤ 5.9 <span className="legend-marker"><FontAwesomeIcon className="ico4" icon={faCircle} style={{ color: 'red', fontSize: '1.1em' }} /></span>
                </label><br />
                <label>
                    <input type="checkbox" name="m6_6_9" />
                    M ≥ 6  M ≤ 6.9 <span className="legend-marker"><FontAwesomeIcon className="ico5" icon={faCircle} style={{ color: 'purple', fontSize: '1.3em' }} /></span>
                </label><br />
                <label>
                    <input type="checkbox" name="m7_7_9" />
                    M ≥ 7  M ≤ 7.9 <span className="legend-marker"><FontAwesomeIcon className="ico6" icon={faCircle} style={{ color: 'black', fontSize: '1.5em', marginTop: '5px' }} /></span>
                </label><br />

                <h3> Son Deprem</h3>
                <label>
                    Son Deprem <span className="legend-marker" style={{ marginLeft: '3px' }}><FontAwesomeIcon icon={faExclamationTriangle} style={{ color: 'red', fontSize: '1.5em' }} /></span>
                </label><br />
            </div>
            <div className="son-deprem">
                <div className="son-deprem-title">
                    <h3>Son Depremler :</h3>
                </div>
                <div className="son-depremler">
                    {earthquakeData.map((data, index) => (
                        <SonDeprem key={index} earthquakeData={data} />
                    ))}
                </div>
            </div>
            
            <div className="depremler-tablo">
            <div className="depremler-button">
                <button onClick={() => fetchData('http://localhost:8087/earthquakes/last-24-hours')}>
                    Son 24 Saat
                </button>
                <button onClick={() => fetchData('http://localhost:8087/earthquakes/last-2-days')}>
                    Son 2 Gün
                </button>
                <button onClick={() => fetchData('http://localhost:8087/earthquakes/last-3-days')}>
                    Son 3 Gün
                </button>
                <button onClick={() => fetchData('http://localhost:8087/earthquakes/last-4-days')}>
                    Son 4 Gün
                </button>
                <button onClick={() => fetchData('http://localhost:8087/earthquakes/last-5-days')}>
                    Son 5 Gün
                </button>
                <button onClick={clearData}>
                    Temizle
                </button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Tarih</th>
                        <th>Yer</th>
                        <th>Büyüklük</th>
                        <th>Derinlik</th>
                    </tr>
                </thead>
                <tbody>
                    {lastEarthquakeData.map((data, index) => (
                        <tr key={index}>
                            <td>{data.date}</td>
                            <td>{data.location}</td>
                            <td>{data.magnitude}</td>
                            <td>{data.depth}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

            <Footer />
        </div>
    );
}

export default DepremHaritasi;
