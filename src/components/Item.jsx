import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


const Item = ({listToDo, setListToDo, setListDone, listDone}) => {

    const moveTask = (description) => {
      const index = listToDo.findIndex((task) => task.description === description);
      console.log(index);
      setListDone([
        {
          description,
          done : true
        },
        ...listDone
      ])

      listToDo.splice(index, 1);
      setListToDo([
        ...listToDo
      ])
    }

    return (
        <div>
            <List>
                {
                  listToDo !== undefined ?
                  listToDo.map((toDo) => {
                    return (
                      <ListItem key={toDo.description} style={{backgroundColor:'#ff7676', textAlign:'center'}}>
                        <ListItemAvatar>
                          <Avatar>
                            <AssignmentIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={toDo.description}
                          
                        />
                        <ListItemSecondaryAction>
                          <IconButton onClick={() => moveTask(toDo.description)} edge="end" aria-label="delete">
                            <ArrowForwardIcon />
                          </IconButton>
                        </ListItemSecondaryAction>
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

export default Item
