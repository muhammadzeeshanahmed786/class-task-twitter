import React,{useState ,useEffect} from "react";
import {db, addDoc, collection,query, where, getDocs } from "../routes/firebase"

function Home(){
 let [text,setText]=useState("");
 let[getData,setGetData]=useState('')
 
 
    useEffect(async()=>{
        let showData=collection(db,"text");

        let allDataShow=await getDocs(showData);
        allDataShow.forEach((doc)=>{
            console.log(doc.id, doc.data());
            let dataClone = getData.slice(0);
            dataClone.push(doc.data());
            setGetData(dataClone);
        });
        

},[]);


 let addText=async()=>{
     let obj={
         text
        }
         console.log(obj)
         setText('')
  

    let twitterText = collection(db, 'text');
    await addDoc(twitterText, obj);
 }
    return (

        <div>
            <h1>Home Page</h1>
            <input style={{width:"200px",height:"50px"}}  type="text" value={text} onChange={(e)=>{setText(e.target.value)}}/>
            <br/><button onClick={addText}>Add</button>

            {getData.map((text,ind)=>{
                return(
                <h>{text}</h>)
            })}
        </div>
    )
}
export default Home;