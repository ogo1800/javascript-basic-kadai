// btnというidを持つHTML要素を取得し、定数に代入する
const Btn = document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行する
Btn.addEventListener('click', () => {
    // textというidを持つHTML要素を取得し、定数に代入する
    const Text = document.getElementById('text');

    /* 取得したh2要素を「ボタンをクリックしました」に書き換える
       2秒（2000ミリ秒）の待ち時間を設定し、非同期処理を実行する*/
    setTimeout(() => {
        Text.textContent = 'ボタンをクリックしました';
    }, 2000);   
});