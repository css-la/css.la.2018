import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="CSS.la | CSS Meetup in Los Angeles"
      meta={[
        { name: 'description', content: 'CSS.la is Los Angeles\'s premiere CSS group! Join us for all things at the front of the front-end: UI development, design systems, accessibility, and of course, CSS.' },
        { name: 'keywords', content: 'css, los angeles, meetup, front-end, html' },
      ]}
    />
    <Header />
    <div className="wrap">
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
