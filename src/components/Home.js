import { Link } from 'react-router-dom';
import { useEffect, useState} from 'react';
import Carousel from "./Carousel";
import React from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, 
            display: "block",
            background: "rgba(255, 100, 0, 0.288)",
            left: "1379px", 
            right: "100px",
            top: "464px", 
            zIndex: "10",
            height: "44px",
            width: "44px",
            borderRadius: "50%"
        }}
        onClick={onClick}
      />
    );
  }
  
function SamplePrevArrow(props) {
const { className, style, onClick } = props;
return (
    <div
    className={className}
    style={{ ...style, 
        display: "block", 
        background: "rgba(255, 0, 0, 0.288)", 
        left: "1283px", 
        top: "464px", 
        zIndex: "10",
        height: "44px",
        width: "44px",
        borderRadius: "50%"
    }}
    onClick={onClick}
    />
);
}

function SampleNextArrowCard(props) {
    const { className, style, onClick } = props;
    // useEffect(() => {
    //     setInterval(onClick, 10000)
    // },[])
    return (
      <div
        className={className}
        style={{ ...style, 
            display: "flex",
            position: "relative",
            zIndex: "10",
            height: "41px",
            width: "41px",
            borderRadius: "50%",
            border: "0.8px solid rgb(225, 228, 232)",
        }}
        onClick={onClick}
      >
    <i className='bx bx-chevron-right' style={{color: '#222222'}} ></i>
    </div>
    );
  }
  
