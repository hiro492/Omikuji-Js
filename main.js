{
  const OmikujiKind = [
    '大吉', '中吉', '小吉',
    '末吉', '凶', '大凶'
  ];
  document.querySelector('button').addEventListener('click', () => {
    const random = Math.random() * (OmikujiKind.length );
    const floor = Math.floor(random);
    document.querySelector('h2').textContent = OmikujiKind[floor]; // ここにこの行を置く
    let advice;
    switch (floor) {
      case 0:
        advice = '大吉今日もいいことありそう';
        break;
      case 1:
        advice = '中吉ですますますの運勢です';
        break;
      // 他のケースも追加する
      case 2:
        advice = '小吉小さないいことありそう';
        break;
      case 3:
        advice = '末吉です。今日は少し注意が必要かもしれませんが、小さな幸運が訪れるかもしれません。' +
          '日々の努力が実を結ぶ兆しです。' +
          '今日は新しいことに挑戦してみると良いでしょう。変化を恐れず、前向きな姿勢を保ちましょう！';
        break;
      case 4:
        advice = '凶はかえって寝よう';
        break;
      case 5:
        advice = 'いうことありません';
        break;
      default:
        advice = '';
        break;
    

  }
    document.querySelector('p').textContent = advice; // アドバイスを表示する
});
}
