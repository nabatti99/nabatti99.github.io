import { HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import PageHead from "../components/page-head/page-head";
import PageBody from "../components/page-body/page-body";

// Queries namespace from generated typesgatsby-types.d.ts
const HomePage: React.FC<
    PageProps<{
        allContentfulProject: Queries.ContentfulProjectGroupConnection;
        allContentfulService: Queries.ContentfulServiceGroupConnection;
    }>
> = ({ data }) => {
    const projects = data.allContentfulProject.nodes;
    const services = data.allContentfulService.nodes;

    return (
        <PageBody>
            <section>Content 1</section>
            <section>Content 2</section>
            <section>Content 3</section>
        </PageBody>
    );
};

export default HomePage;

export const Head: HeadFC = () => <PageHead />;

// Query from Contentful
export const projects = graphql`
    {
        allContentfulProject(sort: { updatedAt: DESC }) {
            nodes {
                id
                title
                slug
                thumbnail {
                    localFile {
                        publicURL
                    }
                }
                service {
                    title
                }
            }
        }

        allContentfulService {
            nodes {
                id
                title
                slug
                thumbnail {
                    localFile {
                        publicURL
                    }
                }
            }
        }
    }
`;
