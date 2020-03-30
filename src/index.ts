import  { CONDITIONAL_LIST, DISLIKE_LIST, ITaste, LIKE_LIST } from  './database'

const LIKE_AS_MARK = [
  "◎", // LIKE
  "×", // DISLIKE
  "△"  // CONDITIONAL 
]

const updateTextContent = (text: string, textArea: Element): void => {
  textArea.textContent = text
}


const isIncludesName = (word: string, nameList: string[]): boolean => {
  for (const name of nameList) {
    if (name.includes(word)) return true
  }
  return false
}

const searchTaste = (word: string): ITaste[] => {
  const TASTE_LISTS = [CONDITIONAL_LIST, DISLIKE_LIST, LIKE_LIST]
  console.log(word)
  // Show all
  // if (!word.trim()) return []
  const matched: ITaste[] = []
  // For each list
  for (const taste_list of TASTE_LISTS) {
    // For each taste
    for (const taste of taste_list) {
      const names = taste.name
      if (isIncludesName(word, names)) matched.push(taste)
    }
  }
  return matched  
}

const mergeResult = (tastes: ITaste[]) => {
  const textList = []
  for (const taste of tastes) {
    const name = taste.name[0]
    const mark = LIKE_AS_MARK[taste.isLike]
    const optional = (taste.optional.length > 0) ? String.raw`: ${taste.optional[0].description}` : ''
    const text = String.raw`${mark}: ${name}${optional}`
    textList.push(text)
  }
  return textList.join('\n')
}

const main = () => {
  const searchbox = document.querySelector('input')
  const searchResult = document.querySelector('.search_result')
  
  if (!searchbox || !searchResult) throw Error
  
  

  const onInput = (event: Event) => {
    if (!event.target) throw Error()
    const word = (event.target as HTMLInputElement ).value
    const matched = searchTaste(word)
    const resultText = mergeResult(matched)
    updateTextContent(resultText, searchResult)
  }
 
  searchbox.addEventListener('input', onInput)
}  

main()

