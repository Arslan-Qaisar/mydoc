import React from 'react'

export default function Section4() {
  return (
    <div>
      <div className="section4">
            <div className="sec4-left">
                <p className="sec4-line1">Connect with Confidence</p>
                <p className="sec4-line2">Your path to seamless Healthcare Financial solution</p>
                <button className="btn text-white font-bold">Get Started</button>
            </div>
            <div className="sec4-right">
                    <form action="">
                        <label for="Name">Name:</label>
                        <input type="text" placeholder="Enter your name here" />
                        <label className="label" for="Email">Email:</label>
                        <input type="email" placeholder="Enter your email here" />
                        <label className="label" for="PHone">Phone:</label>
                        <input type="text"placeholder="Enter your phone here" />
                        <label className="message" for="Name">Message:</label>
                        <input className="msg-input" type="text" placeholder="Enter your message here" />
                        <div className="buton">
                        <button className="btn btnn text-white">Submit</button>
                        </div>
                    </form>
            </div>  
        </div>
    </div>
  )
}
