import React from 'react'
import { Grid, Card } from '@material-ui/core';
import Item from './Item';
import ItemDone from './ItemDone';

const List = ({listToDo, listDone , setListToDo, setListDone}) => {
    return (
        <div style={{marginTop:'15px'}}>
            <Grid container spacing={1}>
                <Grid item md={6} sm={12} xs={12}>
                    <Card >
                        <h3>To do</h3>
                        <div className="list-style">
                            <Item
                                listToDo={listToDo}
                                setListToDo={setListToDo}
                                setListDone={setListDone}
                                listDone={listDone}
                            />
                            
                        </div>
                    </Card>
                </Grid>
 
                <Grid item md={6} sm={12} xs={12}>
                    <Card>
                        <h3>Done</h3>

                        <div className="list-style">
                            <ItemDone
                                listDone={listDone}
                                
                            />
                           
                        </div>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default List
