import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div>
        <h2>Page not found</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quisquam 
            porro nobis vel reprehenderit numquam esse aliquid impedit nihil dignissimos 
            ratione quia, quaerat eveniet ex, labore, necessitatibus deleniti iure 
            expedita.
        </p>

        <p>Go back <Link to='/'>HomePage</Link> </p>
    </div>
  )
}

export default NotFoundPage;