import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import Typed from 'react-typed';
import { Loading1 } from '../Loading/Loading';
import './homepage.css';

import { Link } from 'react-router-dom';

class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			quote: null,
			quoteError: null
		};
	}
	// componentDidMount() {
	//   this.getQuote(this);
	// }

	// shouldComponentUpdate(nextProps, nextState) {
	//   console.log(nextState.quoteError);
	//   // if (
	//   //   this.state.quote == nextState.quote ||
	//   //   this.state.quoteError == nextState.quoteError
	//   // ) {
	//   //   return false;
	//   // } else return true;
	//   return true;
	// }

	// getQuote = async _this => {
	//   await fetch(`https://quotes.rest/qod.json`)
	//     .then(function(response) {
	//       return response.json();
	//     })
	//     .then(function(myJson) {
	//       if (myJson.error) {
	//         console.log("Error");
	//         _this.setState({ quoteError: myJson });
	//       } else if (myJson.contents) {
	//         console.log("success");
	//         _this.setState({ quote: myJson });
	//       }
	//     });
	// };

	render() {
		return (
			<div>
				<MetaTags>
					<title>Saif Mujawar | HomePage</title>
					<meta property="title" content="Saif Mujawar | Web Developer | Programmer" />
					<meta property="og:title" content="Saif Mujawar | Web Developer | Programmer" />
					<meta name="author" content="Saif Mujawar" />
					<link rel="canonical" href="https://rishavpandey.com/" />
					<meta property="og:url" content="https://rishavpandey.com" />
					<meta property="og:type" content="website" />
					<meta
						name="description"
						content="Hello World, I'm Saif Mujawar. A Tech Geek who loves to Code and Program."
					/>
					<meta
						property="og:description"
						content="Hello World, I'm Saif Mujawar. A Tech Geek who loves to Code and Program."
					/>
					<meta
						name="keywords"
						contents="Saif Mujawar, React Developer, Saif Mujawar HomePage, Front End Developer"
					/>
					<meta name="robots" content="index, follow" />
				</MetaTags>
				<div className="home-page">
					<section className="sec-bg-1">
						<div className="container">
							<div className="main-div">
								<div className="main-div-head">
									<h1>
										<Typed strings={[ 'Hello, नमस्ते !' ]} typeSpeed={70} backSpeed={70} />
										{/* Hello, नमस्ते ! */}
									</h1>
								</div>
								<div className="main-div-intro">
									<p>
										I'm <span className="custom">Saif Mujawar&nbsp;</span>
										&mdash; a React Front-End Developer, Computer Programmer, Open Source
										Contributer, who
										<span className="custom">&nbsp;Loves&nbsp;</span> to
										<span className="custom">&nbsp;&lt;/&gt;</span>
									</p>
								</div>
								<div className="quote-div d-none">
									{/*temporary hiding the div*/}
									<h3 className="quote-head">Quote of the day</h3>
									<blockquote className="pt-3">
										{this.state.quote ? this.state.quote.contents ? (
											<span className="success-quote">
												{this.state.quote.contents.quotes[0].quote}
											</span>
										) : (
											''
										) : this.state.quoteError ? (
											<span className="error-quote">{this.state.quoteError.error.message}</span>
										) : (
											<Loading1 />
										)}
										<br />
										{this.state.quote ? this.state.quote.contents ? (
											'~ ' + this.state.quote.contents.quotes[0].author
										) : (
											''
										) : (
											''
										)}
									</blockquote>
								</div>
							</div>
						</div>
					</section>
					<section className="sec-bg-2">
						<div className="container">
							<div className="main-div">
								<div className="sec-head">
									<h1>Who AM I?</h1>
								</div>
								<div className="sec-detail">
									<p>
										Hello World, My name is Saif Mujawar. I'm a Computer Programmer with an interest
										in Web Development, Competitive Programming. I've been working as a Research
										Analyst(non-technical) field since the last one and half Years with hands-on
										experience of more than a six months as Front-End developer.
									</p>
									<div className="discover-btn">
										<button className="btn">
											<Link to="/about">
												<span>Let's know more...</span>
											</Link>
										</button>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="sec-bg-1 bg-img">
						<div className="custom-bg">
							<div className="container">
								<div className="main-div">
									<div className="sec-head">
										<h1>What I do</h1>
									</div>
									<div className="sec-detail">
										<p>
											I am fresher eager to work as a Front-End React Developer. I create Single
											Page Web Applications, Websites using majorly
											ReactJS,React-MDL,Redux,Javascript,CSS3,HTML5 as a Front-End stack, powered
											by MySql for Database.
										</p>
									</div>
									<div className="card-grid">
										<div className="row justify-content-center">
											<div className="col-12 col-md-4 col-sm-12 .mx-auto">
												<div className="cards ">
													<div className="card-icon">
														<i className="fas fa-window-maximize fa-3x" />
													</div>
													<div className="card-title">
														<h3>Web Developer</h3>
													</div>
													<div className="card-desc">
														<p>
															I work as React Developer, covering Front-End in Web
															Development.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		);
	}
}

export default HomePage;
