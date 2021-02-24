import React from 'react'
import { Button, Grid, TextField, Card } from '@material-ui/core';
import Item from './Item';

const List = () => {
    return (
        <div style={{marginTop:'15px'}}>
            <Grid container spacing={1}>
                <Grid item md={6} sm={12} xs={12}>
                    <Card >
                        <h3>To do</h3>
                        <div className="list-style">
                            <Item/>
                            <Item/>
                            <Item/>
                            <Item/>
                            <Item/>
                            <Item/>
                            <Item/>
                            <Item/>
                        </div>
                    </Card>
                </Grid>
 
                <Grid item md={6} sm={12} xs={12}>
                    <Card>
                        <h3>Done</h3>

                        <div className="list-style">
                            <Item/>
                            <Item/>
                            <Item/>
                            <Item/>
                            <Item/>
                            <Item/>
                            <Item/>
                            <Item/>
                        </div>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default List
