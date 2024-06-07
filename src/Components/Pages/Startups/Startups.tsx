import { Box, Stack, Title, Text, Flex, Space } from "@mantine/core";
import { getDocs } from "firebase/firestore";
import StartupCard from "./StartupCard";
import { useEffect, useState } from "react";
import { startupRef } from "../../Utils/firebase.config";

interface programDataType {
    id: string;
    startupName: string;
    startupLogo: string;
    description: string;
}

export default function StartupPage() {
    const [programsData, setProgramsData] = useState<programDataType[]>([]);
    const imageUrl = "https://placehold.co/300";

    const startupData = [
        {
            id: 1,
            name: "Startup One",
            description: "An innovative solution to modern problems.",
            imageUrl: "https://placehold.co/300",
            website: "https://www.startupone.com"
        },
        {
            id: 2,
            name: "Startup Two",
            description: "Leading the way in tech innovation.",
            imageUrl: "https://placehold.co/300",
            website: "https://www.startuptwo.com"
        },
        // Add more startups as needed
    ];

    useEffect(() => {
        async function getProgramsData() {
            const programsSnapshot = await getDocs(startupRef);

            const programData = programsSnapshot.docs.map((doc) => ({
                id: doc.id,
                startupName: doc.data().startupName,
                startupLogo: doc.data().startupLogo,
                description: doc.data().description,
                // ...doc.data(),
            }));
            return programData
        }


        const fetchData = async () => {

            try {

                const programData = await getProgramsData();

                setProgramsData(programData);

            } catch (error) {

                console.error("Error fetching programs data:", error);

            }

        };


        fetchData();



        console.log(programsData.length)
    }, [])

    return (
        <Box pt={20}>
            <Stack>
                {/* create a form for startup enrollment */}
                <Stack p={10}>
                    <Title ta="center">Startups Powered by Us</Title>
                    <Text ta="center">
                        Discover the innovative startups that are making waves with the support of Startup Bauchi.
                    </Text>
                </Stack>
                <Stack style={{ borderRadius: 10 }} mx={{ base: 0, md: 10, lg: 50 }} p={{ base: 10, md: 20, lg: 30 }} bg="#f9f9f9">
                    <Flex justify="center" gap={20} wrap="wrap">
                        {startupData.map((startup) => (
                            <StartupCard description={startup.description} imageUrl={imageUrl} name={startup.name} website={startup.website} key={startup.id} />
                        ))}
                    </Flex>
                </Stack>
            </Stack>
            <Space h={100} />
        </Box>
    );
}
