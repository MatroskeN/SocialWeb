import Messages_style from './Messages.module.css';

function Messages() {
    return (
        <div className="messages-page">
            <h2 className={Messages_style.messagesPage__title}>Dialogs</h2>
            <div className={Messages_style.messages_content}>
                <div className={Messages_style.messagesPage_dialogs}>
                    <div className={Messages_style.dialogs__item}>
                        <p>Bruh</p>
                    </div>
                    <div className={Messages_style.dialogs__item}>
                        <p>Dobby</p>
                    </div>
                    <div className={Messages_style.dialogs__item}>
                        <p>Shrimp</p>
                    </div>
                </div>
                <div className={Messages_style.messagesPage_messages}>
                    <div className={Messages_style.messages__item}>
                        <p>D'ya know where'd i get my chickan?</p>
                    </div>
                    <div className={Messages_style.messages__item}>
                        <p>Where's my sock dude</p>
                    </div>
                    <div className={Messages_style.messages__item}>
                        <p>I'm pregnant, why your phone is off wtf</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages;
