const Table = ({ keyy, value }) => {
    return (
        <div className="tier--white--table" style={{display: "flex", justifyContent: "space-between", fontSize: "14px", fontWeight: "400", padding:"10px 0" }}>
            <h4 style={{color: "#696969", minWidth:"max-content"}}>{keyy}</h4>
            <h3 style={{color: "#000000", width: "70%", textAlign:"right"}}>{value}</h3>
        </div>
    )
}
const TierWhiteList = ( { data, isConnected, handleClick }) => {
    //479px
    return (
        <section style={{width: "100%", borderRadius: "20px",boxShadow: "0px 0px 4px 0px #00000040"}}>
            <div className="tier--white--heading" style={{position: "relative", borderRadius:"20px 20px 0 0", padding: "30px", background: "#0119EF", fontWeight: "600", fontSize: "18px", color: "#FFFFFF", textAlign:"center"}}>
                <h5>TIER - WHITELIST</h5>
               {data &&  
                <h6 style={{position:"absolute", padding: "5px", bottom:"-25px", left: "0", width: "100%",background: "#000954", fontSize: "12px", fontWeight: "500"}}>
                    {data?.endTime}
                </h6>
                }
            </div>
            <div style={{padding: "40px 10px"}}>
                <div>
                    {data?.info && data.info.map((datum, id) => {
                        return <Table key={id} keyy={datum?.keyy} value={datum?.value}  />
                    })}
                </div>
                <button 
                    className="tier--white--btn"
                    style={{width: "60%", background: "linear-gradient(180deg, #0119EF 0%, #000954 100%)",
                    textAlign: "center", fontSize:"16px", fontWeight:"500", color: "#FFFFFF", padding:"20px",
                    borderRadius: "20px", margin: "auto", cursor: "pointer", border:"none", marginTop: "20px"
                }}
                    onClick={(e)=>handleClick(e.target)}
                >
                    {isConnected ?"Buy" : "Connect wallet"  }
                </button>
            </div>
        </section>
    )
}

export default TierWhiteList;