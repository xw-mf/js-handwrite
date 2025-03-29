function ajax(url, method) {
    const p = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url, true)
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText))
                } else {
                    reject(xhr.status)
                }
            }
        }

        xhr.send(null)
    })

    return p
}

function myPromiseAjax(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('post', url)
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText))
                } else {
                    reject(new Error(xhr.statusText))
                }
            }
        }
        xhr.onerror = function () {
            reject(new Error(xhr.statusText))
        }
        xhr.responseType = 'json'
        xhr.setRequestHeader('Accept', 'application/json')
        xhr.send(null)
    })
}

ajax('https://api.github.com/users/octocat', 'GET').then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})


