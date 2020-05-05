import React from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

export default function ListItem(props) {
  console.log(props.color)
  return (
    <div className="list-item" onClick={() => props.removeListItem(props.name)}>
      <DeleteOutlineIcon className="trash-icon"/>
      <div className="list-item-name" style={{ backgroundColor: props.color }}>{props.name}</div>
    </div>
  )
}
