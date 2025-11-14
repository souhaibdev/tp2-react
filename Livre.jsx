import img1 from './la_boite.jpeg'
function Livre(props){
    let div = {
        width:"250px",
        margin:"25px",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.2)"
    }
    let img ={
        width:"150px",
        paddingLeft :"50px",
        marginTop:"15px"
    }
    let h2 ={
        textAlign:"center"
    }
    let p ={
        textAlign:"center"
    }
    let btn ={
        height:"25px",
        width:"90%",
        height:"30px",
        marginRight:"10px",
        border :"none",
        color:"rgba(6, 106, 255, 1)",
        backgroundColor: "rgba(6, 247, 255, 0.59)",
        borderRadius: "5px",
        marginLeft:"12px",
        marginBottom :"15px"
    }
    return(
        <div style={div}>
            <img src={img1} alt="la boite a mereveille" style={img} />
            <h2 style={h2}>{props.title}</h2>
            <p style={p}>{props.prix}</p>
            <p style={p}>{props.anne_publication}</p>
            <button style={btn}>Read More</button>
        </div>
    )
}
export default Livre;