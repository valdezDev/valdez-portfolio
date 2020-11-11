import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <main className="error-page">
        <div className="error-container">
          <h1>sorry about that! </h1>
          <h2>Looks like something went wrong...</h2>
          <h4>You can directly email me at pvaldezdev@gmail.com</h4>
          <Link to="/" className="btn">
            back home
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error
