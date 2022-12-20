import axios from "axios"
import { useEffect , useState} from 'react'
import './quote.css'
import { MdFormatQuote } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";



const Quote = () => {

    const color ={
        red : "#670a0a",
        green : "#0b670b",
        yellow : "#606004",
        orange : "#754e04",
        purple : "#600760",
    }

   
    const getRandomColor = ()=>{
        fetchQuote();
         const colorArray = Object.values(color);
            const randomIndex = Math.floor(Math.random()*colorArray.length);
            return colorArray[randomIndex];
     }
    useEffect( ()=>{
      

        // code to run after every render/re-render
        document.body.style.backgroundColor = getRandomColor();
        
   },[]);



const [quote,setQuote]=useState("")
const [author, setAuthor]=useState('')

const fetchQuote =async()=>{
    try{
        const response = await axios.get('https://api.quotable.io/random')
        setQuote(response.data.content)
        setAuthor(response.data.author)
    } catch (error){
        console.log(error);
    }
   
}

  return (

    <div className="quote-box">
      <div className='quote-text'>
       <MdFormatQuote className='icon' />
       <span>{quote}</span>
      </div>
      <div className='quote-author'>
        <span>{author}</span>
      </div>
    <div className='quote-href'>
      <div className="links">
        <span><AiOutlineTwitter /></span>
        <span><AiOutlineInstagram /></span>
        </div>
      <button onClick={()=>fetchQuote()}>New Quote</button>
      </div>
    </div>
  )
  

}

export default Quote
