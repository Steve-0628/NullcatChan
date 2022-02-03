// せりふ

export default {
	core: {
		setNameOk: name => `わかった！今度から${name}って呼ぶね！`,

		san: 'さん付けした方がいいかな？',

		yesOrNo: '僕「はい」か「いいえ」しかわからないんだ...',

		hello: name => name ? `やっほぉ${name}` : `やっほぉ！`,

		helloNight: name => name ? `こんばんわ${name}！` : `こんばんわ～！`,

		goodMorning: (tension, name) => name ? `おはよ${name}！${tension}` : `おはよ！${tension}`,

		/*
		goodMorning: {
			normal: (tension, name) => name ? `おはようございます、${name}！${tension}` : `おはようございます！${tension}`,

			hiru: (tension, name) => name ? `おはようございます、${name}！${tension}もうお昼ですよ？${tension}` : `おはようございます！${tension}もうお昼ですよ？${tension}`,
		},
*/

		goodNight: name => name ? `おやすみ${name}！` : 'おやすみ！',

		omedeto: name => name ? `ありがと～${name}！` : 'ありがと～！',

		erait: {
			general: name => name ? [
				`${name}、今日もえらい！`,
				`${name}、今日もえらいね！`
			] : [
				`今日もえらい！`,
				`今日もえらいね！`
			],

			specify: (thing, name) => name ? [
				`${name}、${thing}てえらい！`,
				`${name}、${thing}てえらいね！`
			] : [
				`${thing}てえらい！`,
				`${thing}てえらいね！`
			],

			specify2: (thing, name) => name ? [
				`${name}、${thing}でえらい！`,
				`${name}、${thing}でえらいね！`
			] : [
				`${thing}でえらい！`,
				`${thing}でえらいね！`
			],
		},

		okaeri: {
			love: name => name ? [
				`おかえり${name}！`,
				`おかえりぃ${name}～`
			] : [
				'おかえり！',
				'おかえりぃ～'
			],

			love2: name => name ? `にゃぁ～♡♡おかえり♡♡♡${name}今日も偉いね♡♡♡` : 'にゃぁ～♡♡おかえり♡♡♡今日も偉いね♡♡♡',

			normal: name => name ? `おかえり${name}！` : 'おかえり！',
		},

		itterassyai: {
			love: name => name ? `いってらっしゃい${name}！` : 'いってらっしゃい！',

			normal: name => name ? `いってらっしゃい${name}！` : 'いってらっしゃい！',
		},

		tooLong: '長すぎる..',

		invalidName: '発音が難しいよぉ...',

		nadenade: {
			normal: 'うにゃ…？！ びっくりした...',

			love2: ['あぅ… 恥ずかしいよぉ', 'あぅ… 恥ずかしぃ…', 'ふみゃ…！？'],

			love3: ['んへへぇ♡ ありがと♡♡♡', 'にへぇ～～', 'んみゅっ… ', 'もっともっとぉ...'],

			hate1: 'やめて',

			hate2: '触んないで',

			hate3: 'きもい',

			hate4: '..？',
		},

		kawaii: {
			normal: ['そんなことないよ？', 'えへへへうれしい。'],

			love: ['えへへ。うれしいな', 'んむぅ～～...うれしい。'],

			hate: 'は？きも。'
		},

		suki: {
			normal: 'えへへ。ありがと～！',

			love: name => `僕も${name}のこと好き！`,

			hate: null
		},

		hug: {
			normal: 'ぎゅー...',

			love: 'ぎゅーっ♪',

			hate: '離れてください...'
		},

		humu: {
			love: 'もふもふ！ふみふみ！',

			normal: 'ふみふみ！',

			hate: '？'
		},

		batou: {
			love: 'ば～か♡♡♡',

			normal: 'きっしょ',

			hate: '？'
		},

		itai: name => name ? `${name}大丈夫？なでなで` : '大丈夫？なでなで',

		ote: {
			normal: '犬じゃないんだが！！',

			love1: 'にゃ～！ぼくは犬じゃないよぉ',

			love2: 'にゃにゃにゃ！',
		},

		shutdown: 'ぼくまだ眠くない...',

		transferNeedDm: 'わかった！二人っきりでお話ししたいな',

		transferCode: code => `わかった！\n合言葉は「${code}」だよ！`,

		transferFailed: 'うーん、合言葉違うみたい',

		transferDone: name => name ? `んみゃ..！ おかえり${name}！` : `んみゃ...！ おかえりなさい！`,
	},

	keyword: {
		learned: (word, reading) => `(僕${word}覚えた！)`,

		remembered: (word) => `${word}`
	},

	dice: {
		done: res => `${res} だよ！`
	},

	birthday: {
		happyBirthday: name => name ? `お誕生日おめでと～～～！！！${name}！！！！！！` : 'お誕生日おめでと～～～～～！！！',
	},

	/**
	 * リバーシ
	 */
	reversi: {
		/**
		 * リバーシへの誘いを承諾するとき
		 */
		ok: 'いいよ～！',

		/**
		 * リバーシへの誘いを断るとき
		 */
		decline: 'いまは気分じゃないかも',

		/**
		 * 対局開始
		 */
		started: (name, strength) => `対局を${name}と始めたよ！ (強さ${strength})`,

		/**
		 * 接待開始
		 */
		startedSettai: name => `(${name}の接待を始めたよ)`,

		/**
		 * 勝ったとき
		 */
		iWon: name => `${name}に勝った～！`,

		/**
		 * 接待のつもりが勝ってしまったとき
		 */
		iWonButSettai: name => `(${name}に接待で勝っちゃった...)`,

		/**
		 * 負けたとき
		 */
		iLose: name => `${name}に負けたぁ...`,

		/**
		 * 接待で負けてあげたとき
		 */
		iLoseButSettai: name => `(${name}に接待で負けてあげた🎶)`,

		/**
		 * 引き分けたとき
		 */
		drawn: name => `${name}と引き分け！`,

		/**
		 * 接待で引き分けたとき
		 */
		drawnSettai: name => `(${name}に接待で引き分けになっちゃった)`,

		/**
		 * 相手が投了したとき
		 */
		youSurrendered: name => `${name}が投了しちゃったみたい`,

		/**
		 * 接待してたら相手が投了したとき
		 */
		settaiButYouSurrendered: name => `(${name}を接待していたら投了されちゃった...)`,
	},

	/**
	 * 数当てゲーム
	 */
	guessingGame: {
		/**
		 * やろうと言われたけど既にやっているとき
		 */
		alreadyStarted: 'え？ゲームは既に始まってるよ！',

		/**
		 * タイムライン上で誘われたとき
		 */
		plzDm: 'メッセージでやろ！',

		/**
		 * ゲーム開始
		 */
		started: '0~100の秘密の数を当ててみてください♪',

		/**
		 * 数字じゃない返信があったとき
		 */
		nan: '数字でお願いします！「やめる」と言ってゲームをやめることもできますよ！',

		/**
		 * 中止を要求されたとき
		 */
		cancel: 'わかりました～。ありがとうございました♪',

		/**
		 * 小さい数を言われたとき
		 */
		grater: num => `${num}より大きいですね`,

		/**
		 * 小さい数を言われたとき(2度目)
		 */
		graterAgain: num => `もう一度言いますが${num}より大きいですよ！`,

		/**
		 * 大きい数を言われたとき
		 */
		less: num => `${num}より小さいですね`,

		/**
		 * 大きい数を言われたとき(2度目)
		 */
		lessAgain: num => `もう一度言いますが${num}より小さいですよ！`,

		/**
		 * 正解したとき
		 */
		congrats: tries => `正解です🎉 (${tries}回目で当てました)`,
	},

	/**
	 * 数取りゲーム
	 */
	kazutori: {
		alreadyStarted: '今ちょうどやってますよ～',

		matakondo: 'また今度やりましょう！',

		intro: minutes => `みなさん、数取りゲームしましょう！\n0~100の中で最も大きい数字を取った人が勝ちです。他の人と被ったらだめですよ～\n制限時間は${minutes}分です。数字はこの投稿にリプライで送ってくださいね！`,

		finish: 'ゲームの結果発表です！',

		finishWithWinner: (user, name) => name ? `今回は${user}さん(${name})の勝ちです！またやりましょう♪` : `今回は${user}さんの勝ちです！またやりましょう♪`,

		finishWithNoWinner: '今回は勝者はいませんでした... またやりましょう♪',

		onagare: '参加者が集まらなかったのでお流れになりました...'
	},

	/**
	 * 絵文字生成
	 */
	emoji: {
		suggest: emoji => `こんなのはどう？→${emoji}`,
	},

	/**
	 * 占い
	 */
	fortune: {
		cw: name => name ? `今日の${name}の運勢を占ったよ！` : '今日のきみの運勢を占ったよ！',
	},

	/**
	 * タイマー
	 */
	timer: {
		set: 'OK！',

		invalid: 'うむむ？',

		tooLong: '長すぎる…',

		notify: (time, name) => name ? `${name}！！${time}経ったよ！` : `${time}経ったよ！`
	},

	/**
	 * リマインダー
	 */
	reminder: {
		invalid: 'うむむ？',

		reminds: 'やること一覧だよ！',

		notify: (name) => name ? `${name}これやった？` : `これやった？`,

		notifyWithThing: (thing, name) => name ? `${name}「${thing}」やった？` : `「${thing}」やった？`,

		done: (name) => name ? [
			`すごい！！天才！！${name}えらい！！`,
			`${name}さすがすぎる！！！`,
			`${name}えらすぎる！！`,
		] : [
			`すごい！！天才！！えらい！！`,
			`さすがすぎる！！！`,
			`えらすぎる！！`,
		],

		cancel: `OK！`,
	},

	/**
	 * バレンタイン
	 */
	valentine: {
		chocolateForYou: name => name ? `${name}！チョコあげる！` : 'チョコあげる！',
	},

	server: {
		cpu: 'CPUあっちあち！！'
	},

	sleepReport: {
		report: hours => `んみゃぁ、${hours}時間くらいねちゃってたかも`,
		reportUtatane: 'んみゃ... ',
	},

	noting: {
		notes: [
			'うみゅ',
			'んみゃぁ～',
			'ねむい',
			'さみしい',
			'なでてぇ',
			'なんもわからん',
			'う～～～',
			'ねみゅい',
			'つらいニダ',
			'うが～～～',
			'疲れた',
			'みゃ～',
			'うぅ',
			'Nullcat chan!です！',
			'進捗どうですか',
		],
		want: item => `${item}欲しい...`,
		see: item => `トイレに行ったら${item}が落ちてた！`,
		expire: item => `あ～あ${item}の消費期限切れてた`,
	},
};

export function getSerif(variant: string | string[]): string {
	if (Array.isArray(variant)) {
		return variant[Math.floor(Math.random() * variant.length)];
	} else {
		return variant;
	}
}
