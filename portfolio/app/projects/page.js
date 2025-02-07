import React from 'react'

import ProjectsCard from '../(components)/projectCards/page'

const Projects = () => {
    return (
        <div className='p-4 md:px-8 mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  space-x-4 space-y-4  '>
            <ProjectsCard />
            <ProjectsCard />
            <ProjectsCard />
            <ProjectsCard />
            <ProjectsCard />
            <ProjectsCard />
        </div>
    )
}

export default Projects