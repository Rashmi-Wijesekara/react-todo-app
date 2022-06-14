import React from 'react'
import { ListItem,ListItemButton,ListItemIcon,Checkbox,ListItemText } from '@mui/material'
import "./Todo.css"

function TodoItem(props) {
  return (
	<div>
		<ListItem disablePadding>
			<ListItemButton dense className="list__item__button">
				<ListItemIcon>
				<Checkbox/>
				</ListItemIcon>
				<ListItemText className="list__item__text" primary={props.text} secondary="deadline⌛"/>
			</ListItemButton>
		</ListItem>
	</div>
  )
}

export default TodoItem

// SHORTCUT rfce
// "react functional component with export"