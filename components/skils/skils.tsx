import { SetStateAction, useState } from "react";
interface storeItem{
    getItem : (key : string) => string | null | undefined 
} 

function getLocalStorge() : Storage{
  return localStorage.getItem('skils');
}

const Skils = () =>{
   const [item,setItem] = useState();
   setItem((value : SetStateAction)=>{})
    return(
        <div>

        </div>
    );
}

export default Skils;