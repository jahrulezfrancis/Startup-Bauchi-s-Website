import { Box, Text } from "@mantine/core";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./timeline.styles.css"
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
                    <h3 className="vertical-timeline-element-title done">Startup Bauchi Campus series 1.0</h3>
                    <h4 className="vertical-timeline-element-subtitle">Oppolo Hub, Bauchi, NG</h4>
                    <Text>
                        Featuring a diverse lineup of startups, this series serves as a vibrant hub for the local entrepreneurial ecosystem. Attendees will have the opportunity to engage with innovative founders, learn from industry experts, and explore collaborative opportunities that can propel their businesses forward.
                    </Text>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Jan, 2024"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<MdDeviceHub />}
                >
                    <h3 className="vertical-timeline-element-title done">Startup Bauchi Campus series 2.0</h3>
                    <h4 className="vertical-timeline-element-subtitle">Bauchi, NG</h4>
                    <Text>
                        Featuring a diverse lineup of startups, this series serves as a vibrant hub for the local entrepreneurial ecosystem. Attendees will have the opportunity to engage with innovative founders, learn from industry experts, and explore collaborative opportunities that can propel their businesses forward.
                    </Text>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Coming soon"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<MdDeviceHub />}
                >
                    <h3 className="vertical-timeline-element-title">Ideation Bootcamp</h3>
                    <h4 className="vertical-timeline-element-subtitle">Bauchi, NG</h4>
                    <Text>
                        Unlock your creative potential and ignite your innovative mindset at our Ideation Bootcamp. This immersive, one-day event is designed to challenge your thinking, foster collaboration, and empower you to generate groundbreaking ideas.
                    </Text>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </Box>
    )
}