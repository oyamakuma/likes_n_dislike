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
