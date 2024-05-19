import { Box, Grid, Group, Title } from "@mantine/core";
import BlogPostCard from "./BlogPostCard";
import { postData } from "./PostData";

export default function BlogPage() {
    return (
        <Box>
            <Grid>
                <Grid.Col p={{ base: "0px", md: "0px", lg: "20px" }} span={{ base: 12, md: 6, lg: 8 }}>
                    <Title>Latest Post</Title>
                    <Group>
                        {
                            postData.map((item) => {
                                return <BlogPostCard key={item.id} postLink="#" title={item.title} description={item.description} />
                            })
                        }
                    </Group>

                </Grid.Col>
                <Grid.Col p={{ base: "0px", md: "0px", lg: "20px" }} span={{ base: 12, md: 6, lg: 4 }}>
                    <Title>Featured post</Title>
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