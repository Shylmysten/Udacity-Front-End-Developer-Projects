var articleList, h1, kids, parents;

articleList = $( '.article-list' );
h1 = articleList.siblings( 'h1' );
kids = articleList.children(); // only returns the list items
kids1 = articleList.find( '*' ); // returns all the elements children and grandchidlren, and so on
parents = articleList.parents( 'div' );
console.log( kids, kids2 );