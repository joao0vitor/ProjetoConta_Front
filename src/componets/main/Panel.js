export default function Panel(props){
    
    var caminho = "./img/maomastercard.png";

    if (props.data.cardname == "") {
        caminho = "./img/maofree.png";
    
    } else if (props.data.cardname == "Mastercard Simple") {
        caminho = "./img/maomastercard.png";

    } else {
        caminho = "./img/maofree.png";
    }
    
    return(
        <div className="panel">
            <img src={caminho} />
            {console.log(caminho)}
        </div>
    );
}