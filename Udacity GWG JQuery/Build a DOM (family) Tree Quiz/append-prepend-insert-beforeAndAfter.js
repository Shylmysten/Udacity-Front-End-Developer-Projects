var firstArticleItem;

// selects the first article-item
firstArticleItem = $( '.article-item' ).first();
// sets this image as the FIRST child of the selected article-item
firstArticeItem.prepend( '<img src="http://placepuppy.it/200/300">' );
// sets this as the LAST child of the selected article-item
firstArticeItem.append( '<img src="http://placepuppy.it/200/300">' );

// to create SIBLING of firstArticleItem use
// .insertBefore() adds a sibling BEFORE the current element
// .insertAfter() adss a sibling AFTER the current element