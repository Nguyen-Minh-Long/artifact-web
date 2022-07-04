import React, { useEffect } from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

const Navbar = () => {

  function animation() {
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top": itemPosNewAnimTop.top + "px",
      "left": itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top": itemPosNewAnimTop.top + "px",
        "left": itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }

  useEffect(() => {

    animation();
    $(window).on('resize', function () {
      setTimeout(function () { animation(); }, 500);
    });

  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-mainbg" >

      <NavLink className="navbar-brand navbar-logo" to="/" exact>
        Web Arifacts - TECH OTAKU SAVE THE WORLD
      </NavLink>


      <button
        className="navbar-toggler"
        onClick={function () {
          setTimeout(function () { animation(); });
        }}
        type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>
      </button>

      <div
        className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">

          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>

          <li className="nav-item active">
            <NavLink className="nav-link" to="/" exact>
              <i
                className="fas fa-snowflake">
              </i>Cyro
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/pyro" exact>
              <i
                className="fas fa-duotone fa-fire">
              </i>Pyro
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/electro" exact>
              <i
                className="fas fa-solid fa-bolt">
              </i>Electro
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/hydro" exact>
              <i
                className="fas fa-solid fa-water">
              </i>Hydro
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/ameno" exact>
              <i
                className="fas fa-solid fa-wind">
              </i>Ameno
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/geo" exact>
              <i
                className="fas fa-duotone fa-mountain">
              </i>Geo
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/other" exact>
              <i
                className="fas fa-solid fa-seedling">
              </i>Other
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Navbar;