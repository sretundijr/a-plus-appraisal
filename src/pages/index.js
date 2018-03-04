import React from "react";
import Link from "gatsby-link";
import Script from "react-load-script";
import graphql from "graphql";

import Testimonials from '../components/Testimonials';
import Footer from '../components/footer';
import QuoteForm from '../components/quote-form';

export default class IndexPage extends React.Component {

  handleScriptLoad() {
    if (typeof window !== `undefined` && window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
    window.netlifyIdentity.init();
  }

  getTestimonials() {
    const { edges } = this.props.data.allMarkdownRemark;
    const filtered = edges.filter(item => {
      return item.node.frontmatter.testimonials != null
    });
    const { testimonials } = filtered[0].node.frontmatter;
    return testimonials;
  }

  render() {
    return (
      <section className="section">
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={() => this.handleScriptLoad()}
        />
        <div
          className="full-width-image-container"
          style={{
            backgroundColor: 'yellow',
          }}
        >
          large image here
        </div>

        <div>
          welcome blurb
        </div>

        {/* testimonials */}
        <div
          className="hero is-bold"
          style={{
            marginTop: '50px',
            height: 'auto',
          }}
        >
          <div className="hero-body container columns">
            <div className="column has-text-centered">
              <h1 className="is-size-3 has-text-weight-bold">
                Testimonials
                </h1>
              <h2 className="is-size-5">
                We provide an excellent client experience
              </h2>
              <p className="content is-size-5">Here's what they have to say about us</p>
            </div>
            <div
              className="column"
              style={{
                height: 'auto',
              }}
            >
              {/* TODO needs key added to resolve react error */}
              <Testimonials testimonials={this.getTestimonials()} />
            </div>
          </div>
        </div>

        <div className="columns">
          <div
            className='column is-half is-offset-3'
            style={{
              marginTop: '50px',
              marginBottom: '50px',
            }}
          >
            <h3 className="is-size-3 has-text-weight-bold">Get A Quote</h3>
            <QuoteForm />
          </div>
        </div>

        <Footer />
      </section>
    );
  }
}

// TODO rework this query if possible
export const pageQuery = graphql`
  query IndexQuery {
          allMarkdownRemark {
        edges {
          node {
        id
          frontmatter {
          testimonials {
        author
        quote
      }
    }
  }
}
} 
}
`;

