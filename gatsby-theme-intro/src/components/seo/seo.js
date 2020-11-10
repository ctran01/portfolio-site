import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Helmet } from "react-helmet"
import image from "../../themes/chris.png"

const SEO = props => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
            locale
            title
          }
        }
      }
    `
  )

  const {
    description = site.siteMetadata.description,
    meta = [],
    title = site.siteMetadata.title,
  } = props

  return (
    <Helmet
      htmlAttributes={{
        lang: site.siteMetadata.locale,
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: "test2",
        },
        {
          name: `image`,
          property: "og:image",
          content: { image },
        },
        {
          name: `author`,
          content: "Chris Tran",
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: "test",
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ].concat(meta)}
    />
  )
}

SEO.propTypes = {
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export default SEO
