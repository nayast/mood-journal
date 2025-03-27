import React, {useRef} from "react";
import {firestore} from '../firebase'
import {addDoc, collection} from "@firebase/firestore"
import {diaryData} from '../components/consts/diaryRecord'

export default function Meow() {


  const messageRef = useRef();
  const ref = collection(firestore, "diaryRecords");

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(messageRef.current.value)
    try{
      //diaryData.map((text) => (
        //addDoc(ref, text)
      //))
    } catch(e){
      console.log(e);
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={messageRef}></input>
        <button type="submit">Submit</button>
      </form>
      <img src="images/cat.jpg" alt="Cat"/>
    </div>
  );
}