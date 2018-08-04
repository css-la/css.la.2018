import React from 'react'
import Link from 'gatsby-link'

import './pages.css';

const IndexPage = () => (
  <main>
    <h1>Welcome to CSS.la!</h1>
    <p>CSS.la is Los Angeles' premier group for CSS and front-end enthusiasts. So far, CSS.la consists of a monthly-ish study group through <a href="https://www.meetup.com/LearnTeachCode/">Learn Teach Code</a>, a fantastic and supportive community of developers all over the Los Angeles area.</p>
    <p>Our next meeting is <strong>August 21</strong>, graciously hosted by <a href="https://8thlight.com/">8th Light</a> in DTLA. Our topic this month will be CSS animations!!</p>
    <div className="spacer">
      <a className="button" href="https://www.meetup.com/LearnTeachCode/events/253492626/">Read More and RSVP on Meetup.com</a>
    </div>
    <p>We'd like to get some information from you to help inform the events we plan. Help us out by filling out the super fancy form below:</p>
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfgzI3f4UC_WgCFd7yh3CQiINqjW-MYiHMlGGbnB4VJmXuTUQ/viewform?embedded=true" width="100%" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
  </main>
)

export default IndexPage
