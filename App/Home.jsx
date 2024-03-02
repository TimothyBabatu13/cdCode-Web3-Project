import Card from "../Components/Card";
import { ArrowDown, Search, SearchIconWhite, BackArrow } from "../Components/Svgs";
import TopCard from "../Components/TopCard";
import first from "../src/assets/first.png";
import second from "../src/assets/second.png";
import third from "../src/assets/third.png";
import fourth from "../src/assets/fourth.png";
import fifth from "../src/assets/fifth.png";
import sixth from "../src/assets/sixth.png";
import newsFirst from "../src/assets/newsFirst.png";
import newsSecond from "../src/assets/newsSecond.png";
import newsThird from "../src/assets/newsThird.png";
import newsFourth from "../src/assets/newsFourth.png";
import { useState } from "react";

const Buttons = ({ text, active, onClick }) => {

    return (
        <button
            className="home--btn"
            onClick = {() =>onClick(text)} 
            style={
                {cursor: "pointer", border: "none",color: active == text ? "#FFFFFF" : "#0119EF", 
                background: active == text ? "#0119EF" : "transparent", 
                borderRadius: active ? "20px" : null, padding: active ? "10px 30px" : null, 
                margin: active ? "2px" : "0", fontSize: "18px", fontWeight: "600"
            }}
        >
            {text}
        </button>
    )
}

const data = [
    "All",
    "Ongoing",
    "Upcoming",
    "Ended"
]

const dotData = ["","","",""]

const CardData = [
    {
        img: first,
        name: "R3V3NGE (Polyland Studio) - Seed",
        description: "PolyLand Studios is a Web3 gaming studio focused on crafting innovativ...",
        fundraisingGoal: "$1000,000",
        tokenPrice: "$0.0075",
        tokenNetwork: "ETH",
        joinNetwork: "BNB",
        time: "Ends in: 1d : 22h : 33m : 5s",
        type: true
    },
    {
        img: second,
        name: "Tortle Ninja",
        description: "Tortle Ninja is a visual programming language for Defi that makes it e...",
        fundraisingGoal: "$1000,000",
        tokenPrice: "$0.0075",
        tokenNetwork: "ETH",
        joinNetwork: "BNB",
        time: "Starts in TBD",
        type: true
    },
    {
        img: third,
        name: "R3V3NGE (Polyland Studio) - Seed",
        description: "PolyLand Studios is a Web3 gaming studio focused on crafting innovativ...",
        fundraisingGoal: "$1000,000",
        tokenPrice: "$0.0075",
        tokenNetwork: "ETH",
        joinNetwork: "BNB",
        time: "Ends in: 1d : 22h : 33m : 5s",
        type: true
    },
    {
        img: fourth,
        name: "R3V3NGE (Polyland Studio) - Seed",
        description: "PolyLand Studios is a Web3 gaming studio focused on crafting innovativ...",
        fundraisingGoal: "$1000,000",
        tokenPrice: "$0.0075",
        tokenNetwork: "ETH",
        joinNetwork: "BNB",
        time: "Ends in: 1d : 22h : 33m : 5s",
        type: false
    },
    {
        img: fifth,
        name: "R3V3NGE (Polyland Studio) - Seed",
        description: "PolyLand Studios is a Web3 gaming studio focused on crafting innovativ...",
        fundraisingGoal: "$1000,000",
        tokenPrice: "$0.0075",
        tokenNetwork: "ETH",
        joinNetwork: "BNB",
        time: "Ends in: 1d : 22h : 33m : 5s",
        type: false
    },
    {
        img: sixth,
        name: "R3V3NGE (Polyland Studio) - Seed",
        description: "PolyLand Studios is a Web3 gaming studio focused on crafting innovativ...",
        fundraisingGoal: "$1000,000",
        tokenPrice: "$0.0075",
        tokenNetwork: "ETH",
        joinNetwork: "BNB",
        time: "Ends in: 1d : 22h : 33m : 5s",
        type: false
    }
]

