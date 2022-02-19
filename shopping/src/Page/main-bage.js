import React, { Fragment } from 'react';
import Header from '../component/Header/Header';
import SideBar from './../component/SideBar/SideBar';
import Books from '../component/Books/Books';
import classes from './main-bage.module.css'

import { useSelector } from 'react-redux';

export default function MainBage() {
  const selector =useSelector(state => state.data.data.response);
  console.log(selector)
  return (
    <Fragment>
      <Header/>
      <section className={classes.section}>
      <SideBar/>
      <Books/>
      </section>
    </Fragment>
  );
}
