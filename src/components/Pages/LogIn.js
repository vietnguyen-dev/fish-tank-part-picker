import Layout from "../UI/Layout"
import { Link } from "react-router-dom"

const LogIn = () => {
    return (
      <Layout>
          <Link to='/create-account'><button>Create New Account</button></Link>
      </Layout>
    )
}

export default LogIn
