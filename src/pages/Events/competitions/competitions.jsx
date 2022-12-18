import React, { useState, useEffect } from 'react'
import { db } from '../../../utils/firebase/firebase'
import { getDocs, collection } from 'firebase/firestore'
import EventsCard from '../../../components/eventsCard/eventsCard'
import Loader from '../../../components/loader/Loader'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Competitions = () => {
    const [competitionsData, setCompetitionsData] = useState([])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smoothly scrolling
        });
    };
    useEffect(() => {
        window.scrollTo(0, 0);
        const getData = async () => {
            const csCompetitions = (await getDocs(collection(db, "eventsInfo/csevents/competitions")))
            // const casCompetitions = (await getDocs(collection(db, "eventsInfo/casevents/competitions")))
            // const rasCompetitions = (await getDocs(collection(db, "eventsInfo/rasevents/competitions")))
            // const spsCompetitions = (await getDocs(collection(db, "eventsInfo/spsevents/competitions")))
            const wieCompetitions = (await getDocs(collection(db, "eventsInfo/wievents/competitions")))


            csCompetitions.docs.map((doc) => {
               return setCompetitionsData((prev) => [...prev, doc.data()])
            })
            wieCompetitions.docs.map((doc) => {
               return setCompetitionsData((prev) => [...prev, doc.data()])
            })
        }
        getData();
    }, [])
    // console.log(webinarsData)

    return (
        <section className="white-bg">
            {
                competitionsData.length > 0 ? (
                    <div className="container">
                        <div className="row xl-display-none">
                            <div className="col-md-6 col-sm-2 col-xs-12 blog-style-01">
                                {


                                    competitionsData.sort(((a, b) => {
                                        return new Date(b.date) - new Date(a.date)
                                    }
                                    )).map((webinar) => {
                                        // console.log("webinar", webinar)
                                        return (
                                            <EventsCard
                                                Data={webinar}
                                                key={Math.random()}
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
                                competitionsData.map((webinar) => {
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

export default Competitions