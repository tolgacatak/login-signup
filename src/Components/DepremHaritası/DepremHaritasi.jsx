// DepremHaritasi.jsx

import './DepremHaritasi.css';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/NavbarAnasayfa';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import SonDeprem from './SonDepremler/SonDepremler';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const DepremHaritasi = () => {
    const [earthquakeData, setEarthquakeData] = useState([]);
    const [lastEarthquakeData, setLastEarthquakeData] = useState([]);
    const [latestEarthquake, setLatestEarthquake] = useState(null);
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

          axios.get('http://localhost:8087/earthquakes/latest-earthquake')
          .then(response => {
              setLatestEarthquake(response.data);
          })
          .catch(error => {
              console.error('Error fetching latest earthquake data: ', error);
          });
      }, []);
      const cityHandler = (e) => {
        const selectedCity = e.target.value;
        fetchData(`http://localhost:8087/earthquakes/earthquakes-by-province?province=${selectedCity}`);
    }
    const exclamationIcon = L.icon({
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        iconSize: [20, 31],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        className: 'leaflet-div-icon'
    });
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
                    {latestEarthquake && (
                        <Marker position={[latestEarthquake.latitude, latestEarthquake.longitude]} icon={exclamationIcon}>
                            <Popup>
                                <div>
                                    <h3>Son Deprem</h3>
                                    <p>{latestEarthquake.location}</p>
                                    <p>Büyüklük : {latestEarthquake.magnitude}</p>
                                    <p>Derlinlik : {latestEarthquake.depth}</p>
                                    <p>Tarih : {latestEarthquake.date}</p>
                                </div>
                            </Popup>
                            {/* <FontAwesomeIcon icon={faExclamationTriangle} style={{ color: 'red', fontSize: '1.5em' }} /> */}
                        </Marker>
                    )}
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
                    Son Deprem <span className="legend-marker" style={{ marginLeft: '3px' }}><FontAwesomeIcon icon={faLocationDot} style={{ color: 'blue', fontSize: '1.5em' }} /></span>
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
            <div className="depremler-button" >
                <select name="zamanlar" id="zamanlar" value="Zaman Seçiniz" onChange={(e) => fetchData(e.target.value)}>
                    <option value="http://localhost:8087/earthquakes/last-24-hours">Son 24 Saat</option>
                    <option value="http://localhost:8087/earthquakes/last-2-days">Son 2 Gün</option>
                    <option value="http://localhost:8087/earthquakes/last-3-days">Son 3 Gün</option>
                    <option value="http://localhost:8087/earthquakes/last-4-days">Son 4 Gün</option>
                    <option value="http://localhost:8087/earthquakes/last-5-days">Son 5 Gün</option>
                </select>
                <select name="sehirler" id="sehirler" onChange={cityHandler} value="Şehir Seçiniz">
                    <option value="Adana">Adana</option>
                    <option value="Adiyaman">Adıyaman</option>
                    <option value="Afyonkarahisar">Afyonkarahisar</option>
                    <option value="Ağrı">Ağrı</option>
                    <option value="Amasya">Amasya</option>
                    <option value="Ankara">Ankara</option>
                    <option value="Antalya">Antalya</option>
                    <option value="Artvin">Artvin</option>
                    <option value="Aydın">Aydın</option>
                    <option value="Balıkesir">Balıkesir</option>
                    <option value="Bilecik">Bilecik</option>
                    <option value="Bingöl">Bingöl</option>
                    <option value="Bitlis">Bitlis</option>
                    <option value="Bolu">Bolu</option>
                    <option value="Burdur">Burdur</option>
                    <option value="Bursa">Bursa</option>
                    <option value="Çanakkale">Çanakkale</option>
                    <option value="Çankırı">Çankırı</option>
                    <option value="Çorum">Çorum</option>
                    <option value="Denizli">Denizli</option>
                    <option value="Diyarbakır">Diyarbakır</option>
                    <option value="Edirne">Edirne</option>
                    <option value="Elazığ">Elazığ</option>
                    <option value="Rrzincan">Erzincan</option>
                    <option value="Rrzurum">Erzurum</option>
                    <option value="Rskişehir">Eskişehir</option>
                    <option value="Gaziantep">Gaziantep</option>
                    <option value="Giresun">Giresun</option>
                    <option value="Gümüshane">Gümüşhane</option>
                    <option value="Hakkari">Hakkari</option>
                    <option value="Hatay">Hatay</option>
                    <option value="Isparta">Isparta</option>
                    <option value="Mersin">Mersin</option>
                    <option value="İstanbul">İstanbul</option>
                    <option value="İzmir">İzmir</option>
                    <option value="Kars">Kars</option>
                    <option value="Kastamonu">Kastamonu</option>
                    <option value="Kayseri">Kayseri</option>
                    <option value="Kırklareli">Kırklareli</option>
                    <option value="Kırşehir">Kırşehir</option>
                    <option value="Kocaeli">Kocaeli</option>
                    <option value="Konya">Konya</option>
                    <option value="Kütahya">Kütahya</option>
                    <option value="Malatya">Malatya</option>
                    <option value="Manisa">Manisa</option>
                    <option value="Kahramanmaraş">Kahramanmaraş</option>
                    <option value="Mardin">Mardin</option>
                    <option value="Muğla">Muğla</option>
                    <option value="Muş">Muş</option>
                    <option value="Nevşehir">Nevşehir</option>
                    <option value="Niğde">Niğde</option>
                    <option value="Ordu">Ordu</option>
                    <option value="Rize">Rize</option>
                    <option value="Sakarya">Sakarya</option>
                    <option value="Samsun">Samsun</option>
                    <option value="Siirt">Siirt</option>
                    <option value="Sinop">Sinop</option>
                    <option value="Sivas">Sivas</option>
                    <option value="Tekirdağ">Tekirdağ</option>
                    <option value="Tokat">Tokat</option>
                    <option value="Trabzon">Trabzon</option>
                    <option value="Tunceli">Tunceli</option>
                    <option value="Şanlıurfa">Şanlıurfa</option>
                    <option value="Uşak">Uşak</option>
                    <option value="Van">Van</option>
                    <option value="Yozgat">Yozgat</option>
                    <option value="Zonguldak">Zonguldak</option>
                    <option value="Aksaray">Aksaray</option>
                    <option value="Bayburt">Bayburt</option>
                    <option value="Karaman">Karaman</option>
                    <option value="Kırıkkale">Kırıkkale</option>
                    <option value="Batman">Batman</option>
                    <option value="Şırnak">Şırnak</option>
                    <option value="Bartın">Bartın</option>
                    <option value="Ardahan">Ardahan</option>
                    <option value="Iğdır">Iğdır</option>
                    <option value="Yalova">Yalova</option>
                    <option value="Karabük">Karabük</option>
                    <option value="Kilis">Kilis</option>
                    <option value="Osmaniye">Osmaniye</option>
                    <option value="Düzce">Düzce</option>
                </select>
                <select name="magnitude" id="magnitude" onChange={(e) => fetchData(e.target.value)}>
                    <option value="http://localhost:8087/earthquakes/earthquakes-magnitude-0-to-2.9">0-2.9 Magnitude Aralığındaki Depremler</option>
                    <option value="http://localhost:8087/earthquakes/earthquakes-magnitude-3-to-3.9">3-3.9 Magnitude Aralığındaki Depremler</option>
                    <option value="http://localhost:8087/earthquakes/earthquakes-magnitude-4-to-4.9">4-4.9 Magnitude Aralığındaki Depremler</option>
                    <option value="http://localhost:8087/earthquakes/earthquakes-magnitude-5-to-5.9">5-5.9 Magnitude Aralığındaki Depremler</option>
                    <option value="http://localhost:8087/earthquakes/earthquakes-magnitude-6-to-6.9">6-6.9 Magnitude Aralığındaki Depremler</option>
                    <option value="http://localhost:8087/earthquakes/earthquakes-magnitude-7-to-7.9">7-7.9 Magnitude Aralığındaki Depremler</option>
                    <option value="http://localhost:8087/earthquakes/earthquakes-magnitude-8-and-above">8 ve Üzeri Magnitude Aralığındaki Depremler</option>
                </select>


                <button onClick={clearData}>
                    Temizle
                </button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Tarih</th>
                        <th>Yer</th>
                        <th>Büyüklük(ML)</th>
                        <th>Derinlik(Km)</th>
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
