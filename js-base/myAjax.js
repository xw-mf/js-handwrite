function myAjax(url) {
    const xhr = new XMLHttpRequest()
    xhr.open('post', url)
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log(JSON.parse(xhr.responseText))
            }
        }
    }
    xhr.send(null)
}