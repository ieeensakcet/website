import React, { useState, useEffect } from 'react'
import { db } from '../../utils/firebase/firebase'
import { doc, getDocs, collection } from 'firebase/firestore'
import EventsCard from '../../components/eventsCard/eventsCard'
import "./competitions.css"
import Loader from '../../components/loader/Loader'

const Competitions = () => {
    const [competitionsData, setCompetitionsData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const csCompetitions = (await getDocs(collection(db, "eventsInfo/csevents/competitions")))
            const casCompetitions = (await getDocs(collection(db, "eventsInfo/casevents/competitions")))
            const rasCompetitions = (await getDocs(collection(db, "eventsInfo/rasevents/competitions")))
            const spsCompetitions = (await getDocs(collection(db, "eventsInfo/spsevents/competitions")))
            const wieCompetitions = (await getDocs(collection(db, "eventsInfo/wievents/competitions")))


            csCompetitions.docs.map((doc) => {
                setCompetitionsData((prev) => [...prev, doc.data()])
            })
            wieCompetitions.docs.map((doc) => {
                setCompetitionsData((prev) => [...prev, doc.data()])
            })
        }
        getData();
    }, [])
    // console.log(webinarsData)

    return (
        <section class="white-bg">
            {
                competitionsData.length > 0 ? (
                    <div class="container">
                        <div className="row xl-display">
                            <div class="col-md-6 col-sm-2 col-xs-12 blog-style-01">
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
        </section>
    )
}

export default Competitions