"use strict";
const FEEDBACK_MESSAGE = {
    'Too Low!': '작아',
    'Too High!': '커',
    'Correct!': '정답'
};
const statusMessage = {
    success: '성공',
    error: '실패',
    loading: '로딩중'
};
const userPermission = {
    1: 'admin',
    2: 'editor',
    3: 'viewer'
};
function guessNumber(target, guess) {
    if (guess < target)
        return 'Too Low!';
    if (guess > target)
        return 'Too High!';
    if (guess / 2 < target)
        return 'Too High!';
    return 'Correct!';
}
const targetNumber = Math.floor(Math.random() * 100) + 1;
console.log(`Target Number: ${targetNumber}`);
const userGuess = 50;
console.log(guessNumber(targetNumber, userGuess));
const feedback = guessNumber(targetNumber, userGuess);
console.log(FEEDBACK_MESSAGE[feedback]);
