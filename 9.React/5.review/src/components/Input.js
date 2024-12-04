const Input = ({setMessage}) => {

    function onChangeHandler(e) {
        console.log(e.target);
        // setMessage(e.target.value);
    }

    return (
        <div>
            <label>메시지 입력: </label>
            <input
                type="text"
                onChange={(e) => onChangeHandler(e.target.value)}
                placeholder="글자 입력..."
            />
        </div>
    );
}

export default Input;