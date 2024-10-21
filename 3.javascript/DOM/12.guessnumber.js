//미션1.
        //1. 랜덤숫자 1~100까지 생성
        const numberInput = Math.floor(Math.random()*100)+1;
        // document.getElementById("test").value = "test";
        // document.getElementById("timeInput");
        
        //2. guess 버튼을 통해 입력한 숫자와 내 숫자가 맞는지 비교
        function checkGuess(){
            const guessNumber = document.getElementById("guessNumber").value;
            const result=document.getElementById("result");
            const historyList=document.getElementById("historyList");

            if(guessNumber==numberInput){
                console.log("Correct");
                result.innerHTML = "<B>Correct</B>";
            }else if(guessNumber>numberInput){
                console.log("Too High");
                result.innerHTML = "<B>Too High</B>";
            }else{
                console.log("Too Low");
                result.innerHTML = "<B>Too Low</B>";
            }
            console.log(document.createElement("li"));
            console.log((document.createElement("li")).textContent);
            // const ListItem=result.innerHTML;
            // historyList.appendChild(ListItem);
            const listItem = document.createElement("li");
            listItem.textContent = `예측숫자: ${guessNumber}`;
            historyList.appendChild(listItem);

        }
        //2-1. 입력한 숫자가 더 크면?? Too High 라고 알려주기
        //2-2. 입력한 숫자가 더 작으면?? Too Low 라고 알려주기
        //2-3. 같으면?? Correct 라고 알려주기

        //미션2.
        //3. 입력한 값들의 로그를 출력하기

        //미션3.
        //4. 이걸 내가 풀어가는 사람 입장에서, 최소화해서 푸는 기법(= 알고리즘)
        //이런 알고리즘을 우리가 뭐라고 부르는가?? 그 이름을 작성하기
        //4-2. 최대(아무리 많이 찍더라도) 몇번만에 이 문제를 (무조건) 풀 수 있는가?? 그 횟수는??
        const button = document.getElementById("guessButton");
        button.addEventListener("click", checkGuess);
        