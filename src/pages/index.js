import React from 'react'
import Link from 'gatsby-link'

import './pages.css';

const IndexPage = () => (
  <main>
    <h1>Welcome to CSS.la 🌴</h1>
    <p>CSS.la is Los Angeles' premier group for CSS and front-end enthusiasts. So far, CSS.la consists of a monthly-ish study group through <a href="https://www.meetup.com/LearnTeachCode/">Learn Teach Code</a>, a fantastic and supportive community of developers all over the Los Angeles area.</p>
    <p>Our next meeting is <strong>September 12</strong>, graciously hosted by <a href="https://fender.com/">Fender Guitars</a> in Hollywood. Our topic this month will be naming conventions in CSS!</p>
    <div className="spacer">
      <a className="button" href = "https://www.meetup.com/LearnTeachCode/events/253679813/">Read More and RSVP on Meetup.com</a>
    </div>
    <div className="spacer">
      <a className="button" href="https://paper.dropbox.com/doc/CSS.la-4-Naming-Conventions-in-CSS--AMm_gQrSk6NDxcdnsPpeSD0BAg-NNwsgZES3OpJAOINatkO3">View the Notes</a>
    </div>
    <p>Our previous meetings (the newer ones with notes!):</p>
    <ul>
      <li><a href="https://www.meetup.com/LearnTeachCode/events/253492626/">CSS Animations!!</a> @ 8th Light, August 21, 2018, <a href="https://paper.dropbox.com/doc/CSS.la-3-CSS-Animations-YGMB8TFeAka4O5jsLhvD5">Notes</a></li>
      <li><a href="https://www.meetup.com/LearnTeachCode/events/250076452/">Learn About Algorithms in CSS</a> @ Replicated, May 23, 2018</li>
      <li><a href="https://www.meetup.com/LearnTeachCode/events/249510027/">Learn about CSS and Browser Mechanics</a> @ Open Listings, April 25, 2018</li>
    </ul>
    <section className="email-signup spacer">
      <h3>Email List</h3>
      <p>Sign up for our email list to be notified of new meetups (and potentially for some CSS tidbits here and there).</p>
      <form className="email-form" action="https://tinyletter.com/cssdotla" method="post" target="popupwindow" onsubmit="window.open('https://tinyletter.com/cssdotla', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true">
        < p className = "email-signup__label">
          <label for="tlemail">✍️ Enter your email address:</label>
        </p>
        <p>
          <input className="email-signup__input" type="text" name="email" id="tlemail" />
        </p>
        <input type="hidden" value="1" name="embed" />
        <input className="button" type="submit" value="Subscribe" />
        < p className = "email-signup__meta" >
          <a href="https://tinyletter.com" target="_blank">powered by TinyLetter</a>
        </p>
      </form>
    </section>
    <p>Have a question, concern, or would you like to help with CSS.la? Send an email to Lara Schenck @ <a href="mailto:lara@notlaura.com">lara at notlaura dot com</a>.</p>
  </main>
)

export default IndexPage
