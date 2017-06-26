import {Meteor} from 'meteor/meteor';
import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';


import Signup from './../ui/Signup';
import Dashboard from './../ui/Dashboard';
import NotFound from './../ui/NotFound';
import Login from './../ui/Login';
import AddCategory from './../ui/AddCategory';
import AddItem from './../ui/AddItem';
import FoodItems from './../ui/FoodItems';


const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/dashboard', '/addCategory', '/addItem'];

// to manage the back and forth button (Authenticated Purpose)
const onEnterPublicPage = () => {
  if(Meteor.userId()) {
      browserHistory.replace('/dashboard');
  }
};

const onEnterPrivatePage = () => {
  if(!Meteor.userId()) {
    browserHistory.replace('/');
  }
};

export const onAuthChange = (isAuthenticated) => {
  const pathname = browserHistory.getCurrentLocation().pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  if(isUnauthenticatedPage && isAuthenticated) {
      browserHistory.replace('/dashboard');
  }
  else if(isAuthenticatedPage && !isAuthenticated) {
    browserHistory.replace('/');
  }
};

export const routes = (
  <Router history = {browserHistory}>
    <Route path = "/" component = {Login} onEnter = {onEnterPublicPage}/>
    <Route path = "/signup" component={Signup} onEnter = {onEnterPublicPage}/>
    <Route path = "/dashboard" component={Dashboard} onEnter = {onEnterPrivatePage}>
      <IndexRoute component = {FoodItems}/>
      <Route path = "/addCategory"  component = {AddCategory} />
      <Route path = "/addItem" component = {AddItem} />
    </Route>

    <Route path = "*" component = {NotFound}/>
  </Router>
);
