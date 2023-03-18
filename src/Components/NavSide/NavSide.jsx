import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavSide.css'


export default function NavSide({ children }) {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/Dashboard",
            name: "Dashboard",
            icon: <i class="fa-solid fa-gauge " />
        },
        {
            path: "/Products",
            name: "Products",
            icon: <i class="fa-solid fa-store " />
        },
        {
            path: "/AddProduct",
            name: "AddProduct",
            icon: <i class="fa-solid fa-cart-plus " />
        },
        {
            path: "/Categories",
            name: "Categories",
            icon: <i class="fas fa-list " />
        },
        {
            path: "/Orders",
            name: "Orders",
            icon: <i class="fa-solid fa-bag-shopping" />
        },
        {
            path: "/Users",
            name: "Users",
            icon: <i class="fa-solid fa-user" />
        }
    ]
    return (
        <>
            <div className="">
                <div style={{ width: isOpen ? "300px" : "50px" }} className="NS_sidebar">
                    <div className="top_section">
                        <h1 style={{ display: isOpen ? "block" : "none" }} className="NS_logo">Admin username</h1>
                        <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="NS_bars">
                            <i onClick={toggle} class="fa-solid fa-bars" />
                        </div>
                    </div>
                    {
                        menuItem.map((item, index) => (
                            <NavLink to={item.path} key={index} className="NS_link" activeclassName="active">
                                <div className="icon">{item.icon}</div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                            </NavLink>
                        ))
                    }
                </div>
                <main>{children}</main>
            </div>
        </>
    )
}
