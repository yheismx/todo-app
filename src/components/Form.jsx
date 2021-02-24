import React from 'react';
import { Button, Grid, TextField } from '@material-ui/core';

const Form = () => {
    return (
        <div style={{backgroundColor:'white', padding:'25px', borderRadius:'5px'}}>
            <Grid container spacing={1}>
                <Grid item md={8} sm={12} xs={12}>
                    <TextField style={{width:'100%'}} id="outlined-basic" label="To do.." variant="outlined" />
                </Grid>
 
                <Grid item md={4} sm={12} xs={12}>
                    <Button style={{padding:'15px', width:'100%'}} variant="contained" color="primary">
                        Add
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default Form
