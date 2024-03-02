import { Circle } from "./Svgs"
const Table = ({ text, amount }) => {
    return (
        <div style={styles.tableContainer}>
            <h5 className="card--desc" style={{fontSize: "16px", fontWeight: "400", color: "#000000", width: "70%",}}>{text}</h5>
            <h5 className="card--desc" style={{fontSize: "16px", fontWeight: "400"}}>{amount}</h5>
        </div>
    )
}

const Card = ({ data }) => {

    return (
        <div className="real--card--container" style={styles.cardContainer}>
            <div style={{position: "relative"}}>
                <img className="card--img" style={styles.img} src={data?.img} alt={data?.img} />
                <h5 className="card--duration" style={styles.duration}>{data?.time}</h5>
            </div>
            <div style={styles.tokenInfo}>
                <div style={styles.circleAndTokenInfoContainer}>
                    {/* <Circle /> */}
                    <div className="card--circle" style={styles.circle}></div>
                    {/* fontSize: "24px", this is for data?.name */}
                    <div className="card--title" style={{fontWeight: "600",}}>{data?.name}</div>
                </div>
                <h6 className="card--desc" style={{fontSize: "16px", fontWeight: "400", lineHeight: "24px", marginBottom: "10px"}}>{data?.description}</h6>
                <Table
                    text="Fundraising goal"
                    amount={data?.fundraisingGoal}
                />
                <Table
                    text="Token price"
                    amount={data?.tokenPrice}
                />
                <Table
                    text="Token Network"
                    amount={data?.tokenNetwork}
                />
                <Table
                    text="Join Network"
                    amount={data.joinNetwork}
                />
                <button className="card--desc" style={styles.button}>{data?.type ? "Participate" : "Token sale"}</button>
            </div>
        </div >
    )
}

const styles = {
    cardContainer: {
        borderRadius: "7px",
        height: "auto",
        boxShadow: "0px 0px 5px 0px #00000040",
    },
    img: {
        width: "100%",
        height: "235px",
        borderRadius: "5px 5px 0 0"
    },
    duration: {
        background: "#000954",
        padding: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: "-30px",
        width: "100%",
        color: "#FFFFFF",
        fontSize: "14px",
        fontWeight: "500"
    },
    tokenInfo: {
        padding: "20px"
    },
    circleAndTokenInfoContainer: {
        display: "flex",
        alignItems: "center",
        marginBottom: "20px",
        marginTop: "30px"
    },
    circle: {
        height: "50px",
        width: "50px",
        borderRadius: "50%",
        background: "#D9D9D9",
        marginRight: "10px",
    },
    tableContainer: {
        display: "flex",
        alignItems: "center",
        // justifyContent: "space-between",
        padding: "10px 0"
    },
    button: {
        display: "block",
        // background: "#0119ef",
        border: "none",
        textAlign: "center",
        borderRadius: "13px",
        color: "#fff",
        width: "100%",
        padding: "10px",
        background: "linear-gradient(180deg, #0119EF 0%, #000954 100%)",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "500",
        marginTop: "auto"

    }
}

export default Card;