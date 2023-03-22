import React, {useState} from 'react';
import {Project} from "../@types/Project";

type Props = {
	project: Project
}

const ProjectCard = ({ project }: Props) => {
    return (
		<div className="project-card p-10">
			<div className="flex justify-center">
				<div
					className="flex flex-col border border-solid border-primary-light rounded-lg bg-primary hover:bg-quaternary shadow-lg dark:bg-neutral-700 md:max-w-xl md:flex-row w-[350px] h-[350px]">
					<img
						className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
						src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
						alt=""/>
					<div className="flex flex-col relative justify-start p-6">
						<h5
							className="mb-2 text-xl font-medium text-white dark:text-neutral-50">
							{project.title}
						</h5>
						<p className="mb-4 text-white dark:text-neutral-200">
							{project.description}
						</p>
						<p className="text-xs text-white dark:text-neutral-300">
							{project.is_active}
						</p>
						<p className="absolute bottom-10 text-xs text-white dark:text-neutral-300">
							{project.created_at}
						</p>
					</div>
				</div>
			</div>
		</div>
    );
};

export default ProjectCard;