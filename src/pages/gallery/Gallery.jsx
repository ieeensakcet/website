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
            id: 0,
            imgSrc: "https://ik.imagekit.io/ieeensakcet/Galleria/tr:w-1344/20221219_144131_hM-tQm_dqO.jpg"
        },
        {
            id: 1,
            imgSrc: "https://ik.imagekit.io/ieeensakcet/Galleria/tr:w-1748/IMG_883643_dgpNmzf-U"
        },
        {
            id: 2,
            imgSrc: "https://ik.imagekit.io/ieeensakcet/Galleria/tr:w-1369/gp_zxHu3kC9e_zEotmeVQF.jpg"
        },
        {
            id: 16,
            imgSrc: "https://ik.imagekit.io/ieeensakcet/Galleria/tr:w-1728/IMG_0711_T-WuRuFp-_.jpg"
        },
        {
            id: 4,
            imgSrc: "https://ik.imagekit.io/ieeensakcet/Galleria/tr:w-1546/IMG_20221018_HQ0uBLLoLt.jpg"
        },

        {
            id: 10,
            imgSrc: "https://ik.imagekit.io/ieeensakcet/Galleria/tr:w-1728/IMG_9201_bIyqE_os81.jpg"
        },
        {
            id: 3,
            imgSrc: "https://ik.imagekit.io/ieeensakcet/Galleria/tr:w-1344/IMG_0764_q6r988AHa.jpg"
        },
        {
            id: 6,
            imgSrc: "https://ik.imagekit.io/ieeensakcet/Galleria/IMG-20220404_nkeXlVvNp1.jpg"
        },
        {
            id: 7,
            imgSrc: "https://ik.imagekit.io/ieeensakcet/Galleria/IMG_6534_zHcAwKuAM.jpg"
        },
        {
            id: 5,
            imgSrc: "https://ik.imagekit.io/ieeensakcet/Galleria/tr:w-1512/IMG_0697_xQ0EBxnU8.jpg"
        },

        {
            id: 12,
            imgSrc: "https://ik.imagekit.io/ieeensakcet/Galleria/tr:w-1512/IMG_1187_J8QveIBZHb.jpg"
        },
        {
            id: 11,
            imgSrc: "https://ik.imagekit.io/ieeensakcet/Galleria/Seminar_1_6lJqoA5OM.webp"
        },
        {
            id: 8,
            imgSrc: "https://ik.imagekit.io/ieeensakcet/Galleria/tr:w-1728/IMG_0563_VHzI_eXR4y.JPG"
        },
        {
            id: 9,
            imgSrc: "https://ik.imagekit.io/ieeensakcet/Galleria/tr:w-1728/IMG_9218_m4yVmNcb_.webp"
        },
         {
            id: 13,
            imgSrc: "https://ik.imagekit.io/ieeensakcet/Galleria/tr:w-1728/IMG_0805_cZda9J4U7n.JPG"
        },
        {
            id: 14,
            imgSrc: "https://ik.imagekit.io/ieeensakcet/Galleria/tr:w-1512/IMG_0779_YnPLCgXOa.jpg"
        },
        {
            id: 15,
            imgSrc: "https://ik.imagekit.io/ieeensakcet/Galleria/tr:w-1344/IMG_0703_2_QjIoRMN8u.jpg"
        },
        {
            id: 17,
            imgSrc: "https://ik.imagekit.io/ieeensakcet/Galleria/tr:w-2000/20221216_152139_iY3PL07t1.jpg"
        }
    ]
    const [modal, setModal] = useState(false);
    const [tempingSrc, setTempingSrc] = useState();
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                setModal(false);
            }
        };
        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);
    const getImg = (imgSrc) => {
        setTempingSrc(imgSrc);
        setModal(true);
    }
    return (
        <div>
            {loading ? <Loader /> : null}
                <div>
                <section className="white-bg pt-0">
                    <section className="fixed-bg sm-display-none" style={{
                        backgroundImage: `url(https://ik.imagekit.io/ieeensakcet/tr:w-1728/ieeeCarousel1_2fpv07wqk.JPG)`,
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
                                                    <h1 className="font-700 font-80px line-height-100 white-color xs-font-30px xs-line-height-30">Galleria</h1>
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
                                        src={"https://ik.imagekit.io/ieeensakcet/tr-w:1482/ieeeCarousel1_2fpv07wqk.JPG"}
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
                            }}>Galleria</h5>
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

                                        const removeLoader = () => {
                                            if (index === data.length - 1) {
                                                setLoading(false)
                                            }
                                        }

                                        return (
                                            <div className='pics' key={index} onClick={() => getImg(item.imgSrc)} >
                                                <img src={item.imgSrc} style={{ width: '100%' }} alt="" onLoad={()=> removeLoader()} />
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
                </div> 
            <p onClick={scrollToTop} id="return-to-top"><i className="icofont icofont-arrow-up pointer"><ArrowUpwardIcon /></i></p>
        </div>
    )
}

export default Gallery
