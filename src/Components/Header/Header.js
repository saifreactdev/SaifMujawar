import React, { Component } from 'react';
import './header.css';
import Typed from 'react-typed';

import { Link } from 'react-router-dom';
class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mobileNavClass: 'mobile-nav d-block d-sm-none'
		};
		this.brandName = React.createRef();
	}
	displayMobNav = () => {
		this.setState({
			mobileNavClass:
				this.state.mobileNavClass === 'mobile-nav d-block d-sm-none'
					? 'display-mob-nav mobile-nav d-block d-sm-none'
					: 'mobile-nav d-block d-sm-none'
		});
	};
	closeMobNav = () => {
		this.setState({ mobileNavClass: 'mobile-nav d-block d-sm-none' });
	};
	render() {
		return (
			<header className="fixed-top header">
				<div className="container p-0">
					<nav className="navbar navbar-expand-lg">
						<span className="navbar-brand">
							<Link to="/" onClick={this.closeMobNav}>
								<Typed strings={[ 'Saif Mujawar', 'सैफ मुजावर' ]} typeSpeed={60} backSpeed={60} loop />
							</Link>
						</span>
						<ul className="navbar-nav ml-auto">
							<li className="nav-item d-block d-sm-none">
								<div className="nav-icon nav-link cursor-pointer" onClick={this.displayMobNav}>
									<i className="fas fa-bars fa-2x" />
								</div>
							</li>
							<li className="nav-item d-none d-sm-block">
								<Link to="/about">
									<span className="redirect-link nav-link">About</span>
								</Link>
							</li>
							<li className="nav-item d-none d-sm-block">
								<Link to="/portfolio">
									<span className="redirect-link nav-link">Portfolio</span>
								</Link>
							</li>
							<li className="nav-item d-none d-sm-block">
								<Link to="/contact">
									<span className="redirect-link nav-link">Contact</span>
								</Link>
							</li>
							<li className="nav-item d-none d-sm-block pl-3">
								<label className="switch">
									<input type="checkbox" defaultChecked={this.props.cssVariables.mainTheme} />
									<span className="slider round" onClick={this.props.toggleTheme} />
								</label>
							</li>
						</ul>
					</nav>
					<div className={this.state.mobileNavClass}>
						<ul>
							<li className="nav-link">
								<Link to="/about" onClick={this.closeMobNav}>
									About
								</Link>
							</li>
							<li className="nav-link">
								<Link to="/portfolio" onClick={this.closeMobNav}>
									Portfolio
								</Link>
							</li>
							<li className="nav-link">
								<Link to="/contact" onClick={this.closeMobNav}>
									Contact
								</Link>
							</li>
							<li className="nav-link">
								<label className="switch">
									<input type="checkbox" defaultChecked={this.props.cssVariables.mainTheme} />
									<span className="slider round" onClick={this.props.toggleTheme} />
								</label>
							</li>
						</ul>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
