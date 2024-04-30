import './HaberCard.css';

const HaberCard = ({ title, description, imageUrl, onClick, pubDate }) => {
  return (
    <div className="haber-card-wrapper" onClick={onClick}>
        <div className="haber-card-resim">
            <p>{pubDate}</p>
           <img src={imageUrl} alt={title} /> 
        </div>
        <div className="haber-card-title">
            <h3>{title}</h3>
        </div>
        <div className="haber-card-cizgi"></div>
        <div className="haber-card-aciklama">
             {description}
        </div>
    </div>
  );
};

export default HaberCard;
