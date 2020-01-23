import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Playground = ()=>{
     const [state, setstate] = useState({exercise: [
        {bodyPart:'legs', workOut:false},
        {bodyPart:'Chest', workOut:false}
      ],
      errorMessage: ''});

    const addMuscleGroup=(muscle)=>{
        if(muscle){
            setstate(prevstate=>{
                const data = [...prevstate.exercise]
                data.push({bodyPart:`${muscle}`})
                document.getElementById('muscle').value = ''
                return {...prevstate,exercise:data, errorMessage:''}
            })
        }
        else{
            setstate(prevstate=>{
                return {...prevstate,errorMessage:'Please add the muscle group'}
            })
        }
     }

    const  muscleListListener =(index) =>{
            setstate((prevstate)=>{
                const data = [...prevstate.exercise]
                data[index].workOut = !data[index].workOut
                return {...prevstate,exercise:data}
            })
     }
    

     return(
         <div>
            <input type='muscle' id='muscle' name='muscle' placeholder="Enter a muscle group" onKeyDown={(event) => {if(event.keyCode === 13)
                        document.getElementById('btnAdd').click()}}></input>
               <button id="btnAdd" onClick={()=>addMuscleGroup(document.getElementById('muscle').value)}>Press</button>         
             <ul>
                 {state.exercise.map((item,index)=>
                    <li key = {index} title="Train insane or remain same" onClick={()=>muscleListListener(index)} className={item.workOut?'exercise_completed':''}>{item.bodyPart}
                 </li>)}
             </ul>
             <p>summer bodies are made in winter</p>
         </div>
        )
}
export default Playground;
ReactDOM.render(<Playground/>,document.getElementById("root"))

