const validateForm = () => {
    const email = document.getElementById('email').value
    const content = document.getElementById('comment-content').value
    const rating = document.getElementById('rating').value

    console.log(email, content, rating)

    const numPattern = /^\d+$/
    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    if (email == '' || content == '' || rating == '') {
        alert('Empty error!!')
        return false
    }

    if (!numPattern.test(rating)) {
        alert('Ratting must be a number')
        return false
    }

    if (!emailPattern.test(email)) {
        alert('Invalid email')
        return false
    }

    if (content.length < 30) {
        alert('Comment content length < 30 !')
        return false
    }
    return true
}
