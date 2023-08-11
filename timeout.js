const pro = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success')
    }, 2000)
})
pro.then((res) => { console.log(res) }).catch((err) => { console.log(err) })