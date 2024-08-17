
import { Route, Routes } from "react-router-dom";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Main from "./component/Main";
import Cookies from "./component/Cookies";
import Privacy from "./component/Privacy";
import Delivery from "./component/Delivery";
import Allrecipes from "./component/Allrecipes";
import Error from "./component/Error";
import Recipedetails from "./component/Details/Recipedetails";
import Breakfast from "./component/Breakfast";
import Sandwiches from "./component/Sandwiches";
import Vegan from "./component/Vegan";
import Chicken from "./component/Chicken";
import Twistedgreen from "./component/Twistedgreen";
import Spicy from "./component/Spicy";
import Pasta from "./component/Pasta";
import Dessert from "./component/Dessert";
import Cocktails from "./component/Cocktails";
import Basecamp from "./component/Basecamp";
import Allarticles from "./component/Allarticles";
import Articledetail from "./component/Details/Articledetail";
import Team from "./component/Team";
import Teamdetail from "./component/Details/Teamdetail";
import Show from "./component/Show";
import Signin from "./component/Signin";
import Signup from "./component/Signup";
import Allshop from "./component/Allshop";
import Trending from "./component/Trending";
import Features from "./component/Features";
import Opinion from "./component/Opinion";
import Interviews from "./component/Interviews";
import News from "./component/News";
import Contact from "./component/Contact";
function App() {
  

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/cookies" element={<Cookies />}/>
        <Route path="/team" element={<Team />}/>
        <Route path="/privacy" element={<Privacy />}/>
        <Route path="/delivery" element={<Delivery />}/>
        <Route path="/allrecipe" element={<Allrecipes />}/>
        <Route path="/breakfast" element={<Breakfast />}/>
        <Route path="/sandwiches" element={<Sandwiches />}/>
        <Route path="/vegan" element={<Vegan />}/>
        <Route path="/spicy" element={<Spicy />}/>
        <Route path="/chicken" element={<Chicken />}/>
        <Route path="/twistedgreen" element={<Twistedgreen />}/>
        <Route path="/pasta" element={<Pasta />}/>
        <Route path="/features" element={<Features />}/>
        <Route path="/opinion" element={<Opinion />}/>
        <Route path="/inter" element={<Interviews />}/>
        <Route path="/news" element={<News />}/>
        <Route path="/dessert" element={<Dessert />}/>
        <Route path="/cocktails" element={<Cocktails />}/>
        <Route path="/basecamp" element={<Basecamp />}/>
        <Route path="/show" element={<Show />}/>
        <Route path="/trending" element={<Trending />}/>
        <Route path="/allshop" element={<Allshop />}/>
        <Route path="/sign" element={<Signin />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/allarticles" element={<Allarticles />}/>
        <Route path="/recipes/:all" element={<Recipedetails />}/>
        <Route path="/articles/:all" element={<Articledetail />}/>
        <Route path="/team/:all" element={<Teamdetail />}/>
        <Route path="*" element={<Error />}/>
        {/* <Route path="/recipes/undefined" element={<Error />}/>
        <Route path="/team/undefined" element={<Error />}/>
        <Route path="/article/undefined" element={<Error />}/> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
