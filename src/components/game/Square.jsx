import './Square.css';
import cross_icon from "../assets/cross.png";
import circle_icon from "../assets/circle.png";
export default function Square({ value, onSquareClick }) {

  function imagerender(value){
      if (value===null){ 
        return null
      }else if (value == "X"){
        return <img className="image" src={cross_icon} alt="x" srcset="" />
      }else{
        return <img className="image"src={circle_icon} alt="o" srcset="" />
      }
  }

    return (
      <>
        <button className="square" onClick={onSquareClick}>{imagerender(value)}</button>
      </>
    );
  }