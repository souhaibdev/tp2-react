function footer(){
    let div ={
        backgroundColor :"black",
        height :"70px",
        
    }
    let p = {
        textAlign:"center",
        color :"white",
        fontStyle:"italic",
        paddingTop:"23px",
    }
    return(
        <div style={div}>
            <footer style={p}>copyright DEVOFS202 – votre nom – année 2025/2026</footer>
        </div>
    )
}
export default footer;