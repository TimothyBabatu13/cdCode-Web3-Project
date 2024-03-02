import { useEffect, useState } from "react";

const BuyForm = ()=> {

    const [number, setNumber] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
    }

    const handleChange = e => {
        setNumber(e.target.value);
    }

    return (
        <section style={styles.container}>
            <form style={styles.form} onSubmit={handleSubmit} action="">
                <label 
                    htmlFor="amount"
                    style={styles.label}
                >
                    Amount
                </label>
                <input 
                    type="number" 
                    name="" 
                    id="amount"
                    style={styles.input} 
                    onChange={handleChange}
                    className="but--input"
                />
                <button style={styles.button} type="submit">Buy</button>
            </form>
        </section>
    )
}

const styles = {
    container: {
        marginTop: "60px"
    },
    form: {
        width: "55%",
        height: "359px",
        margin: "auto",
        border: "1px solid #0119EF",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 40px"
    },
    label: {
        display: "block", 
        fontSize: "16px", 
        fontWeight: "500",
        color: "#000000",
        marginBottom: "20px"
    },
    input: {
        border: "1px solid #0119EF",
        padding: "20px",
        borderRadius: "20px",
        marginBottom: "50px",
        fontWeight: "500",
        fontSize: "16px",
    },
    button: {
        display: "block",
        background: "linear-gradient(180deg, #0119EF 0%, #000954 100%)",
        width: "100%",
        padding: "20px",
        fontWeight: "500",
        fontSize: "16px",
        border: "none",
        cursor: "pointer",
        color: "#FFFFFF",
        borderRadius: "20px",
        
    }
}
export default  BuyForm;