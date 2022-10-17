import React from 'react'
import { useState } from 'react'
import "./css/main.css"


function NewService() {
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescritpion] = useState("")
    const [message, setMessage] = useState("")
    const [number, setNumber] = useState("")

    // let handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try{
    //         let res = await fetch("http://localhost:6000/Services/new", {
    //             methor: "POST",
    //             headers: {
    //                 'Content-Type':'multipart/form-data',
    //                 'accept':'multipart/form-dtata'
    //             },
    //             body: JSON.stringify({
    //                 title: title,
    //                 category: category,
    //                 description: description,
    //                 message: message,
    //                 number: number,
    //             }),
    //         })
    //         let resJson = await res.json();
    //     console.log(resJson)
    //     if (res.status === 200){
    //       setTitle("")
    //       setCategory([])
    //       setDescritpion("")
    //       setMessage("")
    //       setNumber("")
    //     }
    // } catch(err){
    //     console.log(err)
    // }
    // }
  return (
    <>
        <div>NewService</div>
        <form>
            <input type="text" placeholder='Title' onChange={(e) => setTitle(e.target.value)}/>
            <input type="text" placeholder='Category' onChange={(e) => setCategory(["popular", "wellness"])}/>
            <input type="text" placeholder='Description' onChange={(e) => setDescritpion(e.target.value)}/>
            <input type="text" placeholder='Message' onChange={(e) => setMessage(e.target.value)}/>
            <input type="text" placeholder='Number' onChange={(e) => setNumber(e.target.value)}/><br/>
            <button>Submit</button>
        </form>
    </>
  )
}

export default NewService