const TopCardData = [
    {
        title: "TOP ATH",
        data: [
            {
                key: "Earn Network",
                value: "11.1x"
            },
            {
                key: "SeaPad",
                value: "5.8x"
            },
            {
                key: "Mar3 AI",
                value: "5.0x"
            },
            {
                key: "Me Music",
                value: "3.00x"
            }
        ]
    },
    {
        title: "TOP INVESTORS",
        data: [
            {
                key: "0xf60E...5D8d",
                value: "$17.43K"
            },
            {
                key: "0xf60E...5D8d",
                value: "$17.43K"
            },
            {
                key: "0xf60E...5D8d",
                value: "$17.43K"
            },
            {
                key: "0xf60E...5D8d",
                value: "$17.43K"
            },
            {
                key: "0xf60E...5D8d",
                value: "$17.43K"
            },
            {
                key: "0xf60E...5D8d",
                value: "$17.43K"
            },
        ]
    },
    {
        title: "TOP REFERRERS",
        data: [
            {
                key: "0xf60E...5D8d",
                value: "338"
            },
            {
                key: "0xf60E...5D8d",
                value: "102"
            },
            {
                key: "0xf60E...5D8d",
                value: "101"
            },
            {
                key: "0xf60E...5D8d",
                value: "59"
            },
            {
                key: "0xf60E...5D8d",
                value: "53"
            },
            {
                key: "0xf60E...5D8d",
                value: "53"
            },
        ]
    }
];

const NewsAndHightLightData = [
    newsFirst, newsSecond, newsThird, newsFourth
];

const partnersAndBackers = [
    "","","","","","","","","","","","","","","","","",""
];


