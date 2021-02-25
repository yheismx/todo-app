import React, {useState} from 'react';
import { Button, Grid, TextField } from '@material-ui/core';

const Form = ({setListToDo, listToDo}) => {

    const [newTask, setNewTask] = useState({
        description : '',
        done : false
    })
    
    const handleInput = (e) => {
        [e.target.name] = e.target.value;

        setNewTask({
            description : e.target.value,
            done : false
        })
    }

    

    const handleSubmit = (e) => {
        e.preventDefault();
        setListToDo([
            
            {
                description : newTask.description,
                done : newTask.done
            },
            ...listToDo,
        ])

        setNewTask({
            description: '',
            done : false
        })

        
    }

  

    return (
        <div style={{backgroundColor:'white', padding:'25px', borderRadius:'5px'}}>
            <Grid container spacing={1}>
                <Grid item md={8} sm={12} xs={12}>
                    <TextField style={{width:'100%'}} autoFocus onChange={handleInput}  value={newTask.description} id="outlined-basic" label="To do.." variant="outlined" />
                </Grid>
 
                <Grid item md={4} sm={12} xs={12}>
                    <Button onClick={handleSubmit}  style={{padding:'15px', width:'100%'}} variant="contained" color="primary">
                        Add
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default Form
