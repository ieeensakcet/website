import React, { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import './Gallery.css';
import Loader from "../../components/loader/Loader";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


function Gallery() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smoothly scrolling
        });
    };
    let data = [
        {
            id: 1,
            imgSrc: "https://ik.imagekit.io/invincible/gallery/gp_zxHu3kC9e"
        },
        {
            id: 2,
            imgSrc: "https://ik.imagekit.io/invincible/gallery/IMG_0711.JPG"
        },
        {
            id: 4,
            imgSrc: "https://ik.imagekit.io/invincible/gallery/IMG_20221018_121247.jpg"
        },

        {
            id: 10,
            imgSrc: "https://ik.imagekit.io/invincible/gallery/IMG_9201.JPG"
        },
        {
            id: 3,
            imgSrc: "https://ik.imagekit.io/invincible/gallery/IMG_0764.png"
        },
        {
            id: 6,
            imgSrc: "https://ik.imagekit.io/invincible/gallery/IMG-20220404-WA0070.jpg"
        },
        {
            id: 7,
            imgSrc: "https://ik.imagekit.io/invincible/gallery/PHOTO-2022-06-15-11-40-00.jpg"
        },
        {
            id: 5,
            imgSrc: "https://ik.imagekit.io/invincible/gallery/IMG_0804.png"
        },

        {
            id: 12,
            imgSrc: "https://ik.imagekit.io/invincible/gallery/IMG_0857.png"
        },
        {
            id: 11,
            imgSrc: "https://ik.imagekit.io/invincible/Seminar_1.jpg"
        },
        {
            id: 8,
            imgSrc: "https://ik.imagekit.io/invincible/gallery/IMG_0487.JPG?"
        },
        {
            id: 9,
            imgSrc: "https://ik.imagekit.io/invincible/gallery/IMG_9218.JPG"
        },
        
    ]
    const [modal, setModal] = useState(false);
    const [tempingSrc, setTempingSrc] = useState();
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])
    const getImg = (imgSrc) => {
        setTempingSrc(imgSrc);
        setModal(true);
    }
    return (
        <div>
            {
                !loading ?
                <div>
                <section className="white-bg pt-0">
                    <section className="fixed-bg sm-display-none" style={{
                        backgroundImage: `url(https://ik.imagekit.io/ieeensakcet/ieeeCarousel1_2fpv07wqk.JPG)`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                        scrollBehavior: "smooth",
                    }}>
                        <div className="overlay-bg"></div>
                        <div className="container-fluid view-height-100vh relative md-height-600px sm-height-700px xs-height-450px">
                            <div className="simple-content-slider text-center">
                                <div className="simple-content-slider-text">
                                    <div className="simple-content-text-inner">
                                        <div className="row">
                                            <div className="col-md-8 centerize-col col-xs-12">
                                                <div className="text-center all-padding-40">
                                                    <h1 className="font-700 font-80px line-height-100 white-color xs-font-30px xs-line-height-30">Gallery</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="xl-display">
                        <div style={{
                            width: "100%",
                            marginBottom: "0",
                        }}>
                            <div className="row">
                                <div style={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                    alignContent: "center",
                                }}>
                                    <img
                                        className='xl-display'
                                        src={"https://ik.imagekit.io/ieeensakcet/ieeeCarousel1_2fpv07wqk.JPG"}
                                        style={{
                                            backgroundSize: "contain",
                                            backgroundRepeat: "no-repeat",
                                            width: "100%",
                                            marginTop: 0,
                                        }}
                                        alt="landingScreen"
                                    />
                               
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='mt-10' style={{
                        scrollBehavior: "smooth",
                    }}>
                        <div className="col-sm-8 section-heading hii mt-20 xl-display-none">
                            <h5 className="mt-0 text-uppercase primary-h5 play-font pt-0 pb-20 mb-0" style={{
                                fontSize: 40
                            }}>Gallery</h5>
                        </div>
                        <div>
                            <div className='sm-display-none' >
                                <div className={modal ? 'modal open' : 'modal'} >
                                    <img src={tempingSrc} alt="" />
                                    <CloseIcon onClick={() => setModal(false)} />
                                </div>
                            </div>
                            <div className='gallery' >
                                {
                                    data.map((item, index) => {
                                        return (
                                            <div className='pics' key={index} onClick={() => getImg(item.imgSrc)} >
                                                <img src={item.imgSrc} style={{ width: '100%' }} alt="" />
                                            </div>
                                        )
                                    }
                                    )
                                }
                            </div>
                            <p className="text-center mt-80"><a className="btn btn-gradient btn-xl joinUsBtn" href='https://www.instagram.com/ieeensakcet/' >View More</a> </p>
                        </div>
                    </div>
                </section>
                </div> : <Loader/>
            }
            <p onClick={scrollToTop} id="return-to-top"><i className="icofont icofont-arrow-up pointer"><ArrowUpwardIcon /></i></p>
        </div>
    )
}

export default Gallery
