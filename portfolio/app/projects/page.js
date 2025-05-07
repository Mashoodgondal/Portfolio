import React from 'react'

import ProjectsCard from '../(components)/projectCards/page'
import attendance from '../../public/images/Attendence.jpg'
import interview from '../../public/images/interview.jpg'
const Projects = () => {
    return (
        <div id='projects' className='p-4 md:px-8 mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  space-x-4 space-y-4  '>
            <ProjectsCard img={attendance} title="Attendance Menegement app" gitlink="https://github.com/Mashoodgondal/Students-attendance.git" prelink="https://students-attendance-hnyw.vercel.app" />
            <ProjectsCard img={interview} title="AI Mock Interview" gitlink="any link" prelink="any link" />
            <ProjectsCard title="My portfolio" gitlink="any link" prelink="any link" />
            <ProjectsCard title="Other project" gitlink="any link" prelink="any link" />
            <ProjectsCard title="ali" gitlink="any link" prelink="any link" />
            <ProjectsCard title="ali" gitlink="any link" prelink="any link" />
        </div>
    )
}

export default Projects