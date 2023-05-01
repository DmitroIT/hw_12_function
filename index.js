const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
function generateKey(leng, characters) {
    const arr = characters.split("").sort(function () {
        return 0.5 - Math.random();
    });
    const sortArr = arr
    sortArr.splice(leng);
    const key = sortArr.join("");
    console.log(key);
}
generateKey(16, characters);


