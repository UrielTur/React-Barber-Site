import React from 'react';
import { useEffect } from 'react';
import ProductCard from './ProductCard';  // החיבור לקומפוננטת כרטיס המוצר
import textureVolumeImage from './Images/texture-volume-1.jpeg';
import waxNishMan from './Images/wax-nish-man.jpg';
import afterShaveNishMan from './Images/after-shave-nish-man.jpg';
import beardOil from './Images/beard-oil.jpg';
import saltSpray from './Images/salt-spray.jpg';
import kemeiFinish from './Images/kemei-2299.jpg';
import jrlClipper from './Images/jrl-clipper.jpg';
import redOne from './Images/redOne-wax.png';
import NavigationUtils from './NavigationUtils';
import {useNavigate} from "react-router-dom";




function withNavigation(Component) {
    return function WrappedComponent(props) {
        const navigate = useNavigate(); // שימוש ב-useNavigate כדי לספק את פונקציית הניווט
        return <Component {...props} navigate={navigate} />;
    };
}



class HairProducts extends React.Component {



    constructor(props) {
        super(props);
        this.thirdScreenRef = React.createRef();
        this.fourthScreenRef = React.createRef();
    }


    componentDidMount() {
        window.scrollTo(0, 0); // גולל אוטומטית לראש העמוד כאשר דף ה-products נטען
    }



    getProductsList = () => {

        return [
            {
                onSale: false,
                image: textureVolumeImage,
                name: "אבקת נפח לשיער",
                originalPrice: 80.00,
                discountedPrice: 60.00
            },
            {
                onSale: false,
                image: waxNishMan,
                name: "ווקס לשיער",
                originalPrice: 100.00,
                discountedPrice: 80.00
            },
            {
                onSale: false,
                image: beardOil,
                name: "שמן לזקן",
                originalPrice: 70.00,
                discountedPrice: 50.00
            },
            {
                onSale: false,
                image: saltSpray,
                name: "ספריי מלח לשיער",
                originalPrice: 60.00,
                discountedPrice: 40.00
            },
            {
                onSale: false,
                image: redOne,
                name: "ווקס חימר לשיער",
                originalPrice: 80.00,
                discountedPrice: 60.00
            },
            {
                onSale: false,
                image: afterShaveNishMan,
                name: "אפטר שייב",
                originalPrice: 60.00,
                discountedPrice: 40.00
            },
            {
                onSale: true,
                image: jrlClipper,
                name: "JRL - מכונת תספורת מקצועית",
                originalPrice: 750.00,
                discountedPrice: 680.00
            },
            {
                onSale: true,
                image: kemeiFinish,
                name: "Kemei - מכונת פיניש מקצועית",
                originalPrice: 250.00,
                discountedPrice: 200.00
            }

        ];
    }



    render() {
        const products = this.getProductsList();

        return (
            <div>
                <div className={"panel"}>
                    <a href="/" onClick={(e) => {
                        this.props.navigate('/'); // נווט לעמוד הבית בלי state
                    }}>
                        <image className={"logo"}/>
                    </a>
                    <button
                        className={"gallery"}
                        onClick={() => NavigationUtils.navigateTo(this.props.navigate, '/', {scrollTo: 'gallery'})}>
                        <h2>גלריה</h2>
                    </button>
                    <button
                        className={"contact"}
                        onClick={() => NavigationUtils.navigateTo(this.props.navigate, '/', {scrollTo: 'contact'})}>
                        <h2>יצירת קשר</h2>
                    </button>

                    <button
                        className={"products"}
                        onClick={() => NavigationUtils.navigateTo(this.props.navigate, '/products')}>
                        <h2>המוצרים שלנו</h2>
                    </button>

                    <a href="https://www.instagram.com/avizaurov_barbershop?igsh=cnRhM3Rub3pxamli"
                       className={"instagram"} target={"_blank"} rel={"noopener noreferrer"}></a>
                    <a href="https://wa.me/972527455035" className={"whatsapp"} target={"_blank"}
                       rel={"noopener noreferrer"}></a>
                </div>

                <div className={"products-list"} style={{paddingTop: '140px', marginLeft: '20px'}}>
                    {products.map((product, index) => (
                        <ProductCard
                            key={index}
                            onSale={product.onSale}
                            image={product.image}
                            name={product.name}
                            description={product.description}
                            originalPrice={product.originalPrice}
                            discountedPrice={product.discountedPrice}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default withNavigation(HairProducts);
