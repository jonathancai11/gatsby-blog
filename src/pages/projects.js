import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import projectData from "../data/projects.json"

const Projects = ({ data: _, location }) => {
  return (
    <Layout location={location} title={"Projects"}>
      <SEO title="Projects" />
      <h1>Projects</h1>

      <div>
        <table className="project-table">
          <thead>
            <tr>
              <th> </th>
              <th>Name</th>
              {/* <th className="hidden-column-mobile">Year</th> */}
              <th className="hidden-column-mobile">Description</th>
              {/* <th className="hidden-column-mobile">Status</th> */}
              <th>Link</th>
              {/* <th>Results</th> */}
            </tr>
          </thead>
          <tbody>
            {projectData.map((project, i) => {
              return (
                <tr key={i}>
                  <td>
                    <img
                      src={project.icon || "https://i.imgur.com/s7ajAQw.png"}
                      style={{ width: "30px", marginRight: "10px" }}
                      alt=""
                    />
                  </td>
                  <td>{project.name}</td>
                  {/* <td className="hidden-column-mobile">{`20${project.year}`}</td> */}
                  <td className="hidden-column-mobile">
                    {project.description}
                  </td>
                  {/* <td className="hidden-column-mobile">{project.status}</td> */}
                  <td>
                    <a href={project.link} target="_blank" rel="noreferrer">
                      {project.link_display}
                    </a>
                  </td>
                  {/* <td>{project.results}</td> */}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export default Projects

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
