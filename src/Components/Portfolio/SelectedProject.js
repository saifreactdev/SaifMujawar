import React from 'react';
import { Modal, ModalBody } from 'reactstrap';

export default function SelectedProject(props) {
	let currentProject = '';
	let currentProjectTechList = '';
	let collaboratorList = '';
	let currentProjectImgArray = '';
	if (props.currentProject) {
		currentProject = props.currentProject;
		currentProjectTechList = currentProject.technologyUsed.map((item, i) => (
			<div className="tags" key={i}>
				<span>{item}</span>
			</div>
		));
		collaboratorList = currentProject.collaborators.map((item, i) => (
			<span key={i}>
				<a href={item.website} target="_blank" rel="noopener noreferrer">
					{item.name}
					{i !== currentProject.collaborators.length - 1 ? ', ' : ''}
				</a>
			</span>
		));
		currentProjectImgArray = currentProject.images.map((item, i) => (
			<img key={i} src={item.value} alt={item.alt} className="current-project-img" width="100%" />
		));
	}
	return (
		<Modal isOpen={props.modal} toggle={props.toggleModal} className="modal-xl modal-dialog-scrollable">
			<ModalBody className="sec-bg-2">
				<div className="modal-close">
					<i className="fas fa-times float-right cursor-pointer" onClick={props.toggleModal} />
				</div>
				<div className="main-modal-body p-4">
					<div className="row">
						<div className="col-12 col-sm-5">
							<div className="project-info">
								<div className="title">
									<h2>{currentProject.name}</h2>
								</div>
								<div className="desc  pt-2 pb-2">
									<p>{currentProject.desc}</p>
									<p>
										GitHub repository for this project can be viewed by
										<a href={currentProject.githubRepo} target="_blank" rel="noopener noreferrer">
											<em> clicking here</em>
										</a>
									</p>
								</div>
								<div className="tech-tags row pt-2 pb-4">{currentProjectTechList}</div>
								<div
									className={
										currentProject ? currentProject.collaborators.length > 0 ? (
											'collaborators pt-2 pb-4 d-block'
										) : (
											'collaborators pt-2 pb-4 d-none'
										) : (
											'collaborators pt-2 pb-4 d-none'
										)
									}
								>
									<h5>Collaborators:-</h5>
									{collaboratorList}
								</div>
								<div className="demo-button">
									<button className="btn">
										<a href={currentProject.url} target="_blank" rel="noopener noreferrer">
											Live Demo
										</a>
									</button>
								</div>
							</div>
						</div>
						<div className="col-12 col-sm-7 .d-none .d-sm-block">
							<div className="project-images">{currentProjectImgArray}</div>
						</div>
					</div>
				</div>
			</ModalBody>
		</Modal>
	);
}
