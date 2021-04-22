import {useState} from 'react'
import Header from './Heder.js'
import {Table} from 'react-bootstrap'

 function SearchProduct(){
     const [data, setData] = useState([])
     async function search(key){
        
        let result = await fetch("http://localhost:8000/api/search/"+key);
        result= await result.json();
        setData(result)

     }
   
    return(
        <div>
            <Header/>
            <div className="col-sm-6 offset-sm-3">
            <h1>Search product</h1>
            <br/><br/>
            <input type="text" onChange={(e)=>search(e.target.value)} className="form-control" placeholder="Search product"/>
            <Table>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Description</td>
                    <td>Image</td>
                    
                </tr>
                {
                    data.map((item)=>
                    <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.description}</td>
                    <td><img style={{width:100}} src={"http://localhost:8000/"+item.file_path} alt="item.name"/></td>
                    
                    </tr>
                    )
                }

            </Table>
            </div>
        </div>
    )
}

export default SearchProduct