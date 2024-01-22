const numPattern = /^\d+$/

const checkKeyWord = (keyWord) => {
    console.log(keyWord)
    keyWord.split('').forEach((e) => {
        if (e == ' ') {
            return true
        }
        console.log(e)
    })
    return false
}

const validateForm = () => {
    const keyWord = document.getElementById('keyword').value
    const minPrice = document.getElementById('min-price').value
    const maxPrice = document.getElementById('max-price').value

    if (keyWord == '') {
        alert('Keyword empty')
        return false
    }

    if (minPrice == '') {
        alert('Min price empty')
        return false
    }

    if (maxPrice == '') {
        alert('Max price empty')
        return false
    }

    if (!numPattern.test(minPrice) || !numPattern.test(maxPrice)) {
        alert('Price must be a number')
        return false
    }

    if (keyWord.includes(' ')) {
        alert('Key must not be contain space')
        return false
    }

    // if (checkKeyWord(keyWord)) {
    //     alert('Key must not be contain space')
    //     return false
    // }

    return true
}
