import { Link } from "react-router-dom";
import logo from "../src/assets/logo.svg";
import { Dot, X } from "./Svgs";
import { useState } from "react";
const Header = () => {

    const [open, setOpen] = useState(false);
    
    return (
        <>
            <header style={styles.header}>
                <Link to="/"><img src={logo} alt="logo" /></Link>
                <div className="mobile" style={styles.linksContainer}>
                    <Link className="header--link" style={styles.link} to="/">Claim Portal</Link>
                    <Link className="header--link" style={styles.link} to="/">Tier System</Link>
                    <Link className="header--link" style={styles.link} to="/">Partners</Link>
                    <Link className="hide" style={{display: "flex", alignItems: "center"}} to="/">
                        <Dot />
                        <Dot />
                        <Dot />
                    </Link>
                </div>
                <div style={styles.linksContainer}>
                    <Link className="header--link--buy mobile"  style={{background: "#0119EF", fontSize: "14px", "color": "white", padding:"15px 20px", borderRadius: "5px"}}  to="/buy">Buy OBJ <span style={{marginLeft: "30px"}}>$0.003</span></Link>
                    <Link className="hide mobile" style={{...styles.empty, ...styles.rightLink,}} to="/"></Link>
                    <button className="header--link--connect--btn" style={{...styles.connectWallet, ...styles.rightLink, border: "none", cursor: "pointer"}} to="/">Connect wallet</button>
                    
                    <div 
                        className="mobile--btn"
                        role="button"
                        style={{display: "grid", gap: "10px", marginLeft: open ? "15px" : "30px", cursor: "pointer"}}
                        onClick={()=> setOpen(prev => !prev)}
                    >
                        <div style={styles.mobileBtn}></div>
                        <div style={styles.mobileBtn}></div>
                        <div style={styles.mobileBtn}></div>
                        {/*                         
                           */
                        }
                            
                    </div>
                </div>
            </header>
            {
                open && <header className="large--screen" style={{...styles.header, alignItems:"flex-start",  position: "fixed", top: "0", zIndex: "2", width:"100%", opacity:""}}>
                <div>
                    <div style={{...styles.linksContainer, flexDirection: "column", alignItems:"flex-start", justifyContent:"flex-start"}}>
                        <Link className="header--link" style={{...styles.link, marginRight:"0", marginBottom:"10px"}} to="/">Claim Portal</Link>
                        <Link className="header--link" style={{...styles.link, marginRight:"0", marginBottom:"10px"}} to="/">Tier System</Link>
                        <Link className="header--link" style={{...styles.link, marginRight:"0", marginBottom:"10px"}} to="/">Partners</Link>
                    </div>
                    <div style={styles.linksContainer}>
                        <Link className="header--link--buy"  style={{background: "#0119EF", fontSize: "14px", "color": "white", padding:"15px 20px", borderRadius: "5px"}}  to="/buy">Buy OBJ <span style={{marginLeft: "30px"}}>$0.003</span></Link>
                        <Link className="hide" style={{...styles.empty, ...styles.rightLink,}} to="/"></Link>
                    </div>    
                </div>

                <div onClick={()=>setOpen(prev => !prev)}>
                    <X />
                    {/* <div className="mobile--line" style={{...styles.mobileBtn,  width:"100%", transform: "rotate(35deg)"}}></div>
                    <div className="mobile--line" style={{...styles.mobileBtn,  transform: "rotate(-30deg)"}}></div> */}
                </div> 
            </header>
            }

        </>
    )
}

const styles = {
    header: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px",
        background: "#e6e8fd"
    },
    linksContainer: {
        display: "flex",
        alignItems: "center",
    },
    link: {
        marginRight: "15px",
        color: "#0119EF",
        fontSize: "18px",
        fontWeight: "500"
    },
    rightLink: {
        marginLeft: "15px"
    },
    empty: {
        
        // height: "34px",
        width: "46px",
        borderRadius: "5px",
        background: "#B0B8FA",
        padding: "22px 20px"
    },
    connectWallet: {
        background: "#B0B8FA",
        padding: "15px 25px",
        borderRadius: "35px",
        color: "#0119ef",
        fontSize: "14px",
        fontWeight: "500"
    },
    mobileBtn: {
        height: "2px",
        width: "30px",
        background: "rgb(1, 25, 239)"
    }

}

export default Header;