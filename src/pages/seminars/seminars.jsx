import React, { useState, useEffect } from 'react'
import { db } from '../../utils/firebase/firebase'
import { doc, getDocs, collection } from 'firebase/firestore'
import EventsCard from '../../components/eventsCard/eventsCard'
import "./seminars.css"
import Loader from '../../components/loader/Loader'

const Seminars = () => {
    const [seminarsData, setSeminarsData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const csSeminars = (await getDocs(collection(db, "eventsInfo/csevents/seminars")))
            const casSeminars = (await getDocs(collection(db, "eventsInfo/casevents/seminars")))
            const rasSeminars = (await getDocs(collection(db, "eventsInfo/rasevents/seminars")))
            const spsSeminars = (await getDocs(collection(db, "eventsInfo/spsevents/seminars")))
            const wieSeminars = (await getDocs(collection(db, "eventsInfo/wievents/seminars")))


            csSeminars.docs.map((doc) => {
                setSeminarsData((prev) => [...prev, doc.data()])
            })
            spsSeminars.docs.map((doc) => {
                setSeminarsData((prev) => [...prev, doc.data()])
            })
            // casSeminars.docs.map((doc) => {
            //     setSeminarsData((prev) => [...prev, doc.data()])
            // })
            // casSeminars.docs.map((doc) => {
            //     setSeminarsData((prev) => [...prev, doc.data()])
            // })
            wieSeminars.docs.map((doc) => {
                setSeminarsData((prev) => [...prev, doc.data()])
            })

        }

        getData();
    }, [])
    // console.log(webinarsData)

    return (
        <section class="white-bg">
            {
                seminarsData.length > 0 ? (
                    <div class="container">
                        <div className="row xl-display">
                            <div class="col-md-6 col-sm-2 col-xs-12 blog-style-01">
                                {


                                    seminarsData.sort(((a, b) => {
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
        </section>
    )
}

export default Seminars