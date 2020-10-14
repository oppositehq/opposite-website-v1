import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Modal } from "../components/team-modal";
import { Cards } from "../components/team-card";
import "../assets/css/style.css";

function Team({ match }) {
  let { id } = match.params;

  return (
    <>
      <Cards selectedId={id} />
      <AnimatePresence>
        {id && <Modal id={id} key="modal" />}
      </AnimatePresence>
    </>
  );
}

const IndexPage = () => {
  const data = useStaticQuery(query);

  return (
    <div className="container">
      <AnimateSharedLayout type="crossfade">
        <Router>
          <Route path={["/:id", "/"]} component={Team} />
        </Router>
      </AnimateSharedLayout>
    </div>
  );
};

const query = graphql`
  query {
    strapiHomepage {
      hero {
        title
      }
      seo {
        metaTitle
        metaDescription
        shareImage {
          publicURL
        }
      }
    }
    allStrapiArticle(filter: { status: { eq: "published" } }) {
      edges {
        node {
          strapiId
          slug
          title
          category {
            name
          }
          image {
            childImageSharp {
              fixed(width: 800, height: 500) {
                src
              }
            }
          }
          author {
            name
            picture {
              childImageSharp {
                fixed(width: 30, height: 30) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
