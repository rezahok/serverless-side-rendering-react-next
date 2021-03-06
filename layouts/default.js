import React from 'react'
import Meta from '../components/meta'
export default ({ children, meta }) => (
  <div>
    <Meta props={meta} />
    { children }
  </div>
)
