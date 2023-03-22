import React, {useEffect, useState} from 'react';
import axios, {AxiosResponse} from "axios";
import ProjectCard from "./ProjectCard";
import {Project} from "../@types/Project";
import Spinner from "./Spinner";


const Home = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string[]>();

    useEffect(() => {
        setIsLoading(true)
        axios.get(
            'http://backend.thelabs.localhost/api/projects',
        ).then(function (response: AxiosResponse<{ data: Project[] }>) {
            setProjects(response.data.data)
            setIsLoading(false)
        })
            .catch(function (error) {
                setError(error);
            });
    }, [])

    return (
        <div className="mx-auto p-16 flex flex-wrap">
            {!isLoading && projects.length > 0 ? projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            )) : <Spinner /> }
        </div>
    );
}
export default Home;
