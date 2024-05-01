import { Box } from "@mantine/core";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdDeviceHub } from "react-icons/md";

export default function TimelineComponent() {
    return (
        <Box>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="Jan, 2024"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<MdDeviceHub />}
                >
                    <h3 className="vertical-timeline-element-title">Startup Bauchi Campus series 1.0</h3>
                    <h4 className="vertical-timeline-element-subtitle">Oppolo Hub, Bauchi, NG</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta rem necessitatibus quos nesciunt. Quia repellat, incidunt porro atque, inventore labore dolor tenetur quibusdam voluptate ea rem, soluta veniam necessitatibus perspiciatis.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Jan, 2024"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<MdDeviceHub />}
                >
                    <h3 className="vertical-timeline-element-title">Startup Bauchi Campus series 2.0</h3>
                    <h4 className="vertical-timeline-element-subtitle">Bauchi, NG</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex illum vel debitis tenetur cupiditate ad ea nam, minima praesentium minus voluptatem, sunt accusamus iste dolor dolore, nostrum deleniti accusantium eaque.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="November 2024"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<MdDeviceHub />}
                >
                    <h3 className="vertical-timeline-element-title">Ideation Bootcamp</h3>
                    <h4 className="vertical-timeline-element-subtitle">Bauchi, NG</h4>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores tenetur molestiae natus quos nesciunt optio minus! Officiis deleniti explicabo, blanditiis vel consequatur illo minima quis atque voluptates. Eum, fugiat cupiditate!
                    </p>
                </VerticalTimelineElement>

                {/* <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    icon={<FaStar />}
                /> */}
            </VerticalTimeline>
        </Box>
    )
}