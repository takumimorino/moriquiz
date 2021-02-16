const quiz = [
    {
        question: '上腕三頭筋を鍛える種目はどれ？',
        answers: [
         'ペックフライ',
         'フレンチプレス',
         'ラットプルダウン',
         'ロウイング'
        ],
        correct: 'フレンチプレス'
    }, {
        question: 'りんごは英語で何という？',
        answers: [
         'apple',
         'apppple',
         'banana',
         'tamato'
        ],
        correct: 'apple'

    }, {
        question: 'グルタミンの効果として当てはまらないものはどれ？',
        answers: [
         '整腸作用',
         '筋分解の防止',
         '怒りっぽくなる',
         '免疫力向上'
        ],
        correct: '怒りっぽくなる'

    }
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題文を選択し、定義
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while (buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();

const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert('正解!');
        score++;
    } else {
        window.alert('不正解');
    }

    quizIndex++;

    if (quizIndex < quizLength) {
        //問題数がまだあればこちらを実行
        setupQuiz();
    } else {
        //問題数がもうなければこちらを実行
        window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
    }

};

//ボタンをクリックしたら正誤判定

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}


