import { Carousel } from '@mantine/carousel';
import { Paper, Title, Text, Stack } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import Image1 from "../../../assets/Images/sb-1.jpeg";
import Image2 from "../../../assets/Images/sb-2.jpeg";
import Image3 from "../../../assets/Images/sb-3.jpeg";
import classes from './Carousel.module.css';
import { useRef } from 'react';
import { secondaryColor } from '../../Reuseables/Color';
import CustomSolidButton from '../../Reuseables/SolidButton';

const data = [
    {
        image: Image1,
        title: 'Resource provision ',
        description: 'Providing resources, support, and guidance to aspiring entrepreneurs and startups in Bauchi State.',
    },
    {
        image: Image2,
        title: 'Partnerships and Collaborations',
        description: "Fostering collaboration and networking opportunities within the local startup ecosystem.Promoting innovation and creativity through workshops, events, and educational",
    },
    {
        image: Image3,
        title: "Entrepreneurial talent showcase",
        description: "Showcasing Bauchi's entrepreneurial talent and attracting investment and support from local and global stakeholders",
    },
];

interface CardProps {
    image: string;
    title: string;
    description: string;
}

function Card({ image, title, description }: CardProps) {
    return (
        <Paper
            shadow="md"
            h={700}
            radius="md"
            style={{ backgroundImage: `url(${image})` }}
            className={classes.card}
        >
            <Stack justify="center" align="center" p="xl" w={"100%"} h={"100%"} bg={"rgba(9,1,3, 0.65)"}>
                <Title ta="center" order={3} className={classes.title}>
                    {title}
                </Title>
                <Text ta={"center"} c={"white"} lh={1.2} size="md">
                    {description}
                </Text>
                <CustomSolidButton bg={secondaryColor} w={"200px"} variant="white" color="dark" buttonText='Read more' />
            </Stack>
        </Paper>
    );
}

export default function CarouselComponent() {

    const autoplay = useRef(Autoplay({ delay: 5000 }));

    const slides = data.map((item) => (
        <Carousel.Slide key={item.title}>
            <Card {...item} />
        </Carousel.Slide>

    ));

    return (
        <Carousel

            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
            slideSize={{ base: '100%', sm: '100%' }}
            align="center"
            loop
            slidesToScroll={1}
        >
            {slides}
        </Carousel>
    );
}