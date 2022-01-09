import React from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    // NavBtn,
    // NavBtnLink,
} from "./NavbarElements";

const Navbar = (props) => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
                Eth-Validation<br/>
            </NavLogo>
            <Bars />

            <NavMenu>
                {(() => {
                    if(props.info.role===3){
                    return(
                    <>
                        <NavLink to="/" >
                            Beranda
                        </NavLink>
                        <NavLink to="/Add" >
                            Tambah User
                        </NavLink>
                        <NavLink to="/PDF" >
                            Buat Surat
                        </NavLink>
                        <NavLink to="/Up" >
                            Upload Surat
                        </NavLink>
                        <NavLink to="/Main" >
                            Scan Qr
                        </NavLink>
                    </>
                    )
                    }else if(props.info.role===2){
                        return(
                            <>
                            <NavLink to="/" >
                                Beranda
                            </NavLink>
                            <NavLink to="/Main" >
                                Scan Qr
                            </NavLink>
                            </>
                        )
                    }else if(props.info.role===1){
                        return(
                            <>
                            <NavLink to="/" >
                                Beranda
                            </NavLink>
                            <NavLink to="/PDF" >
                                Buat Surat
                            </NavLink>
                            <NavLink to="/Up" >
                                Upload Surat
                            </NavLink>
                            <NavLink to="/Main" >
                                Scan Qr
                            </NavLink>
                            </>
                        )
                    }else if(props.info.role===0){
                        return(
                            <>
                            <NavLink to="/" >
                                Beranda
                            </NavLink>
                            <NavLink to="/Main" >
                                Scan Qr
                            </NavLink>
                            </>
                        )
                    }
                })()}
            </NavMenu> 
            <p className="uName">{props.uname}</p>
           </Nav> 
        </>
    );
};
export default Navbar;