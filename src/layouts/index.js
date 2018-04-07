import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="CSS.la | California Style Sweets"
      meta={[
        { name: 'description', content: 'CSS.la is Los Angeles\'s premiere CSS user group! Join us for all things CSS-related.' },
        { name: 'keywords', content: 'css, los angeles, meetup, front-end' },
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
