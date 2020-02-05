// import css files
import 'bootstrap/dist/css/bootstrap.min.css';
import './font-awesome/css/fontawesome.min.css';
import './MainApp.css';

import React from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

export default function MainApp(props) {
	function backToTop() {
		const c = document.documentElement.scrollTop || document.body.scrollTop;
		if (c > 0) {
			window.requestAnimationFrame(backToTop);
			window.scrollTo(0, c - c / 20);
		}
	}
	return (
		<div className="main-app">
			<style>
				{`
            :root {
              /* background-color */
              --main-bg-color: ${props.cssVariables.mainBgColor};
              --sec-bg-color: ${props.cssVariables.secBgColor};

              /* bg-img-color */
              --bg-img-color: ${props.cssVariables.bgImgColor};

              /* mobile nav background color */
              --mob-nav-bg-color: ${props.cssVariables.mobNavBgColor};

              /* main-color theme */
              --main-theme-color: ${props.cssVariables.mainThemeColor};

              /* font-color */
              --main-font-color: ${props.cssVariables.mainFontColor};
              --sec-font-color: ${props.cssVariables.secFontColor};
            }
          `}
			</style>
			<div className="back-to-top">
				<div onClick={backToTop} className="cursor-pointer icon">
					<i className="fas fa-arrow-up" />
				</div>
			</div>
			<Router>
				<Header {...props} />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/about" component={About} />
					<Route exact path="/portfolio" component={Portfolio} />
					<Route exact path="/contact" component={Contact} />
					<Route render={() => <Redirect to={{ pathname: '/' }} />} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}
