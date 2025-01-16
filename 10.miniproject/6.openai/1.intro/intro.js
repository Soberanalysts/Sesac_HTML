const axios = require('axios');
require('dotenv').config();

const openaiApiKey=process.env.OPENAI_API_KEY;

const url = 'https://api.openai.com/v1/chat/completions';

async function getChatGPTResponse(userInput) {
    try{
        const response = await axios.post(url,
            {
                model: 'gpt-4o-mini',
                messages: [
                    // {role: 'system', content: 'Say this is a text'}
                    {role: 'system', content: userInput}
                ],
                temperature: 0.7
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${openaiApiKey}`
                }
            },
        )
    } catch (error) {
        console.error('API 요청 실패', error, message)
        if (error.response) {
            const status = error.response.status;
            if (status == 401) {
                console.error('API키가 잘못되었습니다.');
            } else if (status == 429) {
                console.error(`크레딧 만료 (또는 과도한 요청)`);
            }
        }
        return '챗봇 응답을 가져오는 도중에 오류가 발생했습니다.'
    }
    
    // console.log(response.data);
    // console.log(response.data.choices[0].message.content);
    return response.data.choices[0].message.content;
}

async function chatWithUser() {
    const userInput = '안녕, 챗봇! S&P500에 대해 설명해줘';
    const aiResponse = await getChatGPTResponse(userInput);
    console.log('챗봇응답: ', aiResponse);
}

chatWithUser();
setInterval(chatWithUser, 1000);