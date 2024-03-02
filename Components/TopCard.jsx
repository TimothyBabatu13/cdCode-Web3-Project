import { ArrowDown } from "./Svgs"

const Table = ({ first, second }) => {
    return (
        <div style={{...styles.flex,}}>
            <div style={{...styles.flex, width: "90%"}}>
                <div className="top--card--circle" style={styles.circle}></div>
                <h5 className="top--card--desc" style={{color: "black", fontSize: "16px", fontWeight: "500"}}>{first}</h5>
            </div>
            <h5 className="top--card--desc" style={{color: "#0119EF", fontSize: "16px", fontWeight: "500"}}>{second}</h5>
        </div>
    )
}

const TopCard = ({ title, data }) => {
    return (
        <section className="top--card--container" style={styles.topCardContainer}>
            <h3 className="card--desc" style={styles.title}>{title}</h3>
            <div >
                <div className="top--card--height" style={{padding: "20px", minHeight: "290px"}}>
                {
                    data &&
                    data.map((datum, id) => (
                        <div key={id} style={{marginBottom: "10px"}}>
                            <Table
                                first={datum?.key}
                                second={datum?.value}
                        />
                        </div>
                    ))
                }
                </div>
                <div style={{textAlign: "center", marginTop: "auto"}}>
                    <ArrowDown />
                </div>
            </div>
        </section>
    )
}

const styles = {
    topCardContainer: {
        borderRadius: "7px",
        height: "376px",
        boxShadow: "0px 0px 5px 0px #00000040"

    },
    flex: {
        display: "flex",
        alignItems: "center"
    },
    circle: {
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        marginRight: "10px",
        background: "#D9D9D9"
    },

    title: {
        background: "linear-gradient(180deg, #0119EF 0%, #000954 100%)",
        textAlign: "center",
        borderRadius: "5px 5px 0 0",
        color: "#ffff",
        padding: "10px 0",
        fontSize: "16px",
        fontWeight: "600"
    }
}

export default TopCard;