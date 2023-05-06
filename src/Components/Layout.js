import React from 'react'

const Layout = ({children,className=""}) => {
  return (
    <div className={`w-full h-full inline-block z-[-.5] bg-light p-32 ${className}`}>
      {children}
    </div>
  )
}

export default Layout
