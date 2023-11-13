import { Outlet, NavLink } from "react-router-dom"

const HelpLayout = () => {
  return (
    <div className="help-layout">
        <h2>check here for help</h2>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam non veritatis est natus perferendis 
            porro recusandae iusto accusamus possimus! Nemo. 
        </p>

        <nav>
            {/* to open the faq on a different page */}
            {/* <NavLink to='/faq'>Go the the Faq</NavLink> */}
            <NavLink to='faq'>Go the the Faq</NavLink>
            <NavLink to='Contact'>contact us</NavLink>
        </nav>
      {/* new */}
        <Outlet />
    </div>
  )
}

export default HelpLayout