import {VerticalTimelineElement} from "react-vertical-timeline-component"

export default function CustomVerticalTimelineElement(props) {
  const borderBlueContentStyle = { borderTop: '5px solid rgb(68,191,228)', color: '#000' }
  const blueArrowStyle = { borderRight: '7px solid  rgb(68 ,191 ,228)' }
  const blueIconStyle = { background: 'rgb(68,191,228)', color: '#fff', display: 'flex', justifyContent: 'center' }
  const noteIcon = <img style={{ width: '60%'}} src='note01.svg' />

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={borderBlueContentStyle}
      contentArrowStyle={blueArrowStyle}
      date={props.date || props.history.date}
      iconStyle={blueIconStyle}
      icon={noteIcon}
      id={props.history.id}
    >
      <h3 className="vertical-timeline-element-title">
        <a href={props.link} target="_blank" rel="noopener noreferrer">{props.history.title}</a>
      </h3>
      {
        (() => {
          if (props.history.subTitle) {
            return (
              <h4 className="vertical-timeline-element-subtitle">
                <a href={props.link} target="_blank" rel="noopener noreferrer">{props.history.subTitle}</a>
              </h4>
            )
          }
        })()
      }

      {props.children}
    </VerticalTimelineElement>
  )
}
