import logo from 'C:\\Users\\User\\Desktop\\login-signup\\login-signup\\src\\Components\\Assets\\user.png'
import twitter from 'C:\\Users\\User\\Desktop\\login-signup\\login-signup\\src\\Components\\Assets\\twitter.png'
import './Sosyalmedya.css'
// import axios from 'axios'
// import { useEffect, useState } from 'react'
// import { create } from 'tar'

const Sosyalmedya = () => {

    // const [twitterData, setTwitterData] = useState(null);

    // useEffect(() => {
    //     const fetchTwitterData = async () => {
    //         try{
    //             const response  = await axios.get((api/contents));

    //             setTwitterData
    //         } catch (error) {
    //             console.error("Twitter API Hatası" , error);
    //         }
    //     }
    //     fetchTwitterData();
    // } , []);
    // if(!twitterData){
    //     return <div>Yükleniyor...</div>
    // }
    // const formatCeatetAt = (createAt) => {
    //     const date = new Date(createAt);
    //     return date.toLocaleDateString("tr-TR", {
    //         day: "numeric",
    //         month: "long",
    //         year: "numeric",
    //         hour: "numeric",
    //         minute: "numeric",
    //         seconds: "numeric",
    //     })
    // }
    
    return (
        <>
        <div className="sosyal-medya">
            <img className="sosyal-user-image" src={logo} alt="" />
            <div className="sosyal-isim-soyisim">
                <span >İsim Soyisim</span>
            </div>
            <div className="sosyal-sure">
                <span>Zaman</span>
            </div>
            <img className="sosyal-twitter-image" src={twitter} alt="" />
            <div className="sosyal-medya-icerik">
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quo vel hic error dignissimos impedit blanditiis vitae nam sint ipsa deserunt fugit iste omnis, nemo aperiam eos dicta, sapiente accusantium explicabo dolorum ea labore adipisci eius! Quibusdam voluptas quis ea doloribus architecto nihil eos eveniet rerum tempora. Totam doloremque minima reiciendis delectus modi numquam tempore hic vel doloribus? Mollitia debitis non, hic cum quos ipsum saepe blanditiis ducimus, ad quibusdam dolore in, doloribus quidem placeat excepturi odio beatae dolor nam. Minima esse adipisci architecto repellat molestiae. Velit tempore inventore soluta cumque quae voluptas numquam adipisci culpa, deleniti at fugiat asperiores?</span>

            </div>
        </div>
        {/* <div className="sosyal-medya2">
            <img className="sosyal-user-image" src={logo} alt="" />
            <div className="sosyal-isim-soyisim">
                <span >İsim Soyisim</span>
            </div>
            <div className="sosyal-sure">
                <span>Zaman</span>
            </div>
            <img className="sosyal-twitter-image" src={twitter} alt="" />
            <div className="sosyal-medya-icerik">
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quo vel hic error dignissimos impedit blanditiis vitae nam sint ipsa deserunt fugit iste omnis, nemo aperiam eos dicta, sapiente accusantium explicabo dolorum ea labore adipisci eius! Quibusdam voluptas quis ea doloribus architecto nihil eos eveniet rerum tempora. Totam doloremque minima reiciendis delectus modi numquam tempore hic vel doloribus? Mollitia debitis non, hic cum quos ipsum saepe blanditiis ducimus, ad quibusdam dolore in, doloribus quidem placeat excepturi odio beatae dolor nam. Minima esse adipisci architecto repellat molestiae. Velit tempore inventore soluta cumque quae voluptas numquam adipisci culpa, deleniti at fugiat asperiores?</span>

            </div>
        </div>
        <div className="sosyal-medya3">
            <img className="sosyal-user-image" src={logo} alt="" />
            <div className="sosyal-isim-soyisim">
                <span >İsim Soyisim</span>
            </div>
            <div className="sosyal-sure">
                <span>Zaman</span>
            </div>
            <img className="sosyal-twitter-image" src={twitter} alt="" />
            <div className="sosyal-medya-icerik">
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quo vel hic error dignissimos impedit blanditiis vitae nam sint ipsa deserunt fugit iste omnis, nemo aperiam eos dicta, sapiente accusantium explicabo dolorum ea labore adipisci eius! Quibusdam voluptas quis ea doloribus architecto nihil eos eveniet rerum tempora. Totam doloremque minima reiciendis delectus modi numquam tempore hic vel doloribus? Mollitia debitis non, hic cum quos ipsum saepe blanditiis ducimus, ad quibusdam dolore in, doloribus quidem placeat excepturi odio beatae dolor nam. Minima esse adipisci architecto repellat molestiae. Velit tempore inventore soluta cumque quae voluptas numquam adipisci culpa, deleniti at fugiat asperiores?</span>

            </div>
        </div> */}
        </>
    )
}

export default Sosyalmedya