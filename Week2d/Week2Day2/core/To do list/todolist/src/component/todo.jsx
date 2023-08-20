import React ,{useEffect ,useState }from 'react'

const todo = () => {
    const[input,setInput]=useState("");
    const[list,setList]=useState([]);
    // add task 
    const submitHandler = (e)=>{
        e.preventDefault();
        setList([...list,{content: input,id,isdone:false}])
        console.log(list)
        // empty input 
        setInput("");
    }
    const deletetask =(id)=> {
        setList(list.filter)
    }
   
}
return(
    <div>
        <h1>Todo list</h1>
        <div className='main'>
            <div className='form'>
               <form>
                <input type="text" placeholder='add new task' onChange={(e) =>setInput(e.target.value)}></input> 
                <input type="submit" value="add" />
                </form> 
            </div>
        <div className='tasks'>
            { list.map( (task) => {
                return(
                    <div key={task.id} className="task">
                        <p>
                        style={task.isdone? 
                            {textDecoration: 'line-through'}
                            :{textDecoration:'none'}
                            {task.content}
                            </p> 
                            <input type="checkbox"
                            checked={task.isdone} 
                            onchange={() => {
                                setList((prevstate)=> {
                                    const newlist = prevstate.map((item) => {
                                        return item.id === task.id ?{...item, isdone:item.isdone}:item;
                                    });
                                    return newlist
                                })

                            } }>

                            </input>
                            <fatrash />

                    </div>

                )
            })}
            </div>    

        </div>

    </div>
)

export default todo