function SamplePrevArrowCard(props) {
const { className, style, onClick } = props;
return (
    <div
    className={className}
    style={{ ...style, 
        display: "flex", 
        position: "relative",
        zIndex: "10",
        height: "41px",
        width: "41px",
        fontSize: "41px",
        border: "0.8px solid rgb(225, 228, 232)",
        borderRadius: "50%"
    }}
    onClick={onClick}
    >
    <i className='bx bx-chevron-left' style={{color: '#222222'}}></i>
    </div>
);
}
 
 
const Home = () => {
    const [ slides, setSlides] = useState([
        {
          'order': 1,
          'title': 'Qeydiyyat',
          'text': 'Portalın geniş imkanlarından istifadə etmək üçün qeydiyyatdan keçin',
          'withButton': true
        },
        {
          'order': 2,
          'title': 'Ağsu Rayon İcra Hakimiyyəti',
          'text': 'Ağsu Rayon İcra Hakimiyyətində növbəti vətəndaş qəbulu keçirilib',
          'date': '02.05.2023',
          'withButton': false
        },
        {
          'order': 3,
          'title': 'Mingəçevir Şəhər İcra Hakimiyyəti',
          'text': `Ulu öndər Heydər Əliyevin 100 illik yubileyi ilə bağlı olaraq “AzərEnerji”, Mingəçevirdəki “Azərbaycan” İES-də    geniş tədbir keçirib.`,
          'date': '02.05.2023 ',
          'withButton': false
        },
        {
          'order': 4,
          'title': 'Mingəçevir Şəhər İcra Hakimiyyəti',
          'text': 'Ulu öndər Heydər Əliyevin anadan olmasının 100 illiyinə həsr olunmuş  “Azərbaycanın Dövlət Müstəqilliyi əbədidir, sarsılmazdır, dönməzdir” mövzusunda konfrans keçirilmişdir.',
          'date': '02.05.2023 ',
          'withButton': false
        },
        {
          'order': 5,
          'title': 'Yasamal Rayon İcra Hakimiyyəti',
          'text': 'Ulu Öndərin 100 illiyi Yasamal rayonunda silsilə tədbirlərlə geniş qeyd olunur',
          'date': '02.05.2023 ',
          'withButton': false
        },
        {
          'order': 6,
          'title': 'Mingəçevir Şəhər İcra Hakimiyyəti',
          'text': `"Azərbaycanın dövlət müstəqilliyi əbədidir, sarsılmazdır, dönməzdir!"  mövzusunda konfrans keçirilmişdir.`,
          'date': '02.05.2023 ',
          'withButton': false
        }
      ]);

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    const cardSettings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        
        nextArrow: <SampleNextArrowCard />,
        prevArrow: <SamplePrevArrowCard />,
        responsive: [
            {
            breakpoint: 1240,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 1040,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
            }
            },
            {
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
    };

  return (
    <>
        <section id="carousel">
            {/* <div className="carousel-container">
                <div className="slides">
                    <Slider {...settings}>
                        <div className="slide slide-1">
                            <div className="slide-content">
                                <div className="slide-left">
                                    <h4>
                                        Portalın geniş imkanlarından istifadə etmək üçün qeydiyyatdan keçin
                                    </h4>
                                    <div className="register-button">
                                        <a href="">Qeydiyyat</a>
                                    </div>
                                </div>
                                <div className="slide-controls">
                                    <div className="next-prev-button">
                                        <i className='bx bx-chevron-left'></i>
                                    </div>
                                    <span className="slide-counter">1/6</span>
                                    <div className="next-prev-button">
                                        <i className='bx bx-chevron-right'></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide slide-2">
                            <span className="blur-bg"></span>
                            <div className="slide-content">
                                <div className="slide-left">
                                    <div className="village-button">
                                        <a href="">Ağsu Rayon İcra Hakimiyyəti</a>
                                    </div>
                                    <h4>
                                        Ağsu Rayon İcra Hakimiyyətində növbəti vətəndaş qəbulu keçirilib
                                    </h4>
                                    <span className="carousel-date">
                                        <i className='bx bxs-calendar' style={{color: '#ffffff'}}></i>
                                        02.05.2023
                                    </span>
                                </div>
                                <div className="slide-controls">
                                    <div className="next-prev-button">
                                        <i className='bx bx-chevron-left'></i>
                                    </div>
                                    <span className="slide-counter">2/6</span>
                                    <div className="next-prev-button">
                                        <i className='bx bx-chevron-right'></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide slide-3">
                            <span className="blur-bg"></span>
                            <div className="slide-content">
                                <div className="slide-left">
                                    <div className="village-button">
                                        <a href="">Mingəçevir Şəhər İcra Hakimiyyəti</a>
                                    </div>
                                    <h4>
                                        Ulu öndər Heydər Əliyevin 100 illik yubileyi ilə bağlı olaraq “AzərEnerji”, Mingəçevirdəki “Azərbaycan” İES-də    geniş tədbir keçirib.
                                    </h4>
                                    <span className="carousel-date">
                                        <i className='bx bxs-calendar' style={{color: '#ffffff'}}  ></i>
                                        02.05.2023 
                                    </span>
                                </div>
                                <div className="slide-controls">
                                    <div className="next-prev-button">
                                        <i className='bx bx-chevron-left'></i>
                                    </div>
                                    <span className="slide-counter">3/6</span>
                                    <div className="next-prev-button">
                                        <i className='bx bx-chevron-right'></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide slide-4">
                            <span className="blur-bg"></span>
                            <div className="slide-content">
                                <div className="slide-left">
                                    <div className="village-button">
                                        <a href="">Mingəçevir Şəhər İcra Hakimiyyəti</a>
                                    </div>
                                    <h4>
                                        Ulu öndər Heydər Əliyevin anadan olmasının 100 illiyinə həsr olunmuş  “Azərbaycanın Dövlət Müstəqilliyi əbədidir, sarsılmazdır, dönməzdir” mövzusunda konfrans keçirilmişdir.
                                    </h4>
                                    <span className="carousel-date">
                                        <i className='bx bxs-calendar' style={{color: '#ffffff'}}  ></i>
                                        02.05.2023 
                                    </span>
                                </div>
                                <div className="slide-controls">
                                    <div className="next-prev-button">
                                        <i className='bx bx-chevron-left'></i>
                                    </div>
                                    <span className="slide-counter">4/6</span>
                                    <div className="next-prev-button">
                                        <i className='bx bx-chevron-right'></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide slide-5">
                            <span className="blur-bg"></span>
                            <div className="slide-content">
                                <div className="slide-left">
                                    <div className="village-button">
                                        <a href="">Yasamal Rayon İcra Hakimiyyəti</a>
                                    </div>
                                    <h4>
                                        Ulu Öndərin 100 illiyi Yasamal rayonunda silsilə tədbirlərlə geniş qeyd olunur
                                    </h4>
                                    <span className="carousel-date">
                                        <i className='bx bxs-calendar' style={{color: '#ffffff'}}  ></i>
                                        02.05.2023 
                                    </span>
                                </div>
                                <div className="slide-controls">
                                    <div className="next-prev-button">
                                        <i className='bx bx-chevron-left'></i>
                                    </div>
                                    <span className="slide-counter">5/6</span>
                                    <div className="next-prev-button">
                                        <i className='bx bx-chevron-right'></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide slide-6">
                            <span className="blur-bg"></span>
                            <div className="slide-content">
                                <div className="slide-left">
                                    <div className="village-button">
                                        <a href="">Mingəçevir Şəhər İcra Hakimiyyəti</a>
                                    </div>
                                    <h4>
                                        "Azərbaycanın dövlət müstəqilliyi əbədidir, sarsılmazdır, dönməzdir!"  mövzusunda konfrans keçirilmişdir.  
                                    </h4>
                                    <span className="carousel-date">
                                        <i className='bx bxs-calendar' style={{color: '#ffffff'}}  ></i>
                                        02.05.2023 
                                    </span>
                                </div>
                                <div className="slide-controls">
                                    <div className="next-prev-button">
                                        <i className='bx bx-chevron-left'></i>
                                    </div>
                                    <span className="slide-counter">6/6</span>
                                    <div className="next-prev-button">
                                        <i className='bx bx-chevron-right'></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                    
                </div>
            </div> */}
            < Carousel slides={slides}/>
        </section>
        <section id="directions">
            <div className="directions">
                <div className="row">
                    <div className="col">
                        <div className="icon-box" style={{border: "1.6px solid #ee347e"}}>
                            <i className='bx bx-group' style={{color: '#ee347e'}}  ></i>
                        </div>
                        <h5 className="title-sm mt-4">Vətəndaş qəbulu
                            <i className='bx bx-right-arrow-alt'></i>
                        </h5>
                        <p>
                            Vətəndaş qəbulunun elektron müraciət keçidi
                        </p>
                    </div>
                    <div className="col">
                        <div className="icon-box" style={{border: "1.6px solid #3971f9"}}>
                            <i className='bx bx-heart-circle' style={{color: '#3971f9'}}  ></i>
                        </div>
                        <h5 className="title-sm mt-4">Xidmətlər 
                            <i className='bx bx-right-arrow-alt'></i>
                        </h5>
                        <p>
                            İcra hakimiyyəti tərəfindən göstərilən elektron xidmətlərə keçid
                        </p>
                    </div>
                    <div className="col">
                        <div className="icon-box" style={{border: "1.6px solid #f67e27"}}>
                            <i className='bx bxs-user-plus' style={{color: '#f67e27'}}  ></i>
                        </div>
                        <h5 className="title-sm mt-4">E-iştirakçılıq 
                            <i className='bx bx-right-arrow-alt'></i>
                        </h5>
                        <p>
                            Yerli icra hakimiyyəti orqanı və vətəndaşlar tərəfindən sorğulara keçid
                        </p>
                    </div>
                    <div className="col">
                        <div className="icon-box" style={{border: "1.6px solid #2ec18b"}}>
                            <i className='bx bxs-info-circle' style={{color: '#2ec18b'}}  ></i>
                        </div>
                        <h5 className="title-sm mt-4">Məlumatlandırma 
                            <i className='bx bx-right-arrow-alt'></i>
                        </h5>
                        <p>
                            Yerli icra hakimiyyəti tərəfindən görülən işlər haqqında məlumatlandırmaya keçid
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section id="services">
            <div className="services">
                <h4>Populyar xidmətlər</h4>
                <div className="row">
                    <div className="col">
                        <i className='bx bxs-info-circle' style={{color: '#3971f9'}}  ></i>
                        <p>
                            Vətəndaşlara ailə vəziyyətini təsdiq edən arayışlar və digər arayışların verilməsi
                        </p>
                    </div>
                    <div className="col">
                        <i className='bx bxs-building' style={{color: '#2ec18b'}}></i>
                        <p>
                            Yaşayış sahəsinə ehtiyac olan qismində vətəndaşların uçota alınması
                        </p>
                    </div>
                    <div className="col">
                        <i className='bx bxs-buildings' style={{color: '#ee347e'}} ></i>
                        <p>
                            Uşağın adının və soyadının dəyişdirilməsinə icazə verilməsi
                        </p>
                    </div>
                    <div className="col">
                        <i className='bx bxs-user-check' style={{color: '#f67e27'}}></i>
                        <p>
                            Yetkinlik yaşına çatmayan şəxsin mülkiyyətində olan daşınar və daşınmaz əmlakın üzərində notarial hərəkətlərin aparılmasına dair razılığın verilməsi
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section id="statistics">
            <div className="statistics">
                <h4>Statistika</h4>
                <div className="row">
                    <div className="col">
                        <div className="icon-box">
                            <i className='bx bxs-user-check' style={{color: '#b0b7c3'}}  ></i>
                        </div>
                        <div className="statistics-info">
                            <h5 className="title-sm mt-4">
                                İstifadəçi sayı
                            </h5>
                            <p>
                                202576
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="icon-box">
                            <i className='bx bxs-bank' style={{color: '#b0b7c3'}}></i>
                        </div>
                        <div className="statistics-info">
                            <h5 className="title-sm mt-4">
                                Qurum sayı
                            </h5>
                            <p>77</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="icon-box">
                            <i className='bx bx-support' style={{color: '#b0b7c3'}}></i>
                        </div>
                        <div className="statistics-info">
                            <h5 className="title-sm mt-4">
                                Müraciət sayı
                            </h5>
                            <p>126898</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="card-carousel">
            <Slider {...cardSettings}>
                <div className="card">
                    <Link to="" className="card-link">
                        <div className="card-link-inside">
                            <img src="img/logo/card1.svg" alt="" className="card-img" />
                        </div>
                    </Link>
                </div>
                <div className="card">
                    <Link to="" className="card-link">
                        <div className="card-link-inside">
                            <img src="img/logo/card2.svg" alt="" className="card-img" />
                        </div>
                    </Link>
                </div>
                <div className="card">
                    <Link to="" className="card-link">
                        <div className="card-link-inside">
                            <img src="img/logo/card3.svg" alt="" className="card-img" />
                        </div>
                    </Link>
                </div>
                <div className="card">
                    <Link to="" className="card-link">
                        <div className="card-link-inside">
                            <img src="img/logo/iria.png" alt="" className="card-img" />
                        </div>
                    </Link>
                </div>
                <div className="card">
                    <Link to="" className="card-link">
                        <div className="card-link-inside">
                            <img src="img/logo/card5.svg" alt="" className="card-img" />
                        </div>
                    </Link>
                </div>
                <div className="card">
                    <Link to="" className="card-link">
                        <div className="card-link-inside">
                            <img src="img/logo/card6.svg" alt="" className="card-img" />
                        </div>
                    </Link>
                </div>
            </Slider>
        </section>
    </>
  )
}

export default Home