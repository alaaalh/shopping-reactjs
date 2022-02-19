import React, { Fragment } from 'react';
import Header from '../component/Header/Header';
import SideBar from './../component/SideBar/SideBar';
import Books from '../component/Books/Books';

import { useSelector } from 'react-redux';

export default function MainBage() {
  const selector =useSelector(state => state.data.data.response);
  console.log(selector)
  return (
    <Fragment>
      <Header/>
      <section style={{display: 'flex'}}>
      <SideBar/>
      <Books/>
      </section>
    </Fragment>
  );
}
