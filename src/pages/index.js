import React from 'react'
import Link from 'gatsby-link'

import './pages.css';

const IndexPage = () => (
  <main>
    <h1>Welcome to CSS.la!</h1>
    <p>CSS.la is Los Angeles' premier group for CSS and front-end enthusiasts. So far, CSS.la consists of a monthly study group through <a href="https://www.meetup.com/LearnTeachCode/">Learn Teach Code</a>, a fantastic and supportive community of developers all over the Los Angeles area.</p>
    <p>Our next meeting is in the planning stages – follow <a href="https://twitter.com/cssdotla">@cssdotla on Twitter</a> and keep an eye on the <a href="https://www.meetup.com/LearnTeachCode/">Learn Teach Code</a> meetup to be notified when we announce it!</p>
    {/* <div className="spacer">
      <a className="button" href="https://www.meetup.com/LearnTeachCode/events/250076452/">Read More and RSVP on Meetup.com</a>
    </div> */}
    <p>We'd like to get some information from you to help inform the events we plan. Help us out by filling out the super fancy form below:</p>
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfgzI3f4UC_WgCFd7yh3CQiINqjW-MYiHMlGGbnB4VJmXuTUQ/viewform?embedded=true" width="100%" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
  </main>
)

export default IndexPage
