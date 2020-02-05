import React from 'react';

export default function Project(props) {
	return (
		<div className="project-div">
			<figure>
				<img src={props.project.thumbnail} alt={props.project.name} width="100%" />
				<figcaption className="figcaption">
					<i className="fas fa-binoculars fa-2x" />
					<h5 className="title pt-2">{props.project.name}</h5>
					<span className="short-desc">{props.project.shortDesc}</span>
					<button className="btn mt-2" onClick={props.openCurrentProject.bind(null, props.index)}>
						View Details
					</button>
				</figcaption>
			</figure>
		</div>
	);
}
