const Url = 'https://jsonplaceholder.typicode.com/posts';

const Data = {
    name: 'Said',
    id: 24,
};

// 선택적 파라미터

const othePram = {
    headers: {
	    'content-type': 'application/json, charset=UTF-8',
    },
    body: Data,
    method: 'POST',
};

fetch(Url, othePram)
.then((data) => {return data.json()})
.then((res) => {console.log(res)})
.catch((error) => console.log(error));