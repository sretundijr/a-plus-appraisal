import React from 'react';
import Link from 'gatsby-link';

export default class BlogPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: props.data.allMarkdownRemark.edges,
    }
  }

  render() {
    return (
      <div className="container" >
        <div className="content">
          <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
        </div>
        {this.state.posts.filter(post => {
          return post.node.frontmatter.templateKey === "blog-post"
        })
          .map(({ node: post }) => (
            <div
              className="content"
              style={{ border: "1px solid #eaecee", padding: "2em 4em" }}
              key={post.id}
            >
              <p>
                <Link className="has-text-primary" to={post.frontmatter.path}>
                  {post.frontmatter.title}
                </Link>
                <span> &bull; </span>
                <small>{post.frontmatter.date}</small>
              </p>
              <p>
                {post.excerpt}
                <br />
                <br />
                <Link className="button is-small" to={post.frontmatter.path}>
                  Keep Reading →
                </Link>
              </p>
            </div>
          ))}
      </div >
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;

