import React from 'react';
import './footer.css';

export default function Footer() {
	return (
		<footer className="pt-5 pb5 sec-bg-1">
			<div className="container">
				<div className="row">
					<div className="col-12 col-lg-6 col-md-12">
						<div className="footer-col-1">
							<div className="social-icon-list row">
								<div className="social-icons">
									<a
										href="https://www.linkedin.com/in/saif-mujawar-🇮🇳-0205b7138"
										target="_blank"
										rel="noopener noreferrer"
										className="icons"
									>
										<i className="fab fa-linkedin-in fa-1.5x" />
									</a>
								</div>
								<div className="social-icons">
									<a
										href="https://twitter.com/mujawarmsaif4"
										target="_blank"
										rel="noopener noreferrer"
										className="icons"
									>
										<i className="fab fa-twitter fa-1.5x" />
									</a>
								</div>

								<div className="social-icons">
									<a
										href="https://stackoverflow.com/users/12845346/saif-mujawar"
										target="_blank"
										rel="noopener noreferrer"
										className="icons"
									>
										<i className="fab fa-stack-overflow fa-1.5x" />
									</a>
								</div>
								<div className="social-icons">
									<a
										href="https://github.com/saaiif"
										target="_blank"
										rel="noopener noreferrer"
										className="icons"
									>
										<i className="fab fa-github fa-1.5x" />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-12 col-lg-6 col-md-12">
						<div className="footer-col-2">
							<div className="pt-4">
								<p className="copyright">
									&copy; 2020 <em>Saif Mujawar</em>. All rights reserved.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="end-footer">
					<p>
						Made with <i className="fa fa-heart pulse custom" /> in India
					</p>
				</div>
			</div>
		</footer>
	);
}
