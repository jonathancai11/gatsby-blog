import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactSoundCloud from "react-soundcloud-embedded"

const Beats = ({ location }) => {
  const beats = [
    "https://soundcloud.com/jonathancai/xbox-controller-type-beat",
    "https://soundcloud.com/jonathancai/scratching-your-toes",
    "https://soundcloud.com/jonathancai/similar-girls-type-beat",
    "https://soundcloud.com/jonathancai/sewer-water-type-beat",
  ]

  return (
    <Layout location={location} title={"Beats"}>
      <SEO title="Beats" />
      <h1>Beats</h1>
      <div className="section-content">
        <div>
          <p>
            {" "}
            In my free time, I make shitty beats on FL Studio and post a few on{" "}
            <a href="https://soundcloud.com/jonathancai" target="_blank">
              soundcloud
            </a>
          </p>
        </div>
        <div>
          {beats.map((beat, i) => (
            <div key={i}>
              <ReactSoundCloud url={beat} height={"200px"} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Beats