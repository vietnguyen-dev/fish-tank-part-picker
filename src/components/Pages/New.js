import React from 'react'
import Layout from '../UI/Layout'
import { Link } from "react-router-dom";

const New = () => {
    return (
      <Layout>
        <h2>New to Aquascaping</h2>
        <Link to="/tank-builder">
          <button className='new-button'>Build your first Tank!</button>
        </Link>
      </Layout>
    );
}

export default New
