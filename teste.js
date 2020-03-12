/* 
 
function addFavoriteBook(bookName) {

    var favoriteBooks = ["k", "m", "c"];
    var bookName = favoriteBooks.includes("Great")

    if (bookName == false) {
        favoriteBooks.push("Great");
    } else {
        console.log("It already exists");

    }

    function printFavoritBooks() {
        var a = favoriteBooks.length;
        console.log("livres" + " " + "favoris:" + a);
        for (let value of favoriteBooks) {
            console.log(value);
        }

    } printFavoritBooks()


} addFavoriteBook() */
function addFavoriteBook(bookName) {
    var favoriteBook = ["Saab", "Volvo", "BMW"];
    var bookName = favoriteBook.includes("Great");
    console.log(favoriteBook.includes("Great"));
    if (bookName == false) {
        favoriteBook.push("Great");
        console.log("makaynax");
    } else {
        console.log("kayna");
    }
    console.log(favoriteBook)
}
addFavoriteBook();