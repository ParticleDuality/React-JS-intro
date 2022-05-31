import React from "react"
import './Item.css'
import { AiOutlineCheckCircle, AiFillCheckCircle } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';


export function Item(props) {
  return (
    <li className={props.completed ? "item--completed" : "item"}>
      {props.completed ? (
        <AiFillCheckCircle
          onClick={props.onChangeStatus}
          className="icon icon-check--fill"
        />
      ) : (
        <AiOutlineCheckCircle
          onClick={props.onChangeStatus}
          className="icon icon-check--outline"
        />
      )}

      <p className={`item-p ${props.completed && "item-p--completed"}`}>
        {props.text}
      </p>

      <BsFillTrashFill
        onClick={props.onDelete}
        className="icon-delete"
      />
    </li>
  )
}
