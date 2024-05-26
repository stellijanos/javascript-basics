
showStars(5);

function showStars(rows) {
    let row = '*';
    for (let i = 0; i < rows; i++) {
        console.log(row);
        row += '*';
    }
}
