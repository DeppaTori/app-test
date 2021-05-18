import { useState } from 'react'
import Header from '../components/Header'
import { add , update } from './../redux/postingSlice';
import { useSelector, useDispatch } from 'react-redux';
import AddPosting from '../components/AddPosting'

const Posting = () => {
    const postingsFromStore = useSelector((state)=>state.posting.items);
    //const [postings,setPostings] = useState(postingsFromStore);
    const dispatch = useDispatch();

    const addPosting = (posting)=>{
        const id = Math.floor(Math.random()*1000 + 1);
        const newPosting = {id, ...posting};
        dispatch(add(newPosting));
       // setPostings([...postings,newPosting]);
    }

    return (
        <div>
            <h1>Posting</h1>
            <Header />
            <h5>Add Posting</h5>
            <AddPosting onAdd={addPosting} />
            <h5>Daftar Posting</h5>
            {postingsFromStore.map((posting)=>(
                <div key={posting.id}>
                <h5>{posting.title}</h5>
                <p>{posting.content}</p>
                <p>Posting:  <input type="checkbox" checked={posting.posting} onChange={(e)=>dispatch(update({id:posting.id,posting:e.currentTarget.checked?1:0}))}  /></p>
                </div>
            ))}
        </div>
    )
}

export default Posting
