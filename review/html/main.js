const validateForm = () => {
    const email = document.getElementById('email').value
    const comment = document.getElementById('comment').value
    const rating = document.getElementById('rating').value

    const numPattern = /^\d+$/
    const emailPattern = /^[\w-\.]+@([\w]+\.)+[\w]+{2,4}$/

    if (email == '' || comment == '' || rating == '') {
        alert('Empty error!!')
        return false
    }

    if (numPattern.test(rating)) {
        alert('Rating must be a number')
        return false
    }
}
