import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import CheckIcon from '@material-ui/icons/Check';
import AssignmentIcon from '@material-ui/icons/Assignment';

const ItemDone = ({listDone}) => {
    return (
        <div>
            <List>
                {
                  listDone !== undefined ?
                  listDone.map((doneTask) => {
                    return (
                      <ListItem key={doneTask.description} style={{backgroundColor:'lightGreen', textAlign:'center'}}>
                        <ListItemAvatar>
                          <Avatar>
                            <AssignmentIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={doneTask.description}
                          
                        />

                        <CheckIcon />
                        {/* <ListItemSecondaryAction>
                          <IconButton edge="end" aria-label="delete">
                            <CheckIcon />
                          </IconButton>
                        </ListItemSecondaryAction> */}
                    </ListItem>
                    )
                  })

                  : 

                  null

                }
                
              
            </List>
        </div>
    )
}

export default ItemDone
