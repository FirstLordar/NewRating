async function getData () {
    try {
        const response = await fetch('https://api-code-2.practicum-team.ru/games')
        const data = await response.json(); 
        return data;
    } catch (error) {
console.log(error)
    }
}

module.exports = {getData};