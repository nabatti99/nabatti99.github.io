import { HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import PageHead from "../../components/page-head/page-head";
import PageBody from "../../components/page-body/page-body";

const ContactPage: React.FC<PageProps> = () => {
    return (
        <PageBody>
            <section>Content 1</section>
            <section>Content 2</section>
            <section>Content 3</section>
        </PageBody>
    );
};

export default ContactPage;

export const Head: HeadFC = () => <PageHead title="Contact" />;
