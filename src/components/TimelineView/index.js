import {Chrono} from 'react-chrono'
import CourseTimeLineCard from '../CourseTimelineCard'
import ProjectTimeLineCard from '../ProjectTimelineCard'
import './index.css'

const TimeLineView = props => {
  const {timelineItemsList} = props

  const renderTimeList = item => {
    if (item.categoryId === 'COURSE') {
      return <CourseTimeLineCard key={item.id} courseDetails={item} />
    }
    return <ProjectTimeLineCard key={item.id} projectDetails={item} />
  }

  return (
    <div className="bg-container">
      <h1 className="heading1">
        MY JOURNEY OF <br />
        <span className="heading2">CCBP 4.0</span>
      </h1>
      <div className="chrono-container">
        <Chrono
          theme={{secondary: 'white'}}
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
        >
          {timelineItemsList.map(eachItem => renderTimeList(eachItem))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimeLineView
