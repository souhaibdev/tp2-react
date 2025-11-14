import Livre from './Livre.jsx'
import { useState } from 'react'

function ListLivre(){
    const livres =[ 
        {"title": "1984","prix":90.00,"genre": "Dystopian","publicationYear": 1949}, 
        {"title": "To Kill a Mockingbird","prix":100.00,"genre": "Romance","publicationYear": 1960}, 
        {"title": "The Great Gatsby","prix":50.00,"genre": "Adventure","publicationYear": 1925}, 
        {"title": "Pride and Prejudice","prix":159.00,"genre": "Historical Fiction","publicationYear": 1813}, 
        {"title": "Moby-Dick","prix":60.00,"genre": "Dystopian","publicationYear": 1851}, 
        {"title": "War and Peace","prix":70.00,"genre": "Historical Fiction","publicationYear": 1869}, 
        {"title": "The Alchemist","prix":85.00,"genre": "Philosophical","publicationYear": 1988} 
    ]

    const siv = {
        display:"flex",
        justifyContent: "space-between"
    }

    const [genre, setGenre] = useState("")
    const [anne_publication, setAnne_publication] = useState("croissant")
     const [title, setTitle] = useState("");

    //  hadi baQi makmlt eliha 
    // const [currentPage, SetCurrentPage]=useState(1)
    // const itemsPerPage = 5;


    // const lastItem = currentPage*itemsPerPage;
    // const fistItem = lastItem - itemsPerPage;
    // const currentItems = data.slice(fistItem,lastItem)
    
    const Livres = livres.filter(livre =>livre.genre === genre)
    .filter(livre =>livre.title === title)
    .slice().sort((a,b) => anne_publication === "croissant" ? a.publicationYear - b.publicationYear : b.publicationYear - a.publicationYear)


    return(
        
        <div>
            <div style={siv}>
                {Livres.map((livre, index)=>(
                    <Livre key={index} title={livre.title} prix={livre.prix} anne_publication={livre.publicationYear}/>
                ))}
            </div>
            <label>Genre :</label>
            <select value={genre} onChange={(e)=> setGenre(e.target.value)}>
                <option value="">All Genres</option>
                <option value="Historical Fiction">Historical Fiction</option>
                <option value="Dystopian">Dystopian</option>
                <option value="Romance">Romance</option>
                <option value="Adventure">Adventure</option>
                <option value="Philosophical">Philosophical</option>
            </select>

            <select value={anne_publication} onChange={(e)=> setAnne_publication(e.target.value)}>
                <option value="croissant">croissant</option>
                <option value="decroissant">decroissant</option>
            </select>

            <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} />  
        </div>
    )
}

export default ListLivre;