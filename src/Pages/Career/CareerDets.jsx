import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const CareerDets = () => {
    const { ton } = useParams()
    const EachCareerDetails = useLoaderData()
    console.log(EachCareerDetails);
  return (
    <div className="career-details">
        <h2>{ton}</h2>
        <h2>{EachCareerDetails.title}</h2>
        <h3>Salary: {EachCareerDetails.salary}</h3>
        <h4>Location: {EachCareerDetails.location}</h4>
        <p>{EachCareerDetails.text}</p>
        <div className="details">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Reiciendis dolores dolor eaque, fuga, facilis in veritatis 
                ullam soluta quam ex debitis autem, sunt id alias necessitatibus 
                repudiandae facere non consequuntur nobis laborum modi? Veritatis 
                distinctio officia ullam quia quod dignissimos. Repellat accusantium 
                temporibus omnis dolor quae voluptatum unde id voluptate!
            </p>
        </div>
    </div>
  )
}

const myApi = 'http://localhost:3800/careers/'
export const CareerDetsLoader = async ({ params }) =>{
    const { ton } = params
    const res = await fetch(myApi + ton);
    if(!res.ok){
        throw Error('we no find the career')
    }
    return res.json()
}

export default CareerDets