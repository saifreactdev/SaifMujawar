import React from 'react';
import MetaTags from 'react-meta-tags';
import './about.css';

// document import statement
import Resume from '../../assets/docs/Saif.Mujawar.pdf';
import VJITCertificate from '../../assets/docs/VJIT_Experience_Certificate.pdf';
import SurvaiderLetter from '../../assets/docs/Relieving letter_Saif.pdf';

import { Link } from 'react-router-dom';

let mainSkillList = [
	{
		name: 'HTML'
	},
	{
		name: 'CSS'
	},
	{
		name: 'JavaScript'
	},
	{
		name: 'ES6'
	},
	{
		name: 'jQuery'
	},
	{
		name: 'ReactJS'
	},
	{
		name: 'Redux'
	},
	{
		name: 'Bootstrap'
	},
	{
		name: 'MySQL'
	},
	{
		name: 'C'
	},
	{
		name: 'Java'
	}
];

let mainAcademicDetails = [
	{
		degreeName: "Bachelor's Degree",
		iconClassName: 'fas fa-graduation-cap',
		from: 'July 2013',
		to: 'July 2017',
		institutionName: 'S.G.Balekundri Institute of Technology, VTU',
		desc:
			'I completed Bachelor Of Engineering in Computer Science stream from S.G.Balekundri Institute of Technology, affiliated to Visveswaraya Technological University.'
	},
	{
		degreeName: 'Secondary Schooling',
		iconClassName: 'fas fa-university',
		from: 'Jun 2011',
		to: 'April 2013',
		institutionName: 'Shaikh College Of Science,Commerce and Arts, KSEEB',
		desc:
			'I completed my Secondary schooling from Shaikh College Of Science,Commerce and Arts, affiliated to Karnataka Secondary Education Examination Board.'
	},
	{
		degreeName: 'Schooling',
		iconClassName: 'fas fa-school',
		from: 'Jun 2001',
		to: 'Jun 2011',
		institutionName: 'Oriental English Medium High School',
		desc:
			'I completed my Primary and High schooling from Oriental English Medium High School, affiliated to Karnataka Secondary Education Examination Board.'
	}
];

let mainWorkExperienceDetails = [
	{
		companyName: 'Survaider',
		type: 'Full-Time',
		iconClassName: 'fas fa-laptop-code',
		from: 'Dec 2018',
		to: 'Sep 2019',
		location: 'Bengaluru,Karnataka',
		position: 'Research Analyst',
		desc:
			'I worked here as a Research Analyst for 9 months as a Lead Generator. My work includes find new contact details , Marketing research etc.',
		certificate: SurvaiderLetter
	},
	{
		companyName: 'VJIT Services',
		type: 'internship',
		iconClassName: 'fas fa-laptop-code',
		from: 'Jan 2018',
		to: 'Aug 2018',
		location: 'Full Time, Belagavi',
		position: 'Data Analyst',
		desc:
			' I worked here as a Data Analyst for 6 months in Belagavi, In office as a Full Time. My work included Listing data, adding information of the product in companys website Example: eBay etc.',
		certificate: VJITCertificate
	}
];

