const OpenAI = require('openai');
const morgan = require('morgan');
const express = require('express');
require('dotenv').config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_PAI_KEY
});

if (!openai.apiKey) {
    console.error('키 오류!!');
    process.exit(1);
}

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static('public'));
// const api = new openai.OpenAIApi(openai.configuration);

app.post('/api/chat', async (req,res) => {
    const {question} = req.body;
        try {
            const response = await openai.chat.completions.create({
                model:'gpt-4o-mini',
                messages: [
                    {role:'system', content: '너는 정신과 의사야. ' },
                    {role:'user', content: question },
                ],
                temperature: 0.7
            })
            return response.choices[0].message.content;
        } catch(error) {
            console.error('오류!!', error.message);
            res.status(500).json({error : '알수없는 오류'});
        }

})


// async function chatWithUser() {
//     const userInput = '안녕, 챗봇! 나 오늘 기분이 꿀꿀해....';
//     const aiResponse = await getChatGPTResponse(userInput);
//     console.log('챗봇응답: ', aiResponse);
// }

app.listen(3000, () => {
    console.log('서버 오픈')});
