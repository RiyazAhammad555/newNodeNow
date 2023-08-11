let num = Math.floor(Math.random() * 10)
if (num < 5) {
    console.log("The number is less than 5 waiting for 2 seconds reveal the number")
    setTimeout(() => {
        console.log(num)
    }, 2000)
}