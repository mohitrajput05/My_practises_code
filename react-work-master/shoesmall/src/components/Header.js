import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { logOut } from "../reduxconfig/UserSlice";
import { clearCart } from "../reduxconfig/CartSlice";
const Header = ()=>{
    const {isLoggedIn} = useSelector(state=>state.user.value);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const signout = ()=>{
       dispatch(clearCart());
       dispatch(logOut());
       navigate("signin");
    }
    return <>
     <header>
          <div className="header">
            <div className="header_top d_none1">
               <div className="container">
                  <div className="row">
                     <div className="col-md-4">
                        <ul className="conta_icon ">
                           <li><a href="#"><img src="images/call.png" alt="#"/>Call us: 0126 - 922 - 0162</a> </li>
                        </ul>
                     </div>
                     <div className="col-md-4">
                        <ul className="social_icon">
                           <li> <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i>
                              </a>
                           </li>
                           <li> <a href="#"><i className="fa fa-twitter"></i></a></li>
                           <li> <a href="#"> <i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                           <li> <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i>
                              </a>
                           </li>
                        </ul>
                     </div>
                     <div className="col-md-4">
                        <div className="se_fonr1">
                           <form action="#" >
                              <div className="select-box">
                                 <label for="select-box1" className="label select-box1"><span className="label-desc">English</span> </label>
                                 <select id="select-box1" className="select">
                                    <option value="Choice 1">English</option>
                                    <option value="Choice 1">Falkla</option>
                                    <option value="Choice 2">Germa</option>
                                    <option value="Choice 3">Neverl</option>
                                 </select>
                              </div>
                           </form>
                           <span className="time_o"> Open hour: 8.00 - 18.00</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="header_midil">
               <div className="container">
                  <div className="row d_flex">
                     <div className="col-md-4">
                        <ul className="conta_icon d_none1">
                           <li><a href="#"><img src="images/email.png" alt="#"/> demo@gmail.com</a> </li>
                        </ul>
                     </div>
                     <div className="col-md-4">
                        <a className="logo" href="#"><img src="images/logo.png" alt="#"/></a>
                     </div>
                     <div className="col-md-4">
                        <ul className="right_icon d_none1">
                           <li><a href="#"><img src="images/shopping.png" alt="#"/></a> </li>
                           <a href="#" className="order">Order Now</a> 
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
            <div className="header_bottom">
               <div className="container-fluid">
                  <div className="row">
                     <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                        <nav className="navigation navbar navbar-expand-md navbar-dark ">
                           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                           <span className="navbar-toggler-icon"></span>
                           </button>
                           <div className="collapse navbar-collapse" id="navbarsExample04">
                              <ul className="navbar-nav mr-auto">
                                 <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home</Link>
                                 </li>
                                 <li className="nav-item">
                                 <Link className="nav-link" to="products">Products</Link>
                                 </li>
                                 <li className="nav-item">
                                 <Link className="nav-link" to="">Brands</Link>
                                 </li>
                                 <li className="nav-item">
                                  <Link className="nav-link" to="">About us</Link>
                                 </li>
                                 <li className="nav-item">
                                   <Link className="nav-link" to="">Contact us</Link>
                                 </li>
                                 <li className="nav-item">
                                 <Link className="nav-link" to="view-cart">View cart</Link>
                                 </li>
                                 {
                                 !isLoggedIn &&
                                   <li className="nav-item">
                                     <Link className="nav-link" to="signin">Signin</Link>
                                   </li>
                                 }
                                 { !isLoggedIn &&
                                 <li className="nav-item">
                                   <Link className="nav-link" to="signup">Signup</Link>
                                 </li>
                                 }
                                 {isLoggedIn &&
                                  <li className="nav-item">
                                   <a onClick={signout} className="nav-link">Singout</a>
                                 </li>
                                 }
                              </ul>
                           </div>
                        </nav>
                     </div>
                     <div className="col-md-4">
                        <div className="search">
                           <form action="/action_page.php">
                              <input className="form_sea" type="text" placeholder="Search" name="search"/>
                              <button type="submit" className="seach_icon"><i className="fa fa-search"></i></button>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </header>
      </>
}
export default Header;