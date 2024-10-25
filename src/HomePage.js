import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // שימוש ב-useNavigate ו-useLocation
import './HomePage.css';
import aviBg from '../src/aviBackground.mp4'
import Gallery from "./Gallery";
import NavigationUtils from './NavigationUtils';



// פונקציה שעוטפת את המחלקה עם שימוש ב-useNavigate
function withNavigation(Component) {
    return function WrappedComponent(props) {
        const navigate = useNavigate(); // שימוש ב-useNavigate כדי לספק את פונקציית הניווט
        const location = useLocation(); // שימוש ב-useLocation כדי להעביר את המיקום
        return <Component {...props} navigate={navigate} location={location} />;
    };
}



class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.thirdScreenRef = React.createRef();
        this.fourthScreenRef = React.createRef();
    }

    componentDidMount() {
        this.handleScroll(); // גלילה כאשר העמוד נטען לראשונה
    }

    componentDidUpdate(prevProps) {
        // בדיקה אם location השתנה כדי לוודא שה-scroll יתבצע גם בלחיצה על כפתורים מתוך העמוד
        if (this.props.location !== prevProps.location) {
            this.handleScroll();
        }
    }

    handleScroll = () => {
        const { state } = this.props.location; // קבלת ה-state מהניווט

        if (state && state.scrollTo) {
            switch (state.scrollTo) {
                case 'gallery':
                    NavigationUtils.scrollToRef(this.thirdScreenRef);
                    break;
                case 'contact':
                    NavigationUtils.scrollToRef(this.fourthScreenRef);
                    break;
                default:
                    break;
            }
        }
    }



    render() {
        return (
            <div>
                <div className="panel">
                    <a href="/" onClick={(e) => {
                        this.props.navigate('/');
                    }}>
                        <image className={"logo"}/>
                    </a>
                    <button
                        className={"gallery"}
                        onClick={() => NavigationUtils.navigateTo(this.props.navigate, '/', {scrollTo: 'gallery'})}
                    >
                        <h2>גלריה</h2>
                    </button>
                    <button
                        className={"contact"}
                        onClick={() => NavigationUtils.navigateTo(this.props.navigate, '/', {scrollTo: 'contact'})}
                    >
                        <h2>יצירת קשר</h2>
                    </button>
                    <button
                        className={"products"}
                        onClick={() => NavigationUtils.navigateTo(this.props.navigate, '/products')}
                    >
                        <h2>המוצרים שלנו</h2>
                    </button>

                    <a href="https://www.instagram.com/avizaurov_barbershop?igsh=cnRhM3Rub3pxamli"
                       className={"instagram"}
                       target={"_blank"}
                       rel={"noopener noreferrer"}>
                    </a>

                    <a href="https://wa.me/972527455035"
                       className={"whatsapp"}
                       target={"_blank"}
                       rel={"noopener noreferrer"}>
                    </a>
                </div>

                <div className="bg1">
                    <video className={"video-bg"} autoPlay muted loop id={"background-video"}>
                        <source src={aviBg} type={"video/mp4"}/>
                    </video>

                    <a href="https://wa.me/972527455035" id={"firstButton"} target={"_blank"}
                       rel={"noopener noreferrer"}>
                        <h1>לקביעת תור</h1>
                    </a>
                </div>

                <div className={"secondScreen"}>
                    <h1>ברוכים הבאים למספרה של אבי</h1>
                    <div className={"avi-1"}/>
                    <div className={"images-row"}>
                        <div className={"avi-2"}/>
                        <div className={"avi-3"}/>
                    </div>
                </div>

                <div className={"thirdScreen"} ref={this.thirdScreenRef}>
                    <h1 id={"gallery-text"}>גלריה</h1>
                    <div><Gallery> </Gallery></div>
                </div>

                <div className={"fourScreen"} ref={this.fourthScreenRef}>
                    <a href="/" onClick={(e) => {
                        this.props.navigate('/');
                    }}>
                        <div className={"logo-1"}></div>
                    </a>
                    <div class="text-container">
                        <div id={"text-1"}> אבי - 052-7455035</div>
                        <div id={"text-2"}> מבצע יהונתן 3, רמלה</div>
                    </div>

                    <div className={"logoim"}>
                        <a href="https://www.instagram.com/avizaurov_barbershop?igsh=cnRhM3Rub3pxamli" id={"instagram-2"} target={"_blank"} rel={"noopener noreferrer"}></a>
                        <a href="https://wa.me/972527455035" id={"whatsapp-2"} target={"_blank"} rel={"noopener noreferrer"}></a>
                    </div>
                    <div className={"map-container"}>
                        <iframe id={"map"}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3386.287571813214!2d34.85724082491397!3d31.925949026993152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502b606fd7fd411%3A0x74d121ad2c424bad!2z157Xkdem16Ig15nXlNeV16DXqtefIDMsINeo157XnNeU!5e0!3m2!1siw!2sil!4v1728160820674!5m2!1siw!2sil"
                            width="250"
                            height="200"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        );
    }
}

export default withNavigation(HomePage);
