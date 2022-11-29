import React, { useState, useEffect } from 'react'
import { db } from '../../utils/firebase/firebase'
import { doc, getDocs, collection } from 'firebase/firestore'
import EventsCard from '../../components/eventsCard/eventsCard'
import "./seminars.css"
import Loader from '../../components/loader/Loader'

const Seminars = () => {
    const [webinarsData, setWebinarsData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const csWebinars = (await getDocs(collection(db, "eventsInfo/csevents/seminars")))
            const casWebinars = (await getDocs(collection(db, "eventsInfo/casevents/seminars")))
            const rasWebinars = (await getDocs(collection(db, "eventsInfo/rasevents/seminars")))
            const spsWebinars = (await getDocs(collection(db, "eventsInfo/spsevents/seminars")))
            const wieWebinars = (await getDocs(collection(db, "eventsInfo/wievents/seminars")))


            csWebinars.docs.map((doc) => {
                setWebinarsData((prev) => [...prev, doc.data()])
            })
            // spsWebinars.docs.map((doc) => {
            //     setWebinarsData((prev) => [...prev, doc.data()])
            // })
            rasWebinars.docs.map((doc) => {
                setWebinarsData((prev) => [...prev, doc.data()])
            })
            wieWebinars.docs.map((doc) => {
                setWebinarsData((prev) => [...prev, doc.data()])
            })
        }
        getData();
    }, [])
    // console.log(webinarsData)

    return (
        <section class="white-bg">
            {
                webinarsData.length > 0 ? (
                    <div class="container">
                        <div className="row xl-display">
                            <div class="col-md-6 col-sm-2 col-xs-12 blog-style-01">
                                {


                                    webinarsData.map((webinar) => {
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
                                webinarsData.map((webinar) => {
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
        </section>
    )
}

export default Seminars