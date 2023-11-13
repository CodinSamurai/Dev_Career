import { useRouteError,Link } from "react-router-dom"

const CareerErrorPage = () => {
    const err = useRouteError();

  return (
    <div className="careers-error">
        <p>404! Not found</p>
        <p>{err.message}</p>
        <Link to='/'>Back HOME</Link>
    </div>
  )
}

export default CareerErrorPage