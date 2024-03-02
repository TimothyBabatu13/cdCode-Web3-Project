import discord from "../src/assets/discordBlue.svg";
import telegram from "../src/assets/telegramBlue.svg";
import m from "../src/assets/mBlue.svg";
import linkedln from "../src/assets/linkedlnBlue.svg";
import bnb from "../src/assets/bnb.svg";
import eth from "../src/assets/Ethereum.svg";
import TierWhiteList from "../Components/TierWhiteList";
import { useNavigate } from "react-router-dom";

const data = [
   {
    endTime : "Ended: Nov 29, 2023",
    info: [
        {
            keyy: "Total raised:",
            value: "$46,660.24"
        },
        {
            keyy: "Token price:",
            value: "$0.0025"
        },
        {
            keyy: "Start time:",
            value: "15:00 PM UTC, Nov 28, 2023"
        },
        {
            keyy: "End time:",
            value: "15:00 PM UTC, Nov 29, 2023"
        },
        {
            keyy: "Vesting:",
            value: "TGE 20%, 0 month cliff, 6 months linear vesting"
        },
        {
            keyy: "Max allocation:",
            value: "TBD"
        },
        {
            keyy: "Guarantee",
            value: "24 - Refundable"
        },
        {
            keyy: "Type:",
            value: "Only Tier"
        },
    ]
   },
   {
    endTime: "Ended: Nov 29, 2023",
    info: [
        {
            keyy: "Total raised:",
            value: "$46,660.24"
        },
        {
            keyy: "Token price:",
            value: "$0.0025"
        },
        {
            keyy: "Start time:",
            value: "15:00 PM UTC, Nov 28, 2023"
        },
        {
            keyy: "End time:",
            value: "15:00 PM UTC, Nov 29, 2023"
        },
        {
            keyy: "Vesting:",
            value: "TGE 20%, 0 month cliff, 6 months linear vesting"
        },
        {
            keyy: "Max allocation:",
            value: "TBD"
        },
        {
            keyy: "Guarantee",
            value: "24 - Refundable"
        },
        {
            keyy: "Type:",
            value: "Only Tier"
        },
    ]
   }
]
const Buy = () => {

    const navigate = useNavigate();

    const toBuy = (id) => {
        navigate(`/buy/${id}`)
    }
    const handleClick = (e, id) => {
        const text = e.innerText;
        if(text === "Connect wallet"){
            return console.log("Wallet is not connrcted...");
        }
        toBuy(id)
    }
    return (
        <section className="buy" style={styles.container}>
           <div className="flex"  style={{display: "flex", justifyContent: "space-between"}}>
                <div>
                    <h2 className="buy--earn--text" style={{fontSize: "40px", fontWeight: "400"}}>Earn Network</h2>
                    <h3 className="buy--defi--text" style={{fontSize: "30px", fontWeight: "400"}}>Defi</h3>
                    <div style={{display:"flex", alignItems: "center", marginTop: "10px"}}>
                        <img style={styles.socialIcon} src={discord} alt="discord logo" />
                        <img style={styles.socialIcon} src={telegram} alt="telegram logo" />
                        <img style={styles.socialIcon} src={m} alt="microsoft logo" />
                        <img style={{cursor: "pointer"}} src={linkedln} alt="linkeln logo" />
                    </div>
                </div>
                <div className="text--align--right" style={styles.textRight}>
                    <h5 className="buy--total--raised--text" style={{fontSize: "30px", fontWeight: "400"}}>Total Raised</h5>
                    <h1 className="buy--total--amount--raised--text" style={{fontSize: "40px", fontWeight: "400"}}>$51,694.68</h1>
                    <button className="public--sale--btn" style={styles.publicSaleButton}>Puublic Sale</button>
                    <div className="justify--center" style={styles.tokenNetworkContainer}>
                        <h5 className="token--info" style={styles.tokenNetworkContent}>Token Network:</h5>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <img src={eth} alt="eth logo" />
                            <h5 style={{...styles.tokenNetworkContent, marginLeft: "20px"}}>ETH</h5>
                        </div>
                    </div>
                    <div className="justify--center" style={styles.tokenNetworkContainer}>
                        <h5 className="token--info" style={styles.tokenNetworkContent}>Join Network:</h5>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <img src={bnb} alt="bnb logo" />
                            <h5 style={{...styles.tokenNetworkContent, marginLeft: "20px"}}>BNB</h5>
                        </div>
                    </div>
                </div>
           </div>
           <div className="info--on--presale" style={
                {display: "flex", alignItems: "center", justifyContent: "center", background: "#B0B8FA", 
                width: "80%", margin:"auto", borderRadius: "60px", padding: "0 20px",
                marginTop: "20px"
                }
            }>
                <h3 style={{flex: "1", fontSize: "24px", fontWeight: "700", color: "#0119EF"}}>YOUR TIER:</h3>
                <h5 style={{flex: "1", textAlign: "center", background: "#E6E8FD", padding: "40px 0", fontSize: "14px", fontWeight: "400",}}>Snapshot Tier Has Ended</h5>
                <h5 style={{display: "flex", flex: "1", alignItems:"flex-end", flexDirection: "column",}}>
                    <p style={{fontSize: "14px", fontWeight: "400", color: "#0119EF", marginBottom: "3px"}}>Stake SPT 12h before</p>
                    <p style={{fontSize: "14px", fontWeight: "400", color: "#0119EF", marginBottom: "3px"}}>IDO Sale to join</p>
                    <button style={styles.stakeButton}>Stake</button>
                </h5>
           </div>
           <div className="buy--grid--container" style={{display: "grid", width: "90%", marginRight: "auto", marginLeft: "auto", marginTop: "50px", gridTemplateColumns: "repeat(2, 1fr)", textAlign: "center", placeItems:"center", gap: "50px"}}>
                {
                    data.map((datum, id)=>(
                        <TierWhiteList 
                            key={id} 
                            isConnected={false} 
                            data={datum}
                            handleClick={(e)=> handleClick(e, id)}
                        />
                    ))
                }
                {/* <TierWhiteList isConnected={false}/> */}
           </div>
        </section>
    )
}

const styles = {
    container : {
        width: "90%",
        margin: "auto",
        padding: "70px 0",
    },
    socialIcon: {
        marginRight: "10px",
        cursor: "pointer"
    },
    textRight: {
        textAlign: "right"
    },
    publicSaleButton: {
        background: "#B0B8FA", 
        color: "#0119EF", 
        fontSize: "14px", 
        border: "none",
        borderRadius: "20px",
        padding: "10px 15px",
        cursor: "pointer",
    },
    tokenNetworkContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "10px"
    },
    tokenNetworkContent: {
        fontWeight:"600",
        fontSize: "14px"
    },
    stakeButton: {
        background: "linear-gradient(180deg, #0119EF 0%, #000954 100%)",
        border: "none",
        fontSize: "12px",
        fontWeight: "500",
        color: "#FFFFFF",
        padding: "10px 15px",
        borderRadius: '10px',
        cursor: "pointer"
    }
}
export default Buy;