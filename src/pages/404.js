import React from 'react';

import BlogLayout from '../components/BlogLayout';
import SEO from '../components/seo';

class NotFoundPage extends React.Component {
    render() {
        const {data} = this.props;
        const siteTitle = data.site.siteMetadata.title;

        return (
            <BlogLayout
                location={this.props.location}
                title={siteTitle}
            >
                <SEO title='404: Not Found'/>
                <h1>Not Found</h1>
                <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
            </BlogLayout>
        );
    }
}

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
