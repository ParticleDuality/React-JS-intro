import React from "react"
import './Item.css'
import { AiOutlineCheckCircle, AiFillCheckCircle } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';


export function Item(props) {
  return (
    <li className={props.completed ? 'item--completed' : 'item'}>
      { props.completed ?
        <AiFillCheckCircle className="icon icon-check--fill" /> :
        <AiOutlineCheckCircle className="icon icon-check--outline" />
      }

      <p className={`item-p ${props.completed && 'item-p--completed'}`}>
        {props.text}
      </p>

      <span>
        <BsFillTrashFill className="icon-delete" />
      </span>
    </li>
  )
}
