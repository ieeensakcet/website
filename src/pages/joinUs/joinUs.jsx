import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./joinUs.css"


function JoinUs() {

    const formRef = useRef(null)
    const scriptUrl = "https://script.google.com/macros/s/AKfycbwlAk6y2T5UwESVXFh1SVnv29gYOZyABA-WlNGQNhTGgVisMwk8xIYyDBBmQcITSaMs4A/exec"
    const navigate = useNavigate();
    

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(scriptUrl, {
            method: 'POST',
            body: new FormData(document.getElementById("formsData"))
        })
            .then(response => {
                formRef.current.reset();
                alert("Thank you for taking the time to fill out the form to join the college club. We are excited to have you become part of the club and look forward to working with you.",
                    "We will get back to you soon. Please check your email for further details.",
                    {
                        buttons: {
                                label: "OK",
                                onClick: () => navigate('/')
                            
                        },
                    }
                )
                navigate('/');
            }
                )
            .catch(error => console.error('Error!', error.message))
    }

    return (
        <section className='white-bg'>
            <section className="fixed-bg sm-display-none" style={{
                backgroundImage: "url(https://ik.imagekit.io/invincible/college_PcjkZfseo)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                marginTop:"-60px"
            }}>
                <div className="overlay-bg"></div>
                <div className="container-fluid view-height-100vh relative md-height-600px sm-height-700px xs-height-450px">
                    <div className="simple-content-slider text-center">
                        <div className="simple-content-slider-text">
                            <div className="simple-content-text-inner">
                                <div className="row">
                                    <div className="col-md-8 centerize-col col-xs-12">
                                        <div className="text-center all-padding-40">
                                            <h1 className="font-700 font-80px line-height-100 white-color xs-font-30px xs-line-height-30">IEEE Student Branch of NSAKCET</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="xl-display white-bg" style={{
                marginTop: "-60px",
            }} >
                <div style={{
                    width: "100%",
                }}>
                    <div class="row">
                        <div style={{
                            justifyContent: "center",
                            alignItems: "center",
                            alignContent: "center",
                        }}>
                            <img
                                className='xl-display'
                                src={"https://ik.imagekit.io/invincible/tr:w-1000,h-500/ieee_group_photo_ut6ryLhep"}
                                style={{
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                    width: "100%",
                                }}
                                alt="SB"
                            />
                            <div style={{
                            }}>
                                <div className="col-sm-8 section-heading hii">
                                    <h5 className="mt-0 text-uppercase primary-h5 font-italic play-font pt-20 mb-0">IEEE Student Branch of NSAKCET</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>  
            <section class="white-bg" style={{
                marginTop: "-60px",
                marginBottom: "-140px",
            }}>
                <div class="container white-bg">
                    <div className="col-md-12 col-sm-8 section-heading" style={{
                        marginTop:"-50px",
                    }}>
                        <h5 className="font-italic italic-h5 pb-20" style={{
                            color: "#000000",
                            fontSize: "30px",
                        }}>Join Us</h5>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <form className="contact-form-style-01" id='formsData' ref={formRef} onSubmit={(e) => handleSubmit(e)} name="google-sheet">
                                <div class="messages"></div>
                                <div class="row">
                                    <div class="col-md-6 col-sm-6">
                                        <div class="form-group">
                                            <label class="sr-only" for="First name">First name</label>
                                            <input type="text" name="First name" class="md-input" id="name" placeholder="First Name *" required data-error="Your Name is Required"/>
                                                <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-6">
                                        <div class="form-group">
                                            <label class="sr-only" for="First name">Last name</label>
                                            <input type="text" name="Last name" class="md-input" id="name" placeholder="Last name *" required data-error="Your Name is Required"/>
                                                <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-6">
                                        <div class="form-group">
                                            <label class="sr-only" for="Date of Birth">Date of Birth</label>
                                            <input type="date" name="Date of Birth" class="md-input" id="subject-2" placeholder="Date of Birth" required />
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-6">
                                        <div class="form-group">
                                            <label class="sr-only" for="Email Address">Email</label>
                                            <input type="email" name="Email Address" class="md-input" id="email" placeholder="Email*" required data-error="Please Enter Valid Email"/>
                                                <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-sm-12">
                                        <div class="form-group">
                                            <label class="sr-only" for="College/University Name">College/University Name</label>
                                            <select name="College/University Name" class="md-input" required>
                                                <option value="Nawab Shah Alam Khan College of Engineering and Technology" selected="selected">Nawab Shah Alam Khan College of Engineering and Technology</option>
                                            </select> 
                                        </div>
                                    </div>
                                    
                                    <div class="col-md-6 col-sm-6 form-group">
                                        <select name="Degree Being Pursued" class="md-input" required>
                                            <option value="Bachelor of Engineering(B.E)" selected="selected">Bachelor of Engineering(B.E)</option>
                                            <option value="Diploma">Diploma</option>
                                        </select> 
                                    </div>
                                    <div class="col-md-6 col-sm-6">
                                        <select name="Branch" class="md-input" required >
                                            <option value="none" disabled selected >Course</option>
                                            <option value="Computer Science and Engineering">Computer Science and Engineering</option>
                                            <option value="Computer Science and Engineering AI/ML">Computer Science and Engineering AI/ML</option>
                                            <option value="Computer Science and Engineering DS">Computer Science and Engineering DS</option>
                                            <option value="Computer Science and Engineering (IOT, CS and BCT)">Computer Science and Engineering (IOT, CS and BCT)</option>
                                            <option value="Information Technology">Information Technology</option>
                                            <option value="Electronics and Communications Engineering">Electronics and Communications Engineering</option>
                                            <option value="Civil Engineering">Civil Engineering</option>
                                            <option value="Mechanical Engineering">Mechanical Engineering</option>
                                        </select> 
                                    </div>
                                    <div class="col-md-6 col-sm-6">
                                        <div className='form-group' >
                                            <select class="md-input" name="Year" >
                                            <option value="none" disabled selected >Select your studying year</option>
                                            <option value="I">I</option>
                                            <option value="II">II</option>
                                            <option value="II">II</option>
                                            <option value="IV">IV</option>
                                        </select>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-6">
                                        <div class="form-group">
                                            <label class="sr-only" for="College Roll no.">College Roll Number</label>
                                            <input type="text" name="College Roll no." class="md-input" id="name" placeholder="College Roll number*" required data-error="Your College Roll no. is Required" />
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-6">
                                        <div class="form-group">
                                            <label class="sr-only" for="Expected Graduation Year">Expected Graduation Year</label>
                                            <input type="text" name="Expected Graduation Year" class="md-input" id="name" placeholder="Expected Graduation Year *" required data-error="Your College Roll no. is Required" />
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-6">
                                        <div class="form-group">
                                            <label class="sr-only" for="Mobile number">Mobile number</label>
                                            <input type="number" name="Mobile number" class="md-input" id="name" placeholder="Mobile number *" required data-error="Your Mobile number is Required" />
                                            <div class="help-block with-errors"></div>
                                    </div>
                                    </div>
                                    <div class="col-md-6 col-sm-6">
                                        <div className='form-group' >
                                            <label class="sr-only" for="Which Society/Affinity group do you want to join?">Which Society/Affinity group do you want to join?</label>
                                            <select class="md-input" name="Which Society/Affinity group do you want to join?" required>
                                                <option value="none" disabled selected >Which Society/Affinity group do you want to join?</option>
                                                <option value="Computer Society">Computer Society</option>
                                                <option value="Robotics and Automation Society">Robotics and Automation Society</option>
                                                <option value="Women in Engineering Affinity Group (Recommended to Girls)">Women in Engineering Affinity Group (Recommended to Girls)</option>
                                                <option value="Circuits and System Society">Circuits and System Society</option>
                                                <option value="Signal Processing Society">Signal Processing Society</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-6">
                                        <div className='form-group' >
                                            <label class="sr-only" for="Which Operating Team do you think is best for you to join?">Which Operating Team do you think is best for you to join?</label>
                                            <select class="md-input" name="Which Operating Team do you think is best for you to join?" required>
                                                <option value="Publicity Team">Which Operating Team do you think is best for you to join?</option>
                                                <option value="Publicity Team">Publicity Team</option>
                                                <option value="Tech Team">Tech Team</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-sm-12">
                                        <div class="form-group">
                                            <label class="sr-only" for="Why do you feel this Team fits you the best and how can you volunteer for it?">Why do you feel this Team fits you the best and how can you volunteer for it?</label>
                                            <textarea name="Why do you feel this Team fits you the best and how can you volunteer for it?" class="md-textarea" id="message" rows="7" placeholder="Answer" required data-error="Please, Leave us a message"></textarea>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-6">
                                        <div class="form-group">
                                            <label class="sr-only" for="LinkedIn account link">LinkedIn account link</label>
                                            <input type="url" name="LinkedIn account link" class="md-input" id="name" placeholder="LinkedIn account link *" />
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-6">
                                        <div class="form-group">
                                            <label class="sr-only" for="Instagram account link">Instagram account link</label>
                                            <input type="url" name="Instagram account link" class="md-input" id="name" placeholder="Instagram account link *"  />
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-6">
                                        <div className='form-group' >
                                            <label class="sr-only" for="Mode of Payment Transaction ">Mode of Payment Transaction</label>
                                            <select class="md-input" name="Mode of Payment Transaction " required>
                                                <option value="Cash">Cash</option>
                                                <option value="GooglePay">GooglePay</option>
                                                <option value="PhonePe">PhonePe</option>
                                                <option value="PayTM">PayTM</option>
                                            </select>
                                        </div>
                                    </div>
                                    <input type="hidden" name="Timestamp" value={new Date()} />
                                            <div class="col-md-12 col-sm-12">
                                                <div class="text-left mt-20">
                                            <button type="submit" class="submitBtn">Submit</button>
                                                </div>
                                            </div>
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>  
            <a href="javascript:" id="return-to-top"><i class="icofont icofont-arrow-up"></i></a>
        </section>
  )
}

export default JoinUs