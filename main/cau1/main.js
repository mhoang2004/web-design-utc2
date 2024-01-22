// document.getElementById('search-by-btn').addEventListener('click', () => {
//     const minPrice = document.getElementById('min-price')
//     const maxPrice = document.getElementById('max-price')
//     const keyWord = document.getElementById('keyword').value

//     if (keyWord == '') {
//         alert('Keyword empty')
//     }
// })

const numPatern = /^\d+$/

const validateForm = () => {
    const minPrice = document.getElementById('min-price').value
    const maxPrice = document.getElementById('max-price').value
    const keyWord = document.getElementById('keyword').value

    if (keyWord == '') {
        alert('Keyword empty')
        return false
    }

    if (!numPatern.test(minPrice) || !numPatern.test(maxPrice)) {
        alert('Price must be a number')
        return false
    }

    if (minPrice < 0 || maxPrice < 0) {
        alert('Price must be positive')
        return false
    }

    return true
}
