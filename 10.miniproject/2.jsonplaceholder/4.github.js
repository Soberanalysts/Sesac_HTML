const axios = require('axios');
require('dotenv').config();

const username = 'soberanalysts';
const url = `https://api.github.com/users/${username}/repos`;

const token = process.env.GITHUB_TOKEN;

//실무적으로는 에러처리까지 해야함
// axios.get(url)
//     .then(response => {
//         console.log("내리포정보: ", response.data);
//     })

const fetchgithub = async () => {
    try {
        const response = await axios.get(url, {
            headers: {
                Authorization: `token ${token}` //인증 헤더 추가
            }
        });
        if (response.status === 200) {
            console.log("내 리포 정보: ", response.data);
            const repos = response.data;
            repos.forEach(repo => {
                console.log(`리포명: ${repo.name}, 스타수: ${repo.stargazers_count}`)
            })

            //스타가 많은 리포순으로 소팅
            const topStarredRepo = repos
                .sort((a,b) => b.stargazers_count - a.stargazers_count)
                .slice(0,5);

            topStarredRepo.forEach(repo => {
                console.log(`리포명: ${repo.name}, 스타수: ${repo.stargazers_count}`)
            })    

            
            // 최근에 업데이트가 이루어진 리포들은??
            // const ratestRepo = repos
            //     .sort((a,b) => b.date)
            // 최근 한달 이내 업데이트가 이루어진 리포들을 출력하시오
            const oneMonthAgo = new Date().setMonth(oneMonthAgo.getMonth() -1);
            console.log(oneMonthAgo);

            const recentlyUpdatedRepo = repo.filter(repo => {
                const updatedAt = new Date(repo.updated_at);
                return updatedAt >= oneMonthAgo;
            })

            console.log('=== 최근 한달 이내 업데이트된 리포 ===');
            recentlyUpdatedRepo.forEach(repo => {
                //한국 시간으로 변경
                const koreanTime = newDate(repo.updated_at).toLocaleString('ko-KR', {timeZone: 'Asia/Seoul'})

                console.log(`리포명: ${repo.name}, 업데이트날: ${koreanTime}`);
            })

        } else {
            console.log("오류:", response.status)
        }
    } catch (error) {
        // console.log("DIE");
        console.error('에러발생: ', error.message)
    }
}

fetchgithub();