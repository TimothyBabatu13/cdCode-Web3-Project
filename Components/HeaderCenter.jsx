
const HeaderCenter = ({ buttons }) => {
    return (
        <section>
            <h1>Where Projects Set Sail and Make Waves</h1>
            <h5>The fast-growing Defi-integrated Launchpad on emerging blockchains</h5>
            {
                buttons &&
                <div style={styles.buttonsContainer}>
                    <button>All</button>
                    <button>Ongoing</button>
                    <button>Upcoming</button>
                    <button>Ended</button>
                    <button>Search</button>
                </div>
            }
        </section>
    )
}

const styles = {
    buttonsContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
}

export default HeaderCenter;