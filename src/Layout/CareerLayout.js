import { Outlet } from "react-router-dom"

const CareerLayout = () => {
  return (
    <div className="career-layout">
        <h2>Career</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, minus.</p>

        <Outlet />
    </div>
  )
}

export default CareerLayout