import { Link } from "react-router-dom";
import rocket from "../src/assets/rocket.png";
import discord from "../src/assets/discord.svg";
import telegram from "../src/assets/telegram.svg";
import m from "../src/assets/m.svg";
import linkedln from "../src/assets/linkedln.svg";

const Footer = () => {
    return (
        <footer>
            <div style={{background: "#000954", color: "#FFFF", marginTop: "60px", padding: "30px 0 0 0"}} >
                <div className="flex--column" style={styles.footerTop}>
                    <div>
                        <img src={rocket} width="175p" height="125px" alt="rocket" />
                        <h6 style={{fontSize: "14px", fontWeight: "500", margin: "10px 0 20px 0"}}>Contact us:</h6>
                        <h6 style={{fontSize: "14px", fontWeight: "500", color: "#FFFF"}}>For business: <a style={{color: "inherit"}} target="__blank" href="mailto:hello@seapad.fund">hello@seapad.fund</a></h6>
                        <h6 style={{fontSize: "14px", fontWeight: "500", color: "#FFFF"}}>For technology: <a style={{color: "inherit"}} target="__blank" href="mailto:hello@seapad.fund">hello@seapad.fund</a></h6>
                    </div>
                    <div></div>
                    <div className="grid" style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", marginLeft: "auto"}}>
                        <div className="links--container">
                            <Link style={{ ...styles.link, ...styles.footerLinksMargin}}><h5>Launcpad</h5></Link>
                            <Link style={styles.link}><h5>Projects</h5></Link>
                            <Link style={styles.link}><h5>Tier System</h5></Link>
                            <Link style={styles.link}><h5>Earn/Staking</h5></Link>
                            <Link style={styles.link}><h5>Claim Portal</h5></Link>
                        </div>
                        <div className="links--container" style={styles.footerLinksContainer}>
                            <Link style={{...styles.link, ...styles.footerLinksMargin}}><h5>SeaPad</h5></Link>
                            <Link style={styles.link}><h5>But SPT</h5></Link>
                            <Link style={styles.link}><h5>Terms Of Use</h5></Link>
                            <Link style={styles.link}><h5>Privacy Policy</h5></Link>
                            <Link style={styles.link}><h5>Protection Policy</h5></Link>
                        </div>
                        <div className="links--container" style={styles.footerLinksContainer}>
                            <Link style={{ ...styles.link,  ...styles.footerLinksMargin,}}><h5>Help Center</h5></Link>
                            <Link style={styles.link}><h5>Apply to Launch</h5></Link>
                            <Link style={styles.link}><h5>Docs</h5></Link>
                            <Link style={styles.link}><h5>Contact us</h5></Link>
                        </div>
                    </div>
                </div>
                <div  className="last--flex" style={{display:"flex", alignItems: "center", justifyContent:"flex-end", width:"90%", margin:"auto", paddingBottom: "50px"}}>
                    <div>
                        <Link ><img src={discord} alt="discord logo" /></Link>
                        <Link style={styles.socialIcon}><img src={telegram} alt="telegram logo" /></Link>
                        <Link style={styles.socialIcon}><img src={m} alt="microsoft logo" /></Link>
                        <Link style={styles.socialIcon}><img src={linkedln} alt="linkeln logo" /></Link>
                    </div>
                </div>
                <div style={{padding: "20px", borderTop: "1px solid #E6E8FD", textAlign: "center", fontSize: "14px", "fontWeight": "500"}}>
                    &copy; 2023 SeaPad<sup>TM</sup>. All Rights Reserved
                </div>
            </div>
        </footer>
    )
}

const styles = {
    footerTop: {
        display: "flex",
        alignItems: "center",
        width: "90%",
        margin: "50px auto 0 auto" 
    },
    footerLinksContainer: {
        marginLeft: "20px"
    },
    footerLinksMargin: {
        marginBottom: "15px"
    },
    link: {
        color: "#FFFFFF",
        fontSize: "16px",
        fonttWeight: "500",
        display: "block",
        marginBottom: "5px"
    },
    socialIcon: {
        marginLeft: "15px",
    }
}

export default Footer;