import React from 'react'
import Link from 'gatsby-link'

import './pages.css';

const IndexPage = () => (
  <main>
    <h1>Welcome to CSS.la!</h1>
    <p>Los Angeles' premier meetup for CSS and front-end design enthusiasts.</p>
    <p>Our first meetup is April 25, 2018 at 6:30pm in Los Feliz!</p>
    <div className="spacer">
      <a className="button" href="https://www.meetup.com/LearnTeachCode/events/249510027/">RSVP on Meetup.com</a>
    </div>
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfgzI3f4UC_WgCFd7yh3CQiINqjW-MYiHMlGGbnB4VJmXuTUQ/viewform?embedded=true" width="100%" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
  </main>
)

export default IndexPage
