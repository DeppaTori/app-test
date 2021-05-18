import { useState } from 'react'

const AddPosting = ({ onAdd }) => {
    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');
    const [posting,setPosting] = useState(0);

    const onSubmit = (e)=>{
        e.preventDefault()

        if(!title){
            alert('Please input title');
            return
        }

        onAdd({ title, content, posting});

        setTitle('');
        setContent('');
        setPosting(0);

    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Title</label>
                <input type="text" placeholder="Add Title" 
                    value={title} 
                    onChange={(e)=>setTitle(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Content</label>
                <input type="text" 
                placeholder="Content" 
                value={content} 
                    onChange={(e)=>setContent(e.target.value)}
                />
            </div>
            <div className="form-control form-control-check">
                <label>Set Posting</label>
                <input type="checkbox" 
                checked={posting}
                
                    onChange={(e)=>setPosting(e.currentTarget.checked?1:0)} />
            </div>
            <input type="submit" value="Submit" className="btn btn-block" />
        </form>
    )
}

export default AddPosting
