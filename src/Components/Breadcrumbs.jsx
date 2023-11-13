import { useLocation,Link } from "react-router-dom"

const Breadcrumbs = () => {
    const loc = useLocation()
    console.log(loc);
    let currLink = '';
    //let currLink = [];

    const crumbs = loc.pathname.split('/')
      .filter(crumb => crumb !== '')
      .map(crumb => {
        currLink += `/${crumb}`
        // currLink.push(`/$crumb`)

        return(
          <div className="crumb" key={crumb}>
            <Link to={currLink}>{crumb}</Link>
            {/* <Link to={currLink.join('')}>{crumb}</Link> */}
          </div>
        )
      })
  return (
    <div className="breadcrumbs">
      {crumbs}
    </div>
  )
}

export default Breadcrumbs