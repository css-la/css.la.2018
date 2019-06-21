import React from 'react'
import Link from 'gatsby-link'

import './pages.css';

const IndexPage = () => (
  <main>
    <svg class="logo-css-la" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="335.29" height="469.68" viewBox="0 0 335.29 469.68">
  <defs>
    <linearGradient id="linear-gradient" x1="117.69" y1="286" x2="117.69" y2="205.2" gradientUnits="userSpaceOnUse">
      <stop offset="0.39" stop-color="#d1d3d4" stop-opacity="0"/>
      <stop offset="1" stop-color="#d1d3d4"/>
    </linearGradient>
    <linearGradient id="linear-gradient-2" x1="218.65" y1="245.7" x2="218.65" y2="161.71" xlink:href="#linear-gradient"/>
    <linearGradient id="linear-gradient-3" x1="69.1" y1="322.04" x2="263.16" y2="322.04" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#e8e7e5"/>
      <stop offset="1" stop-color="#fff"/>
    </linearGradient>
    <linearGradient id="linear-gradient-4" x1="60.17" y1="182.28" x2="270.86" y2="182.28" xlink:href="#linear-gradient-3"/>
  </defs>
  <title>logo-css.la</title>
  <polygon points="303.85 433 167.64 469.68 31.43 433 0 92.48 335.29 92.48 303.85 433" fill="#2062af"/>
  <polygon points="166.56 120.06 166.56 440.43 166.87 440.51 277.1 410.83 302.54 120.06 166.56 120.06" fill="#3c9cd7"/>
  <g>
    <polygon points="166.44 205.2 68.95 245.81 72.18 286 166.44 245.7 266.7 202.84 270.86 161.71 166.44 205.2" fill="#fff"/>
    <polygon points="68.95 245.81 72.18 286 166.44 245.7 166.44 205.2 68.95 245.81" fill="url(#linear-gradient)"/>
    <polygon points="270.86 161.71 166.44 205.2 166.44 245.7 266.7 202.84 270.86 161.71" fill="url(#linear-gradient-2)"/>
    <polygon points="69.1 245.81 72.33 286 216.96 286.47 213.72 340.06 166.13 353.46 120.38 341.91 117.61 308.64 75.1 308.64 80.65 372.87 166.59 398.28 252.07 373.33 263.16 245.81 69.1 245.81" fill="url(#linear-gradient-3)"/>
    <g opacity="0.05">
      <polygon points="166.44 245.81 68.95 245.81 72.18 286 166.44 286.31 166.44 245.81" fill="#231f20"/>
      <polygon points="166.44 353.33 165.98 353.46 120.23 341.91 117.46 308.64 74.95 308.64 80.5 372.87 166.44 398.28 166.44 353.33" fill="#231f20"/>
    </g>
    <polygon points="60.17 161.71 270.86 161.71 266.7 202.84 65.25 202.84 60.17 161.71" fill="url(#linear-gradient-4)"/>
    <polygon points="166.44 161.71 60.17 161.71 65.25 202.84 166.44 202.84 166.44 161.71" fill="#231f20" opacity="0.05"/>
  </g>
  <g>
    <g>
      <polygon points="58.17 42.45 58.17 22.18 87.74 22.18 87.74 0 35.99 0 35.99 62.68 87.74 62.68 87.74 42.45 58.17 42.45" fill="#231f20"/>
      <path d="M140.94,22.18h20.67V0H109.86V22.18c6.92,6.92,10.53,10.24,20.55,20.25l-20.55,0V62.68h51.75V42.45Z" fill="#231f20"/>
      <path d="M214.29,22.18H235V0H183.21V22.18c6.92,6.92,10.54,10.24,20.55,20.25l-20.55,0V62.68H235V42.45Z" fill="#231f20"/>
    </g>
    <text transform="translate(241.54 62.2)" font-size="60" fill="#231f20" font-family="AktivGrotesk-Black, Aktiv Grotesk" font-weight="800">.<tspan x="17.28" y="0" fill="#ff00a5" letter-spacing="0em">l</tspan><tspan x="35.82" y="0" fill="#ff00a5">a</tspan></text>
  </g>
</svg>

    <h1>Welcome to CSS.la 🌴</h1>
    <p>CSS.la is Los Angeles' premier group for CSS and front-end enthusiasts. So far, CSS.la consists of a monthly-ish study group through <a href="https://www.meetup.com/LearnTeachCode/">Learn Teach Code</a>, a fantastic and supportive community of developers all over the Los Angeles area.</p>
    <p>Our next meeting is planned for July 31st at Black Tux. Please sign up for our email list below to be notified!</p>
    <p>Our previous meetings (the newer ones with notes!):</p>
    <ul>
		<li><a href="https://www.meetup.com/LearnTeachCode/events/255433621/">CSS Grid</a> @ Open Listings, November 8, 2018, <a href="https://paper.dropbox.com/doc/CSS.la-6-Using-CSS-Grid-Today--ARVrAD9w~dGrR_I_wu0gIfNPAg-kBtl03ocCi84NjDbs1dEB">Notes</a></li>
		<li><a href="https://www.meetup.com/LearnTeachCode/events/254676315/">a11y</a> @ Replicated, October 10, 2018, <a href="https://paper.dropbox.com/doc/CSS.la-5-a11y-Accessibility--AO96X1eWzh9_V4eSEXhPC_nGAg-FWnNCYELcMICEuhZqkwng">Notes</a></li>
		<li><a href="https://www.meetup.com/LearnTeachCode/events/253679813/">Naming Conventions in CSS</a> @ Fender, September 12, 2018, <a href="https://paper.dropbox.com/doc/CSS.la-4-Naming-Conventions-in-CSS--AMm_gQrSk6NDxcdnsPpeSD0BAg-NNwsgZES3OpJAOINatkO3">Notes</a></li>
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
    <p>Have a question, concern, or would you like to help with CSS.la? Send email to Scott Gruber @ <a href="mailto:hello@scottgruber.me">hello@scottgruber.me</a>.</p>
  </main>
)

export default IndexPage
