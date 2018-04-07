import React from 'react'
import Link from 'gatsby-link'

import './pages.css';

const IndexPage = () => (
  <main>
    <h1>Welcome to CSS.la!</h1>
    <p>California Style Sweets: Los Angeles' premier meetup for CSS and front-end design enthusiasts.</p>
    <p>Our first meetup is <strong>April 25, 2018 at 6:30pm</strong> in Los Feliz! The theme will be "CSS and Browser Mechanics". After a brief presentation from <a href="https://twitter.com/laras126">Lara</a>, we'll apply our newfound knowledge and work together on the CSS for this site (even though it's pretty amazing already 🤔).</p>
    <div className="spacer">
      <a className="button" href="https://www.meetup.com/LearnTeachCode/events/249510027/">RSVP on Meetup.com</a>
    </div>
    <p>We'd like to get some information from you to help inform the events we plan. Help us out by filling out the super fancy form below:</p>
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfgzI3f4UC_WgCFd7yh3CQiINqjW-MYiHMlGGbnB4VJmXuTUQ/viewform?embedded=true" width="100%" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
  </main>
)

export default IndexPage
