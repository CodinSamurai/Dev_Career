import { 
  BrowserRouter, 
  createBrowserRouter,
  Routes, 
  Route, Link, NavLink, 
  createRoutesFromElements, 
  RouterProvider} from "react-router-dom";

//pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Faq from "./Pages/help/faqs";
import Contacts, { ContactAct } from "./Pages/help/contacts";
import Career, { TonyLoader } from "./Pages/Career/Career";
//Error Page
import NotFoundPage from "./Pages/NotFound/NotFoundPage";

//layout
import Layout from "./Layout/Layout";
import HelpLayout from "./Layout/helpLayout";
import CareerLayout from "./Layout/CareerLayout";
import CareerDets, { CareerDetsLoader } from "./Pages/Career/CareerDets";
import CareerErrorPage from "./Pages/Career/CareerErrorPage";

function App() {
  const Tony = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />


        <Route path="help" element={<HelpLayout />} >
            <Route path="faq" element={<Faq />} />
            <Route path="Contact" element={<Contacts />} action={ContactAct} />
        </Route>
        {/* to open the faq on a different page */}
        {/* <Route path="faq" element={<Faq />} /> */}

        <Route path="career" element={<CareerLayout />} errorElement={<CareerErrorPage/>} >
            <Route 
              index 
              element={<Career />}
              loader={TonyLoader}
              //it could be added here or added to the route element beside layout above but note
              // the layout component would be rendered if there was an error to display
              // errorElement={<CareerErrorPage/>}
            />
            <Route 
              path=":ton" 
              element={<CareerDets />} 
              loader={CareerDetsLoader}
              // errorElement={<CareerErrorPage/>}
            />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
    </Route>
    )
  )
  return (
    <RouterProvider router={Tony} />
  );
}

export default App
