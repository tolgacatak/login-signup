import React from 'react';
import './SonDepremler.css';

const SonDepremler = ({ earthquakeData }) => {
  // Tarih formatını düzenlemek için bir fonksiyon
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${date
      .getDate()
      .toString()
      .padStart(2, '0')} ${date
      .getHours()
      .toString()
      .padStart(2, '0')}:${date
      .getMinutes()
      .toString()
      .padStart(2, '0')}`;
    return formattedDate;
  };

  return (
    <div className="son-depremler-card">
      <div className="son-deprem-buyukluk">
        <p>{earthquakeData.magnitude} (ML)</p>
      </div>
      <div className="son-deprem-konum">
        <p>{earthquakeData.location}</p>
      </div>
      <div className="son-deprem-tarih">
        <p>{formatDate(earthquakeData.date)}</p>
      </div>
    </div>
  );
};

export default SonDepremler;
