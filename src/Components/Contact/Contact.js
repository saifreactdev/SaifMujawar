import React from 'react';
import MetaTags from 'react-meta-tags';
import './contact.css';

export default function Contact() {
	return (
		<div>
			<MetaTags>
				<title>Saif Mujawar | Contact Me</title>
				<meta property="title" content="Saif Mujawar | Web Developer | Programmer" />
				<meta property="og:title" content="Saif Mujawar | Web Developer | Programmer" />
				<meta name="author" content="Saif Mujawar" />
				<link rel="canonical" href="https://rishavpandey.com/contact" />
				<meta property="og:url" content="https://rishavpandey.com/contact" />
				<meta property="og:type" content="website" />
				<meta
					name="description"
					content="Hello World, I'm Saif Mujawar. A Tech Geek who loves to Code and Program."
				/>
				<meta
					property="og:description"
					content="Hello World, I'm Saif Mujawar. A Tech Geek who loves to Code and Program."
				/>
				<meta name="description" content="This is about me section for my website" />
			</MetaTags>
			<div className="contact-page">
				<section className="sec-bg-1">
					<div className="container">
						<div className="main-div">
							<div className="sec-head">
								<h1>Contact Me</h1>
							</div>
							<div className="sec-detail">
								<h2>I'd Love To Hear From You.</h2>
								<p>For any query or communication feel free to contact me.</p>
								<div className="card-grid">
									<div className="row">
										<div className="col-12 col-sm-4">
											<div className="cards">
												<div className="card-icon">
													<i className="fas fa-map-marker-alt fa-2x" />
												</div>
												<div className="card-title">
													<h5>WHERE TO FIND ME</h5>
												</div>
												<div className="card-desc">
													<p>
														Bengaluru, Karnataka
														<br />
														India
													</p>
												</div>
											</div>
										</div>
										<div className="col-12 col-sm-4">
											<div className="cards">
												<div className="card-icon">
													<i className="far fa-envelope fa-2x" />
												</div>
												<div className="card-title">
													<h5>EMAIL ME AT</h5>
												</div>
												<div className="card-desc">
													<p>
														<a href="mailto:mujawarmsaif@gmail.com">
															mujawarmsaif@gmail.com
														</a>
													</p>
												</div>
											</div>
										</div>
										<div className="col-12 col-sm-4">
											<div className="cards">
												<div className="card-icon">
													<i className="fas fa-phone fa-2x" />
												</div>
												<div className="card-title">
													<h5>CALL ME AT</h5>
												</div>
												<div className="card-desc">
													<p>
														<a href="tel:+91-7411556025">+91-7411556025</a>
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
				<section className="sec-bg-2">
					<div className="map-div">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.6600798865!2d77.35073573336324!3d12.954517008640542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1580882341049!5m2!1sen!2sin"
							width="100%"
							height="450"
							frameBorder="0"
							style={{ border: 0 }}
							allowFullScreen
						/>
					</div>
				</section>
			</div>
		</div>
	);
}
