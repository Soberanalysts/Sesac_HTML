import './Message.css';

const Message = ({ count }) => {
    return (
        <p>현재 카운터 값은: {count} 입니다.</p>
    );
}

export default Message;