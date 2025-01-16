import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import './UserDetail.css' ;

function UserDetail() {
    const {userId} = useParams();

    // const users = [
    //     {
    //         id: 1, name: "Alice", email: "alice@example.com", age: 20
    //     },
    //     {
    //         id: 2, name: "Bob", email: "bob@example.com", age: 30
    //     },
    //     {
    //         id: 3, name: "Charlie", email: "charlie@example.com", age: 40
    //     },
    // ]
    const [user, setUser] = useState([]); //초기값은 빈 배열
    const [error, setError] = useState(null); //초기에는 에러 null 임

    // const user = users.find((u) => u.id === parseInt(id));
    useEffect(() => {
        fetch(`http://localhost:3000/api/users/${userId}`)
            .then(response => response.json())
            .then(data => setUser(data))
            .catch(error => console.error(error));
    }, [userId]);

    if (error) {
        return <p className='error-message'>오류 : {error}</p>
    }
    
  return (
    <div>
        <h2>User Detail</h2>
        <p>유저 상세 페이지 : {user.id}</p>
        <p>이름: {user.name}</p>
        <p>이메일 : {user.email}</p>
        <p>나이 : {user.age}</p>
    </div>
  )
}

export default UserDetail