import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    imageUrl,
    duration,
    description,
    projectUrl,
  } = projectDetails

  return (
    <div className="project-container">
      <img src={imageUrl} alt="project" className="img" />
      <div className="project-heading-container">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="time-container">
          <AiFillCalendar className="icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl} className="url-link">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
