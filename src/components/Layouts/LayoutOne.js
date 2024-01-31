import React from 'react'
import Header from '../Header';
import StickyFooter from '../Footer/StickyFooter';

export default function LayoutOne(props) {
  return (
    <>
        <Header />
        {props.children}
        <StickyFooter/>
    </>
  )
}
