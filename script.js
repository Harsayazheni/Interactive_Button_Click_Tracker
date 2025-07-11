function createCounter() {
    let count = 0
    return function() {
        count++
        return count
    }
}

const counter = createCounter()
const button = document.querySelector('button')
const display = document.querySelector('p')

button.addEventListener('click', function() {
    const clicks = counter()
    display.textContent = "Number of Clicks: " + clicks
})
