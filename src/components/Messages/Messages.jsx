import Messages_style from './Messages.module.css';
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let path = "/messages/" + props.id;
    return (
        <NavLink to={path} className={Messages_style.dialogs__item} activeClassName={Messages_style.active}>
            {props.name}
        </NavLink>
    )
}

const MessagesItem = (props) => {
    return (
        <div className={Messages_style.messages__item}>
            <p>{props.message}</p>
        </div>
    )
}

function Messages() {
    let dialogsData = [
        {id: 1, name: "Bruh"},
        {id: 2, name: "Dobby"},
        {id: 3, name: "Shrimp"}
    ]
    let messagesData = [
        {id:1,message:"D'ya know where'd i get my chickan?"},
        {id:2,message: "I stole it!!"},
        {id:3,message: "Pew pew"}
    ]
    return (
        <div className="messages-page">
            <h2 className={Messages_style.messagesPage__title}>Dialogs</h2>
            <div className={Messages_style.messages_content}>
                <div className={Messages_style.messagesPage_dialogs}>
                    <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                    <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                    <DialogsItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                </div>
                <div className={Messages_style.messagesPage_messages}>
                    <MessagesItem message={messagesData[0].message}/>
                    <MessagesItem message={messagesData[1].message}/>
                    <MessagesItem message={messagesData[2].message}/>
                </div>
            </div>
        </div>
    )
}

export default Messages;
