import React from 'react'
import Link from 'gatsby-link'

import './pages.css';

const IndexPage = () => (
  <main>
    <h1>Welcome to CSS.la!</h1>
    <p>CSS.la is Los Angeles' premier group for CSS and front-end enthusiasts. So far, CSS.la consists of a monthly-ish study group through <a href="https://www.meetup.com/LearnTeachCode/">Learn Teach Code</a>, a fantastic and supportive community of developers all over the Los Angeles area.</p>
    <p>Our next meeting is <strong>September 12</strong>, graciously hosted by <a href="https://fender.com/">Fender Guitars</a> in Hollywood. Our topic this month will be naming conventions in CSS!</p>
    <div className="spacer">
      <a className = "button" href = "https://www.meetup.com/LearnTeachCode/events/253679813/">Read More and RSVP on Meetup.com</a>
    </div>
    <p>Here are notes from our previous meetings:</p>
    <ul>
      <li> <a href="https://paper.dropbox.com/doc/CSS.la-3-CSS-Animations-YGMB8TFeAka4O5jsLhvD5">CSS Animations!!</a>, August 21, 2018 @ <a href="
      https: //8thlight.com/">8th Light</a></li>
    </ul>
    <p>We'd like to get some information from you to help inform the events we plan. Help us out by filling out the super fancy form below:</p>
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfgzI3f4UC_WgCFd7yh3CQiINqjW-MYiHMlGGbnB4VJmXuTUQ/viewform?embedded=true" width="100%" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
  </main>
)

export default IndexPage
