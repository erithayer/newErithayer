
import './Hero.css'
import img1 from '../../Images/img (1).jpg'
import img2 from '../../Images/img (2).jpg'
import img3 from '../../Images/img (3).jpg'
import img4 from '../../Images/img (4).jpg'
import img5 from '../../Images/img (5).jpg'





function Hero () {
    return(
        <div className="Hero-container">
            <div className="Title"></div>
            <div className="Body">
                <div className="First-row">
                    <div className="Row-container">
                        <div className="Card">
                            <div className="image img1"></div>
                            <div className="Detail">
                                <p className="Name">Տիգրան Ավինյան</p>
                                <p className="Position">Փոխվարչապետ</p>
                            </div>
                        </div>
                        <div className="Card">
                            <div className="image img2"></div>
                            <div className="Detail">
                                <p className="Name">Տիգրան Ավինյան</p>
                                <p className="Position">Փոխվարչապետ</p>
                            </div>
                        </div>
                        <div className="Card">
                            <div className="image img3"></div>
                            <div className="Detail">
                                <p className="Name">Տիգրան Ավինյան</p>
                                <p className="Position">Փոխվարչապետ</p>
                            </div>
                        </div>
                        <div className="Card">
                            <div className="image img4"></div>
                            <div className="Detail">
                                <p className="Name">Տիգրան Ավինյան</p>
                                <p className="Position">Փոխվարչապետ</p>
                            </div>
                        </div>
                        <div className="Card">
                            <div className="image img5"></div>
                            <div className="Detail">
                                <p className="Name">Տիգրան Ավինյան</p>
                                <p className="Position">Փոխվարչապետ</p>
                            </div>
                        </div>                    
                    </div>
            </div>
            </div>
        </div>
    )
}

export default Hero