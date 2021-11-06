module.exports = {
    generateGrid: () => {
        let grid = []
        for (let i = 0; i < 5; i++) {
            grid.push([])
        }
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                // could add a check in the future to ensure that there are an x amount of vowels guaranteed
                grid[i][j] = String.fromCharCode(Math.floor((Math.random() * 26) + 65));
            }
        }

        return grid;
    }
}

