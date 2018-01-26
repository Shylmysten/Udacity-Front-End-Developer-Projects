let height, width, pxColor;

pxColor = $( "#colorPicker" ).val();


/*
@ Set up event EventListeners
*/

// When size is submitted by the user, call makeGrid()
$( ':submit' ).on( 'click', function makeGrid() {
  // 1. clear the canvas by removing all child elements from the table
  $( '#pixel_canvas' ).empty();
  //pxColor = "";

  // 2. Get height and width from the UI inputs
  height = $( '#input_height' ).val();
  width = $( '#input_width' ).val();

  // 3. Make the grid and update the UI
  // GRID MAKER //

  // Using the value of the height input Make the table rows
  for ( let r = 1; r <= height; r++ ) {
    // declare the variable "row", and assign value as string of a table row
    let row = "<tr></tr>";

    // Update the UI
    // Append the first row to the table and each subsequent row to the last
    $( '#pixel_canvas' ).append( row );

    // Using the value of the width input Make the table columns
    for ( let c = 1; c <= width; c++ ) {
      // declare the variable "column", assign value as the string equivilant of a table column, giving each column a uniqueID with its location in the grid by row# and column#.
      let column = `<td id='r${r}c${c}'></td>`;

      // Update the UI
      // get the current row by its index with the formula row minus 1 (r-1) and insert the next column as the last child.
      $( `#pixel_canvas tr:eq(${r-1})` ).append( column );
    }
  }
  // prevent the default action of the form being submitted and the page being refreshed
  event.preventDefault();
} );


// Event Listener  - delegates event handling to the table because elements are not built when listener is attached.
$( "#pixel_canvas" ).on( "click", "td", function( event ) {
  pxColor = $( "#colorPicker" ).val();
  $( this ).css( "background-color", pxColor );
  var id = $( this ).attr( 'id' );
  console.log( `My cell Id is ${id}, my background-color is ${pxColor}` );
} );