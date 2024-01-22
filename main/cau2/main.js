const numPatern = /^\d+$/

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

    if (!numPatern.test(minPrice) || !numPatern.test(maxPrice)) {
        alert('Price must be a number')
        console.log(numPatern.test(minPrice))
        return false
    }

    return true
}
