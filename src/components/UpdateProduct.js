import {useEffect, useState} from 'react'
import Header from './Heder.js'
import {withRouter} from 'react-router-dom'


function UpdateProduct(props){
    const [data, setData] = useState([])
    const [name, setName] = useState("defaultn")
    const [file, setFile] = useState("")
    const [price, setPrice] = useState("1")
    const [description, setDescription] = useState("defaultd")
    
    useEffect(async()=>{
      let result = await fetch("http://localhost:8000/api/product/"+props.match.params.id)
      result = await result.json();
      setData(result)
    }, [])

    async function updateProduct(e){
        e.preventDefault();
        //let ui={name, file, price, description}
        let result = await fetch("http://localhost:8000/api/updateproduct/"+props.match.params.id+`
        ?name=${name}&price=${price}&description=${description}&file=${file}` ,{
            method: 'PUT',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            }
        });
        console.warn(result)
        alert("Data has been updated")
    }

    return(
        <div>
            <Header/>
            <h1>UpdateProduct</h1>
            <input type="text" defaultValue={data.name} 
            onChange={(e)=>setName(e.target.value)} /> <br/> <br/>
            <input type="text" defaultValue={data.price} 
            onChange={(e)=>setPrice(e.target.value)}/> <br/> <br/>
            <input type="text" defaultValue={data.description} 
            onChange={(e)=>setDescription(e.target.value)}/> <br/> <br/>
            <input type="file" defaultValue={data.file_path} 
            onChange={(e)=>setFile(e.target.files[0])}/> <br/> <br/>
            <img style={{width:100}} src={"http://localhost:8000/"+data.file_path} alt={data.name}/> <br/><br/>
            <button onClick={updateProduct}>Update Product</button>
        </div>
    )
}

export default withRouter(UpdateProduct)