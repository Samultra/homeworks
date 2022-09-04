import React from 'react'
import s from './Message.module.css'

export type messagePropType={
    avatar: string,
    message: string,
    time: string,
    name:string
}
function Message(props:messagePropType) {
    return (
        <div className={s.message}>
            <img src={props.avatar} alt={'avatar'} className={s.avatar}/>
<div className={s.angle}/>
        <div className={s.name}> {props.name}</div>
        <div className={s.text}> {props.message}</div>
        <div className={s.name}> {props.time}</div>
        </div>
    )
}

export default Message
