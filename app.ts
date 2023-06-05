const books:IBook[] = [
    { title: '1984', author: 'George Orwell', year: 1949 },
    { title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
];

function getBooksByAuthor(author:string):IBook[] {
    return books.filter(book => book.author === author);
}

console.log(getBooksByAuthor('George Orwell'));

interface IBook {
    title:string,
    author:string,
    year:number,
}