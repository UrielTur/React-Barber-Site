import React, { useState, useEffect } from "react";
import "./Gallery.css"; // מייבא את ה-CSS

const galleryImages = [
    "image-1",
    "image-2",
    "image-3",
    "image-4",
    "image-5",
    "image-6",
    "image-7",
];

const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // קרא לפונקציה פעם אחת בתחילה

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => {
            let nextIndex = prevIndex + 1;
            if (isMobile && nextIndex === 2) {
                nextIndex = 3; // דלג על התמונה השלישית
            }
            return nextIndex >= galleryImages.length ? 0 : nextIndex;
        });
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => {
            let prevIndexNew = prevIndex - 1;
            if (isMobile && prevIndexNew === 2) {
                prevIndexNew = 1; // דלג על התמונה השלישית
            }
            return prevIndexNew < 0 ? galleryImages.length - 1 : prevIndexNew;
        });
    };


    /*////////////////////////////////////////////////////////////////////////////////////////////////////////*/


    return (
        <div className="carousel-container">
            <button className="prev-button" onClick={prevImage}>
                &lt;
            </button>
            <div className={`image-container ${galleryImages[currentIndex]}`} />
            <button className="next-button" onClick={nextImage}>
                &gt;
            </button>
        </div>
    );
};

export default Gallery;
