"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
class GuessNumberGame {
    constructor(maxAttempts = 10) {
        this.targetNumber = Math.floor(Math.random() * 100) + 1;
        this.attempts = 0;
        this.maxAttempts = maxAttempts;
    }
    getFeedback(guess) {
        if (guess < this.targetNumber)
            return 'Too Low!';
        if (guess > this.targetNumber)
            return 'Too High!';
        return 'Correct!';
    }
    play() {
        console.log('안녕하세요, 숫자 맞추기 게임에 오신것을 환영합니다.');
        console.log(`최대 ${this.maxAttempts} 까지 1~100 까지의 숫자를 맞출 기회가 주어집니다.`);
        while (this.attempts < this.maxAttempts) {
            const input = readline_sync_1.default.questionInt(`시도 ${this.attempts + 1}: 당신의 숫자는? `);
            this.attempts++;
            const feedback = this.getFeedback(input);
            if (feedback === 'Corret!') {
                console.log(`축하합니다. ${this.attempts}/${this.maxAttempts} 번만에 맞췄습니다.`);
                return;
            }
            else {
                console.log(`틀렸습니다: ${feedback}`);
            }
        }
        console.log(`최대 시도 횟수 ${this.maxAttempts} 가 초과하였습니다. 안녕 ~~~`);
    }
}
const mygame = new GuessNumberGame();
mygame.play();
