(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IS_LIKE;
(function (IS_LIKE) {
    IS_LIKE[IS_LIKE["LIKE"] = 0] = "LIKE";
    IS_LIKE[IS_LIKE["DISLIKE"] = 1] = "DISLIKE";
    IS_LIKE[IS_LIKE["CONDITIONAL"] = 2] = "CONDITIONAL";
})(IS_LIKE || (IS_LIKE = {}));
exports.LIKE_LIST = [
    {
        name: ["白いダース", "ダース白", "しろいだーす", "シロイダース", "白のダース"],
        isLike: IS_LIKE.LIKE,
        optional: []
    },
    {
        name: ["ビーフシチュー", "びーふしちゅー"],
        isLike: IS_LIKE.LIKE,
        optional: []
    },
    {
        name: ["黄色", "黄", "きいろ", "キイロ", "いえろー", "イエロー"],
        isLike: IS_LIKE.LIKE,
        optional: [{ description: "淡い感じ" }]
    },
    {
        name: ["犬", "いぬ", "イヌ"],
        isLike: IS_LIKE.LIKE,
        optional: []
    },
    {
        name: ["苺", "いちご", "イチゴ"],
        isLike: IS_LIKE.LIKE,
        optional: []
    },
    {
        name: ["酢飯", "すめし", "スメシ"],
        isLike: IS_LIKE.LIKE,
        optional: []
    },
    {
        name: ["ココア", "ここあ"],
        isLike: IS_LIKE.LIKE,
        optional: []
    },
    {
        name: ["アロエ", "あろえ"],
        isLike: IS_LIKE.LIKE,
        optional: []
    },
    {
        name: ["バニラアイス", "ばにらあいす", "アイスクリーム", "あいすくりーむ"],
        isLike: IS_LIKE.LIKE,
        optional: []
    },
    {
        name: ["ワッフル", "わっふる"],
        isLike: IS_LIKE.LIKE,
        optional: []
    },
    {
        name: ["明太子", "めんたいこ", "メンタイコ"],
        isLike: IS_LIKE.LIKE,
        optional: []
    },
    {
        name: ["手羽先", "てばさき", "テバサキ"],
        isLike: IS_LIKE.LIKE,
        optional: []
    },
    {
        name: ["はんぺん", "ハンペン"],
        isLike: IS_LIKE.LIKE,
        optional: []
    },
    {
        name: ["梅", "うめ", "ウメ"],
        isLike: IS_LIKE.LIKE,
        optional: []
    },
    {
        name: ["グミ", "ぐみ"],
        isLike: IS_LIKE.LIKE,
        optional: [{ description: "硬いもの/ピュアラルグミ等" }]
    },
    {
        name: ["うどん", "饂飩", "ウドン"],
        isLike: IS_LIKE.LIKE,
        optional: []
    },
    {
        name: ["から揚げ", "からあげ", "カラアゲ"],
        isLike: IS_LIKE.LIKE,
        optional: []
    },
    {
        name: ["わかめ", "ワカメ"],
        isLike: IS_LIKE.LIKE,
        optional: []
    },
    {
        name: ["カルピスソーダ", "かるぴすそーだ"],
        isLike: IS_LIKE.LIKE,
        optional: [{ description: "普通のカルピスは好きじゃない" }]
    },
    {
        name: ["おでん", "オデン"],
        isLike: IS_LIKE.LIKE,
        optional: [{ description: "おでんなら玉子とか大根を食べる" }]
    },
    {
        name: ["抹茶", "まっちゃ", "マッチャ"],
        isLike: IS_LIKE.LIKE,
        optional: []
    },
    {
        name: ["トマト", "とまと"],
        isLike: IS_LIKE.LIKE,
        optional: [{ description: "冷やしたやつが特に好き" }]
    },
    {
        name: ["メープル", "めーぷる", "メイプル", "めいぷる"],
        isLike: IS_LIKE.LIKE,
        optional: []
    },
    {
        name: ["カロリーメイトココア", "かろりーめいとここあ"],
        isLike: IS_LIKE.LIKE,
        optional: [{ description: "食べるならココア" }]
    },
    {
        name: ["酸っぱいもの", "すっぱいもの", "スッパイモノ"],
        isLike: IS_LIKE.LIKE,
        optional: []
    },
    {
        name: [
            "柑橘系の香り", "かんきつけいのかおり", "カンキツケイノカオリ",
            "柑橘系の匂い", "かんきつけいのにおい", "カンキツケイノニオイ"
        ],
        isLike: IS_LIKE.LIKE,
        optional: []
    },
];
exports.DISLIKE_LIST = [
    {
        name: [
            "ばらの匂い", "ばらのにおい", "バラノニオイ",
            "ばらの香り", "ばらのかおり", "バラノカオリ"
        ],
        isLike: IS_LIKE.DISLIKE,
        optional: []
    },
    {
        name: ["ミートソース", "みーとそーす"],
        isLike: IS_LIKE.DISLIKE,
        optional: [{ description: "△" }]
    },
    {
        name: ["カルピス", "かるぴす"],
        isLike: IS_LIKE.DISLIKE,
        optional: [{ description: "△" }]
    },
    {
        name: ["春巻", "はるまき", "ハルマキ"],
        isLike: IS_LIKE.DISLIKE,
        optional: [{ description: "△" }]
    },
    {
        name: ["あんまん", "アンマン"],
        isLike: IS_LIKE.DISLIKE,
        optional: [{ description: "△" }]
    },
    {
        name: ["ハヤシライス", "はやしらいす"],
        isLike: IS_LIKE.DISLIKE,
        optional: []
    },
    {
        name: ["きのこ", "キノコ", "茸"],
        isLike: IS_LIKE.DISLIKE,
        optional: []
    },
    {
        name: ["栄養ドリンク", "えいようどりんく", "エイヨウドリンク"],
        isLike: IS_LIKE.DISLIKE,
        optional: []
    },
    {
        name: ["シーザードレッシング", "しーざーどれっしんぐ", "しーざーさらだ", "シーザーサラダ"],
        isLike: IS_LIKE.DISLIKE,
        optional: []
    },
    {
        name: ["カロリーメイトフルーツ", "かろりーめいとふるーつ"],
        isLike: IS_LIKE.DISLIKE,
        optional: []
    },
    {
        name: ["タルタルソース", "たるたるそーす"],
        isLike: IS_LIKE.DISLIKE,
        optional: []
    },
    {
        name: ["メロン", "めろん"],
        isLike: IS_LIKE.DISLIKE,
        optional: []
    },
    {
        name: ["キウイ", "きうい"],
        isLike: IS_LIKE.DISLIKE,
        optional: []
    },
    {
        name: ["辛いもの", "からいもの", "カライモノ"],
        isLike: IS_LIKE.DISLIKE,
        optional: []
    },
    {
        name: ["アボカド", "あぼかど", "アボガド", "あぼがど"],
        isLike: IS_LIKE.DISLIKE,
        optional: []
    },
    {
        name: ["黒糖", "こくとう", "コクトウ"],
        isLike: IS_LIKE.DISLIKE,
        optional: []
    },
    {
        name: ["〆鯖", "しめさば", "シメサバ", "〆さば", "〆サバ"],
        isLike: IS_LIKE.DISLIKE,
        optional: []
    },
    {
        name: ["ウニ", "雲丹", "うに"],
        isLike: IS_LIKE.DISLIKE,
        optional: []
    },
    {
        name: ["甲殻類", "こうかくるい", "コウカクルイ"],
        isLike: IS_LIKE.DISLIKE,
        optional: []
    },
    {
        name: ["柿", "かき", "カキ"],
        isLike: IS_LIKE.DISLIKE,
        optional: []
    },
    {
        name: ["牡蠣", "かき", "カキ"],
        isLike: IS_LIKE.DISLIKE,
        optional: []
    },
    {
        name: ["コーラ", "こーら"],
        isLike: IS_LIKE.DISLIKE,
        optional: []
    },
    {
        name: ["上白糖", "じょうはくとう", "ジョウハクトウ"],
        isLike: IS_LIKE.DISLIKE,
        optional: []
    },
    {
        name: ["グリーンピース", "ぐりーんぴーす", "ぐりんぴーす", "グリンピース"],
        isLike: IS_LIKE.DISLIKE,
        optional: []
    },
    {
        name: ["餅", "もち", "モチ"],
        isLike: IS_LIKE.DISLIKE,
        optional: []
    },
    {
        name: ["甘酒", "あまざけ", "アマザケ"],
        isLike: IS_LIKE.DISLIKE,
        optional: []
    },
    {
        name: ["ホイップクリーム", "ほいっぷくりーむ"],
        isLike: IS_LIKE.DISLIKE,
        optional: []
    },
];
exports.CONDITIONAL_LIST = [
    {
        name: ["鰹節", "かつおぶし", "カツオブシ"],
        isLike: IS_LIKE.CONDITIONAL,
        optional: [{ description: "醤油がかかったものがだめ" }]
    },
    {
        name: ["ポテトサラダ", "ぽてとさらだ"],
        isLike: IS_LIKE.CONDITIONAL,
        optional: [{ description: "他人が作ったもので痒くなる場合有" }]
    },
    {
        name: ["猫", "ねこ", "ネコ"],
        isLike: IS_LIKE.CONDITIONAL,
        optional: [{ description: "好きだがアレルギー" }]
    },
];

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
const LIKE_AS_MARK = [
    "◎",
    "×",
    "△"
];
const updateTextContent = (text, textArea) => {
    textArea.textContent = text;
};
const isIncludesName = (word, nameList) => {
    for (const name of nameList) {
        if (name.includes(word))
            return true;
    }
    return false;
};
const searchTaste = (word) => {
    const TASTE_LISTS = [database_1.CONDITIONAL_LIST, database_1.DISLIKE_LIST, database_1.LIKE_LIST];
    console.log(word);
    const matched = [];
    for (const taste_list of TASTE_LISTS) {
        for (const taste of taste_list) {
            const names = taste.name;
            if (isIncludesName(word, names))
                matched.push(taste);
        }
    }
    return matched;
};
const mergeResult = (tastes) => {
    const textList = [];
    for (const taste of tastes) {
        const name = taste.name[0];
        const mark = LIKE_AS_MARK[taste.isLike];
        const optional = (taste.optional.length > 0) ? String.raw `: ${taste.optional[0].description}` : '';
        const text = String.raw `${mark}: ${name}${optional}`;
        textList.push(text);
    }
    return textList.join('\n');
};
const main = () => {
    const searchbox = document.querySelector('input');
    const searchResult = document.querySelector('.search_result');
    if (!searchbox || !searchResult)
        throw Error;
    const onInput = (event) => {
        if (!event.target)
            throw Error();
        const word = event.target.value;
        const matched = searchTaste(word);
        const resultText = mergeResult(matched);
        updateTextContent(resultText, searchResult);
    };
    searchbox.addEventListener('input', onInput);
};
main();

},{"./database":1}]},{},[2]);
