import {useEffect, useState} from "react";
import Balance from "./Balance";
import Plans from "./Plans";
import Waitlist from "./Waitlist";
import Panel from "./Panel";
import Cards from "./Cards";
import {path} from "../../config/path";

export default function Container(){

    const[datacards,setDataCards ] = useState([]);

    useEffect(() => {
        fetch(`${path}/wallet/list/user/628fe2dacee6e77e94b7affb`,{
            method:"GET",
            headers:{
                accept:"application/json",
                "content-type": "application/json",
                "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOGZlMmRhY2VlNmU3N2U5NGI3YWZmYiIsInVzZXIiOiJsZWgiLCJlbWFpbCI6ImxlbGVAbGUuY29tIiwiaWF0IjoxNjU0ODgyMjk4LCJleHAiOjE2NTUwNTUwOTh9.ypns3jxUcZbTlLIvxXR2L13HQTg3TjGDvYON1vm-iuI"
            },
     })
     .then((result) => result.json())
     .then((data) => {
         console.log(data.payload);;
         setDataCards(data.payload);
     }).catch((err)=>console.error(`Error at loading api -> ${err}`));
    },[])

    const [balance,setBalance] = useState([])

    const changeData = (content) => {
        setBalance(content);
    };


    return(
        <div className="container">
            <Cards data={datacards}  action={changeData}/>
            <Panel  data={balance}/>
            <Waitlist />
            <Plans />
            <Balance data={balance}/>
        </div>
    );
}