const Home = () => {
    const [buttonType, setButtonType] = useState(data[0]);
    const [activeDot, setActiveDot] = useState(0);
    const [search, setSearch] = useState(true);
    const [text, setText] = useState("");

    const handleClick = e => {
        setButtonType(e);
    }
    const handleActiveDot = e => {
        setActiveDot(e)
    }

    const handleChange = e => {
        setText(e.target.value)
    }
    return (
        <section >
            
            <div style={styles.container}>
                <div style={styles.heading}>
                    <h2 className="home--heading--text" style={{fontSize:"50px", fontWeight: "400", marginBottom: "5px"}}>Where Projects Set Sail and Make Waves</h2>
                    <h5 className="home--heading--text--second" style={{fontSize: "25px", fontWeight: "400"}}>The fast-growing Defi-integrated Launchpad on emerging blockchains</h5>
                </div>

                <div className="home--btn--container" style={{...styles.buttonContainer, padding: search ? "0 20px" : "10px 20px", background: search ? "#E6E8FD" : "linear-gradient(90.37deg, #E6E8FD -2.74%, #0119EF 56.81%)", justifyContent: search ?  "space-between" : "flex-end",}}>
                    {
                        search && data.map((datum, id) => (
                            <Buttons 
                                active ={buttonType}
                                key={id} 
                                text={datum}
                                onClick={handleClick} 
                            />
                        ))
                    }
                    {
                        search ? 
                            (<button 
                                className="home--btn"
                                style={
                                    {display: "flex", border: "none", alignItems: "center", cursor: "pointer", 
                                    color: "#0119EF", background:  "transparent", fontSize: "18px", fontWeight: "600"
                                    }} 
                                onClick={() =>setSearch(prev => !prev)}>
                                    <Search />
                                    <span className="search--text" style={{marginLeft: "10px"}}>
                                        Search
                                    </span>
                            </button>  ) 
                            : 
                            (<div style={{display: "flex", "alignItems":"center"}}>
                                <button 
                                className="home--btn"
                                style={
                                    {display: "flex", border: "none", alignItems: "center", cursor: "pointer", 
                                    background:  "transparent", marginRight: "20px"
                                    }} 
                                onClick={() =>setSearch(prev => !prev)}>
                                    <BackArrow />
                            </button>
                            <div style={{position: "relative"}}>
                                <input 
                                    className="search--input" 
                                    style={{background: "#3E50F6", color: "#FFFF", border: "none", padding: "5px 10px 5px 30px"}} 
                                    placeholder="Type to search" 
                                    type="text"
                                    value={text}
                                    onChange={handleChange} 
                                />
                                <div style={{position: "absolute", left: "5px", top: "50%", cursor: "pointer", transform: "translateY(-50%)"}}>
                                    <SearchIconWhite />
                                </div>
                            </div> 
                            </div>)
                                
                    }        
                </div>
                {
                    search ? 
                    (<div>
                        <div className="card--container" style={styles.cardContainer}>
                            {
                                CardData.map((datum, id) =>(
                                    <Card data={datum} key={id} />
                                ))
                            }
                        </div>
                    <button className="card--desc" style={styles.seeMoreButton}> <span style={{marginRight: "10px"}}>See more</span> <ArrowDown /></button>
                    </div>) : 
                    (<div style={{...styles.cardContainer, gridTemplateColumns: "1fr", paddingBottom:"40px"}}>
                        <div style={{height: "601px", width: "100%", background: "#B0B8FA", borderRadius: "20px"}}></div>
                    </div>)
                }
                
            </div>
            <div style={styles.suppportedChainContainer}>
                <h3 className="supported--chain" style={{textAlign: "center", fontSize: "20px", fontWeight: "500"}}>Supported Chains</h3>
            </div>
            <div className="card--container" style={{...styles.container, ...styles.topCardConttainer}}>
                {TopCardData.map((datum, id)=>(
                    <div key={id}>
                        <TopCard 
                            title={datum.title} 
                            data={datum.data} 
                            
                        />
                    </div>
                ))}
            </div>
            <div style={{width: "98%", margin: "auto"}}>
                <h3 className="home--sub--heading" style={{textAlign: "center", padding: "40px 0", fontSize: "20px", fontWeight: "500"}}>NEWS & HIGHLIGHT</h3>
                <div style={{display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px"}}>
                    {search ? 
                        (NewsAndHightLightData.map((datum, id)=> (
                        <div key={id}>
                            {/* 314px */}
                            <img className="highlight--img" height="208px" width="100%" src={datum} alt={`image${id}`} />
                        </div>))) 
                    : 
                        (NewsAndHightLightData.map((datum, id)=> (
                            <div className="highlight--img--" style={{height:"208px", width:"100%", background: "#D9D9D9", borderRadius: "20px"}} key={id}>
                            </div>)))
                    }
                </div>
                <div style={styles.dotContainer}>
                    {
                        dotData.map((datun, id) => {
                            let styless = {};
                            if(id !== 3){
                                styless = styles.dotRight
                            }else{
                                styless  = {}
                            } 
                            return <div 
                                        style={{...styles.dot, ...styless ,background: activeDot === id ? "#0119EF" : "#E6E8FD"}}
                                        onClick={()=>handleActiveDot(id)}
                                        key={id}
                                    >
                                
                                </div>
                        })
                    }
                </div>
            </div>
            <div>
                <h3 className="home--sub--heading" style={{textAlign: "center", fontSize: "20px", fontWeight: "500", marginBottom: "40px"}}>PARTNERS & BACKERS</h3>
                <div style={{...styles.container, display:"grid", gridTemplateColumns: "repeat(6, 1fr)", gap:"20px"}}>
                    {
                        partnersAndBackers.map((datum, id) => (
                            <div key={id} style={{height:"47px", width: "100%", border: "1px solid #0119EF", borderRadius: "5px"}}>
                                    {/* 160px */}
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

const styles = {
    container: {
        width: "90%",
        margin: "auto"
    },
    heading: {
        textAlign: "center",
        margin: "60px 0 30px 0"
    },
    buttonContainer: {
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        background: "#E6E8FD"
    },
    cardContainer: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "25px",
        margin: "40px 0 20px 0"
    },
    seeMoreButton: {
        width: "fit-content",
        margin: "30px auto",
        padding: "5px 10px",
        border: "1px solid #0119EF",
        display: "flex",
        alignItems: "center",
        borderRadius: "5px",
        fontSize: "16px",
        fontWeight: "400",
        background: "none"
    },
    suppportedChainContainer: {
        background: "#e6e8fd",
        height: "290px",
        padding: "20px"
    },
    topCardConttainer: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "20px",
        marginTop: "50px"
    },
    dotContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "25px 0"
    },
    dot: {
        height: "10px",
        width: "10px",
        background: "#E6E8FD",
        borderRadius: "50%",
        cursor: "pointer"
        
    },
    dotRight: {
        marginRight: "10px"
    }
}
export default Home