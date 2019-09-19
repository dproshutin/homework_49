var whiteCell = "██";
var blackCell = "  ";
var NUMBER_CELLS_IN_ROW = 8;
var NUMBER_CELLS_IN_COLUMN = 8;
var cellToPrint = whiteCell;

for(var i = 0; i < NUMBER_CELLS_IN_COLUMN; i++) {
	var cellsInRow = cellToPrint;
	for(var j = 0; j < (NUMBER_CELLS_IN_ROW - 1); j++) {
		cellToPrint = (cellToPrint === whiteCell) ? blackCell : whiteCell;
		cellsInRow += cellToPrint;
	}
	console.log(cellsInRow);
}