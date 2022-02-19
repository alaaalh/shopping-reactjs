import React, { Fragment } from 'react';
import Header from '../component/Header/Header';
import SideBar from './../component/SideBar/SideBar';
import Books from '../component/Books/Books';
import classes from './main-bage.module.css'

export default function MainBage() {
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
