import { GatsbyNode } from "gatsby";
import path from "path";

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions }) => {
    const { createPage } = actions;

    // Create pages for Projects
    const {
        data: {
            allContentfulProject: { nodes: projects },
        },
    } = await graphql<any>(`
        {
            allContentfulProject {
                nodes {
                    slug
                }
            }
        }
    `);
    projects.forEach((node: { slug: string }) => {
        createPage({
            path: `/projects/${node.slug}`,
            component: path.resolve(`./src/templates/projects/index.tsx`),
            context: {
                slug: node.slug,
            },
        });
    });
};
