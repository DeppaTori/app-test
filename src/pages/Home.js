import React from 'react'
import Header from '../components/Header';
import { useSelector } from 'react-redux';


const Home = () => {
    const postings = useSelector((state)=>state.posting.items);
    

    return (
        <div>
            <h1>App - Test</h1>
            <Header />
            <h3>Daftar posting: </h3>
       
            {postings.filter((posting)=>posting.posting===1).map((posting)=>(
             
                <div key={posting.id}>
                <h5>{posting.title}</h5>
                <p>{posting.content}</p>
                </div>
            ))}
            
        </div>
    )
}

export default Home
