import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Carousel = ( { slides } ) => {
    const [ currentIndex, setCurrentIndex ] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }
    const goToNext = () => {
        const isFirstSlide = currentIndex === slides.length - 1;
        const newIndex = isFirstSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }
    return (
        <div className="carousel-container">
                <div className="slides">
                    <div className={`slide slide-${slides[currentIndex].order}`} key={slides[currentIndex].order}>
                        { slides[currentIndex].withButton ? '' : <span className="blur-bg"></span> }
                        <div className="slide-content">
                            <div className="slide-left">
                                { slides[currentIndex].withButton 
                                    ? <>
                                        <h4>
                                            {slides[currentIndex].text}
                                        </h4>
                                        <div className="register-button">
                                            <Link to="">{slides[currentIndex].title}</Link>
                                        </div>
                                        </>
                                    : <>
                                        <div className="village-button">
                                            <Link to="">{slides[currentIndex].title}</Link>
                                        </div>
                                        <h4>
                                            {slides[currentIndex].text}
                                        </h4>
                                        <span className="carousel-date">
                                            <i className='bx bxs-calendar' style={{color:'#ffffff'}}  ></i>
                                                {slides[currentIndex].date}
                                        </span>
                                        </>
                                }
                            </div>
                            <div className="slide-controls">
                                <div className="next-prev-button" onClick={goToPrevious}>
                                    <i className='bx bx-chevron-left'></i>
                                </div>
                                <span className="slide-counter">{slides[currentIndex].order}/6</span>
                                <div className="next-prev-button" onClick={goToNext}>
                                    <i className='bx bx-chevron-right'></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
  }
export default Carousel