export default function About(props) {
	let academicDetails = [];
	let workExperienceDetails = [];
	let skillList = [];
	if (mainAcademicDetails.length > 0) {
		academicDetails = mainAcademicDetails.map((item, i) => (
			<div className="timeline-div pb-3" key={i}>
				<div className="timeline-icon">
					<div>
						<i className={item.iconClassName} />
					</div>
				</div>
				<div className="timeline-head">
					<div className="title">
						<h5>{item.degreeName}</h5>
					</div>
					<div className="desc">
						<p>
							{item.from} {item.to !== '' ? ' - ' : ''} {item.to}
						</p>
					</div>
				</div>
				<div className="timeline-desc pt-2">
					<div className="title">
						<h5>{item.institutionName}</h5>
					</div>
					<div className="desc">
						<p>{item.desc}</p>
					</div>
				</div>
			</div>
		));
	}
	if (mainWorkExperienceDetails.length > 0) {
		workExperienceDetails = mainWorkExperienceDetails.map((item, i) => (
			<div className="timeline-div pb-3" key={i}>
				<div className="timeline-icon">
					<div>
						<i className={item.iconClassName} />
					</div>
				</div>
				<div className="timeline-head">
					<div className="title">
						<h5>{item.companyName}</h5>
					</div>
					<div className="desc">
						<p>
							{item.from} - {item.to}
						</p>
						<p>{item.location}</p>
					</div>
				</div>
				<div className="timeline-desc pt-2">
					<div className="title">
						<h5>{item.position}</h5>
					</div>
					<div className="desc">
						<p>{item.desc}</p>
						<p>
							<a
								href={item.certificate ? item.certificate : '#'}
								target="_black"
								rel="noopener noreferrer"
								className={!item.certificate ? 'not-active' : ''}
							>
								<em>
									Certificate of&nbsp;
									{item.type === 'Full-Time' ? 'Releaving' : 'Experience'}
								</em>
							</a>
						</p>
					</div>
				</div>
			</div>
		));
	}
	if (mainSkillList.length > 0) {
		skillList = mainSkillList.map((item, i) => (
			<div className="skill-div" key={i}>
				<div className="skill-name">
					<span>{item.name}</span>
				</div>
				<div className="skill-range">
					<div className="progress">
						<div
							className="progress-bar progress-bar-striped progress-bar-animated bg-success"
							role="progressbar"
							aria-valuenow={100}
							aria-valuemin={0}
							aria-valuemax={100}
							style={{ width: '100%' }}
						/>
					</div>
				</div>
			</div>
		));
	}
	return (
		<div>
			<MetaTags>
				<title>Saif Mujawar | About Me</title>
				<meta property="title" content="Saif Mujawar | Web Developer | Programmer" />
				<meta property="og:title" content="Saif Mujawar | Web Developer | Programmer" />
				<meta name="author" content="Saif Mujawar" />
				<link rel="canonical" href="https://rishavpandey.com/about" />
				<meta property="og:url" content="https://rishavpandey.com/about" />
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
			<div className="about-page">
				<section className="sec-bg-1">
					<div className="container">
						<div className="main-div">
							<div className="sec-head">
								<h1>Let me Introduce myself</h1>
							</div>
							<div className="sec-detail">
								<p>
									I'm from Belagavi, a district in the Indian state of Karnataka. I'm B.E graduate CSE
									Major Engineering Student from SGBIT located in the Smart City Belagavi ,Karnataka.
									I'm a Technology Enthusiast focused at Research and Development in various Fields of
									Computer Science. I love coding and creating new stuffs. My field of interest
									includes Competitive Programming, Web Development. I love contributing in Open
									Source Work/Projects. I'm also fond of reading books, Singing, exploring new places,
									traveling, spending time with family.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className="sec-bg-2">
					<div className="container">
						<div className="main-div">
							<div className="sec-head">
								<h1>My Educational Qualification</h1>
							</div>
							<div className="timeline-sec">{academicDetails}</div>
						</div>
					</div>
				</section>
				<section className="sec-bg-1">
					<div className="container">
						<div className="main-div">
							<div className="sec-head">
								<h1>My Work Experience</h1>
							</div>
							<div className="timeline-sec">{workExperienceDetails}</div>
						</div>
					</div>
				</section>
				<section className="sec-bg-2">
					<div className="container">
						<div className="main-div skill-sec">
							<div className="sec-head">
								<h1>My Skills</h1>
							</div>
							<div className="sec-detail">
								<div className="row">
									<div className="col-12 col-md-6">
										<div className="intro-main-div">
											<div className="image">
												<img
													src={require('../../assets/images/avatar.jpg')}
													alt=""
													width="100%"
													height="100%"
												/>
											</div>
											<div className="desc">
												<div className="title">
													<h3>Who's this guy?</h3>
												</div>
												<div className="intro">
													<p>
														I'm a self taught computer programmer, currently dealing with
														Front-End of Web Applications. I've a serious passion of
														learning new things and adding new tech stack to my list
														everyday.
													</p>
												</div>
											</div>
										</div>
									</div>
									<div className="col-12 col-md-6">
										<div className="skill-main-div">{skillList}</div>
									</div>
								</div>
								<div className="connect-div">
									<div className="row">
										<div className="col-12 col-sm-6">
											<div className="connect-me">
												<Link to="/contact">
													<button className="btn">Get in touch with me</button>
												</Link>
											</div>
										</div>
										<div className="col-12 col-sm-6">
											<div className="resume">
												<a href={Resume} target="_black" rel="noopener noreferrer">
													<button className="btn">My Resume</button>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="special-div">
					<div className="container">
						<div className="row">
							<div className="grid-div">
								<div className="icon-div">
									<i className="fas fa-pencil-ruler fa-3x" />
								</div>
								<div className="num-div">
									<span>2</span>
								</div>
								<div className="desc-div">
									<span>Courses</span>
								</div>
							</div>
							<div className="grid-div">
								<div className="icon-div">
									<i className="fas fa-project-diagram fa-3x" />
								</div>
								<div className="num-div">
									<span>5+</span>
								</div>
								<div className="desc-div">
									<span>Projects</span>
								</div>
							</div>
							<div className="grid-div">
								<div className="icon-div">
									<i className="fas fa-award fa-3x" />
								</div>
								<div className="num-div">
									<span>2+</span>
								</div>
								<div className="desc-div">
									<span>Awards & Honour</span>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
