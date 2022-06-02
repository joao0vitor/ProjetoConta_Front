import {profile, cardinsert, cardremove, about} from "../../utils/Functions"
export default function Navigation(){
    return(
        <div className="navbar">
            <ul>
                <li><a href="#">STClub</a> </li>
                <li><a href="#" onclick={profile}>Profile</a> </li>
                <li><a href="#" onclick={cardinsert}>Insert Card</a> </li>
                <li><a href="#" onclick={cardremove}>Remove Card</a> </li>
                <li><a href="#" onclick={about}>about</a> </li>
            </ul>
        </div>
    )
}