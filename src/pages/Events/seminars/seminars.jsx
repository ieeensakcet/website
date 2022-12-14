import React, { useState, useEffect } from 'react'
import { db } from '../../../utils/firebase/firebase'
import {getDocs, collection } from 'firebase/firestore'
import EventsCard from '../../../components/eventsCard/eventsCard'
import Loader from '../../../components/loader/Loader'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Seminars = () => {
    const [seminarsData, setSeminarsData] = useState([])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smoothly scrolling
        });
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        const getData = async () => {
            const csSeminars = (await getDocs(collection(db, "eventsInfo/csevents/seminars")))
            // const casSeminars = (await getDocs(collection(db, "eventsInfo/casevents/seminars")))
            // const rasSeminars = (await getDocs(collection(db, "eventsInfo/rasevents/seminars")))
            const spsSeminars = (await getDocs(collection(db, "eventsInfo/spsevents/seminars")))
            const wieSeminars = (await getDocs(collection(db, "eventsInfo/wievents/seminars")))


            csSeminars.docs.map((doc) => {
               return setSeminarsData((prev) => [...prev, doc.data()])
            })
            spsSeminars.docs.map((doc) => {
               return setSeminarsData((prev) => [...prev, doc.data()])
            })
            // casSeminars.docs.map((doc) => {
            //     setSeminarsData((prev) => [...prev, doc.data()])
            // })
            // casSeminars.docs.map((doc) => {
            //     setSeminarsData((prev) => [...prev, doc.data()])
            // })
            wieSeminars.docs.map((doc) => {
               return setSeminarsData((prev) => [...prev, doc.data()])
            })

        }

        getData();
    }, [])
    // console.log(webinarsData)

    return (
        <section className="white-bg">
            {
                seminarsData.length > 0 ? (
                    <div className="container">
                        <div className="row xl-display-none">
                            <div className="col-md-6 col-sm-2 col-xs-12 blog-style-01">
                                {


                                    seminarsData.sort(((a, b) => {
                                        return new Date(b.date) - new Date(a.date)
                                    }
                                    )).map((webinar) => {
                                        const dataLength = seminarsData.length
                                        // console.log("webinar", webinar)
                                        return (
                                            <EventsCard
                                                Data={webinar}
                                                key={Math.random()}
                                                dataLength={dataLength}
                                            />
                                        )
                                    }
                                    )
                                }
                            </div>
                        </div>
                        <div className='sm-display-none' style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(2, 1fr)",
                            gridGap: "1rem"

                        }}>
                            {
                                seminarsData.map((webinar) => {
                                    // console.log("webinar", webinar)
                                    return (
                                        <EventsCard
                                            Data={webinar}
                                            key={Math.random()}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                ) : <Loader />
            }
            <p onClick={scrollToTop} id="return-to-top"><i className="icofont icofont-arrow-up pointer"><ArrowUpwardIcon /></i></p>
        </section>
    )
}

export default Seminars