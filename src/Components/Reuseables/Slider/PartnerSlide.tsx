import { Carousel } from '@mantine/carousel';
import { Button, Paper, Title, Text, Flex } from '@mantine/core';
import classes from './Demo.module.css';

const data = [
  {
    image:
      'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    startupName: 'Startup name',
    partnershipType: 'Partnership',
  },
  {
    image:
      'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    startupName: 'Startup name',
    partnershipType: 'Sponsors',
  },
  {
    image:
      'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    startupName: 'Startup name',
    partnershipType: 'Partnership',
  },
  {
    image:
      'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    startupName: 'Startup name',
    partnershipType: 'Partnership',
  },
  {
    image:
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    startupName: 'Startup name',
    partnershipType: 'Partnership',
  },
  {
    image:
      'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    startupName: 'Startup name',
    partnershipType: 'Partnership',
  },
];

interface CardProps {
  image: string;
  startupName: string;
  partnershipType: string;
}

function Card({ image, startupName, partnershipType }: CardProps) {
  return (

    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <Flex gap={10} direction={"column"} align={{ base: 'center' }}>

        {/* <div> */}
        <Text c={"white"} className={classes.category} size="xs">
          {partnershipType}
        </Text>
        <Title order={3} className={classes.title}>
          {startupName}
        </Title>
        {/* </div> */}
        <Button variant="white" color="dark">
          Learn more
        </Button>
      </Flex>
    </Paper>
  );
}

export default function PartnersSlider() {
  const slides = data.map((item) => (
    <Carousel.Slide key={item.startupName}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize={{ base: '50%', sm: '50%', lg: "100%" }}
      slideGap={{ base: 'xl', sm: 2 }}
      align="start" loop
      slidesToScroll={2}
    >
      {slides}
    </Carousel>
  );
}