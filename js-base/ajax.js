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

ajax('https://api.github.com/users/octocat', 'GET').then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})


