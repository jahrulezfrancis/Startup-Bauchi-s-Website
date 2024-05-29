import { Box, Grid, Group, Title } from "@mantine/core";
import BlogPostCard from "./BlogPostCard";
import { postData } from "./PostData";
import "../../AnimationContainers/animations.css"

export default function BlogPage() {
    return (
        <Box>
            <Grid style={{ animation: "bounceIn 1s ease 0s 1 normal forwards" }}>
                <Grid.Col px={20} p={{ base: "10px", md: "0px", lg: "20px" }} span={{ base: 12, md: 6, lg: 8 }}>
                    <Title ta={{ base: "center", md: "center", lg: "start" }} mt={10}>Latest Post</Title>
                    <Group>
                        {
                            postData.map((item) => {
                                return <BlogPostCard key={item.id} postLink="#" title={item.title} description={item.description} />
                            })
                        }
                    </Group>

                </Grid.Col>

                <Grid.Col mt={{ base: 70, md: 0, lg: 0 }} px={20} p={{ base: "0px", md: "0px", lg: "20px" }} span={{ base: 12, md: 6, lg: 4 }}>
                    <Title my={10} ta={{ base: "center", md: "center", lg: "start" }}>Featured post</Title>
                    <Group>
                        {
                            postData.map((item) => {
                                return item.isFeatured && <BlogPostCard key={item.id} postLink="#" title={item.title} description={item.description} />
                            })
                        }
                    </Group>
                </Grid.Col>
            </Grid>
        </Box>
    )
}