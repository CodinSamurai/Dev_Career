import { useLoaderData, Link } from "react-router-dom"

const Career = () => {
  const careers = useLoaderData();

  return (
    <div className="careers">
      {careers.map(career =>(
        <Link to={career.id.toString()} key={career.id}>
          <h2>{career.title}</h2>
          <h3>{career.location}</h3>
          <p> {career.text} </p>
        </Link>
      ))}
    </div>
  )
}

//loader
const myApi = 'http://localhost:3800/careers'
export const TonyLoader = async () =>{
    const res = await fetch(myApi);
    if(!res.ok){
      throw Error("Couldn't Fetch data current, try again later and check your internet connection")
  }
    return res.json()
}

export default Career