import axios from "axios"
import { useEffect , useState} from 'react'
import './quote.css'
import { MdFormatQuote } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";



const Quote = () => {

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }


    useEffect( ()=>{
        // code to run after every render/re-render
        document.body.style.backgroundColor = getRandomColor();
        fetchQuote();
        
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
    
      <button className='new-quote' onClick={()=>fetchQuote()}>New Quote</button>
      <div className='quote-href'>
        <span><AiOutlineTwitter /></span>
        <span><AiOutlineInstagram /></span>
    </div>
    </div>
  )
  

}

export default Quote
