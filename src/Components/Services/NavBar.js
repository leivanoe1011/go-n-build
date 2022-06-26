

import React, { useState, useEffect, useContext } from 'react';

import {
    Link, Redirect
} from "react-router-dom";
import Button from "react-bootstrap/Button"

import AuthService from "../../Services/AuthService";
import { AuthContext } from "../../Context/AuthContext"

import "./services.css";


function NavBar() {

    const logo = require("../../media/GB_100_logo.png").default;


    // const { isAuthenticated, setIsAuthenticated, role } = useContext(AuthContext);
    const { setIsAuthenticated, role } = useContext(AuthContext);


    let listener = null
    const [scrollState, setScrollState] = useState("clear");
    
    
    // const [userRole, setUserRole] = useState("");

    // useEffect(
    //     () => {
    //         setUserRole(userRole);
    //     }
    // )


    useEffect(() => {
        
        listener = document.addEventListener("scroll", e => {
            var scrolled = document.scrollingElement.scrollTop
            if (scrolled >= 120) {
                if (scrollState !== "bg-dark") {
                    setScrollState("bg-dark")
                }
            } else {
                if (scrollState !== "top") {
                    setScrollState("clear")
                }
            }
        })
        return () => {
            document.removeEventListener("scroll", listener)
        }
    }, [scrollState])


    const onClickLogoutHandler = () => {
        AuthService.logout().then(data => {
            if (data.success) {
                // setUser(data.user);
                setIsAuthenticated(false);
                // return  <Redirect  to="/" />
                return <Redirect to="/" />
       
            }
        });
    }

    const unauthenticatedNavBar = () => {

        return (
            <>
                {/* It's only here to create a link */}
                {/* <div className="log-in float-right">
                    <a data-toggle="modal" data-target="#myModal" href="#">
                        log in
                                </a>
                    <Login />
                </div> */}

                <li className="nav-item">
                    <Link className="nav-link" to="/login" >Login</Link>
                </li>

            </>
        )
    }


    const notAdminUserNavLink = () => {

        return (
            <>
                {(role === "teacher" && role === "admin") ? <Button href="/createForm">Create Assignment</Button> : null}

            </>
        )
    }

    const adminUserNavLinks = () => {

        return (
            <>
                {/* <Button href="/createForm">Create Assignment</Button>
                <Button href="/classCreate">Create Class</Button>
                <Button href="/adminCreateUser">Admin Create User</Button> */}


                <li className="nav-item">
                    <Link className="nav-link" to="/adminCreateUser">Create User</Link>
                </li>


            </>
        )
    }


    const authenticatedNavBar = () => {
        return (
            <>
                {(role === "admin") ? adminUserNavLinks() : notAdminUserNavLink()}


                <li className="nav-item">
                    <Link className="nav-link" to="/dashboard">Dashboard</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/logout" onClick={onClickLogoutHandler}>Logout</Link>
                </li>


            </>
        )
    }

    const imageStyle = {
        marginBottom: "-10px",
        marginTop: "-5px",
    }

    return(
        <div>    
            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <Link style={imageStyle} className="nav-link" to="/">
                    <img style={imageStyle} src={logo} />
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto ">
                        
                        <li className="nav-item">
                            <Link className="nav-link thumbnail" to="/WhatWeDo">WHAT WE DO</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link thumbnail" to="/PastProject">PAST PROJECTS</Link>
                        </li>

                        
                        <li className="nav-item">
                            <Link className="nav-link thumbnail" to="/CurrentProject">CURRENT PROJECTS</Link>
                        </li>


                        <li className="nav-item">
                            <Link className="nav-link thumbnail" to="/Contact">CONCTACT US</Link>
                        </li>

                        {/* {isAuthenticated ? authenticatedNavBar() : unauthenticatedNavBar()} */}


                    </ul>
                    <span className="navbar-text">
                        <button type="button" className="btn btn-danger">DONATE</button>
                    </span>
                </div>
            </nav>

        </div>
    )
}

export default NavBar;













