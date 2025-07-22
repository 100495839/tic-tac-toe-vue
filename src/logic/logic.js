import {
	BOARD_DIMENSION,
	DIAGONALS,
	GAME_RESULT,
} from "../constants/constants";

const checkColumnWin = ({ board, player, cellID }) => {
	const cellColumn = cellID % BOARD_DIMENSION;
	let winCells = [];

	// Check if all cells of that column have "player"
	const isColumnWin = board.every((cell, index) => {
		if (index % BOARD_DIMENSION === cellColumn) {
			winCells.push(index);
			return cell === player;
		}
		return true;
	});

	return { isColumnWin, winCells };
};

const checkRowWin = ({ board, player, cellID }) => {
	const cellRow = Math.floor(cellID / BOARD_DIMENSION);
	let winCells = [];

	// Check if all cells of that row have "player"
	const isRowWin = board.every((cell, index) => {
		if (Math.floor(index / BOARD_DIMENSION) === cellRow) {
			winCells.push(index);
			return cell === player;
		}
		return true;
	});

	return { isRowWin, winCells };
};

const checkDiagonalWin = ({ board, player, cellID }) => {
	let diagonalsToCheck = [];
	let winCells = [];
	let isDiagonalWin = false;

	// We have to be wary of cells may be in both diagonals
	// If cellID is one of those cells, we cannot infer in which diagonal they could have won
	DIAGONALS.forEach((diagonal, index) => {
		if (diagonal.includes(cellID)) {
			diagonalsToCheck.push(index);
		}
	});

	diagonalsToCheck.forEach((diagonalID) => {
		const isDiagonalFilled = DIAGONALS[diagonalID].every((cellID) => {
			return board[cellID] === player;
		});
		if (isDiagonalFilled) {
			winCells = winCells.concat(DIAGONALS[diagonalID]);
			isDiagonalWin = true;
		}
	});

	return { isDiagonalWin, winCells };
};

const checkSingleWin = ({ board, player, cellID }) => {
	const { isColumnWin, winCells: winCellsColumn } = checkColumnWin({
		board,
		player,
		cellID,
	});
	if (isColumnWin) {
		return { isWin: true, winCells: winCellsColumn };
	}

	const { isRowWin, winCells: winCellsRow } = checkRowWin({
		board,
		player,
		cellID,
	});
	if (isRowWin) {
		return { isWin: true, winCells: winCellsRow };
	}

	const { isDiagonalWin, winCells: winCellsDiagonal } = checkDiagonalWin({
		board,
		player,
		cellID,
	});
	if (isDiagonalWin) {
		return { isWin: true, winCells: winCellsDiagonal };
	}

	return { isWin: false };
};

const checkDoubleWin = ({ board, player, cellID }) => {
	let numWinsLeft = 2;
	let winCells = [];

	const { isColumnWin, winCells: winCellsColumn } = checkColumnWin({
		board,
		player,
		cellID,
	});
	if (isColumnWin) {
		winCells = winCells.concat(winCellsColumn);
		numWinsLeft--;
	}

	const { isRowWin, winCells: winCellsRow } = checkRowWin({
		board,
		player,
		cellID,
	});
	if (isRowWin) {
		winCells = winCells.concat(winCellsRow);
		numWinsLeft--;
	}

	const { isDiagonalWin, winCells: winCellsDiagonal } = checkDiagonalWin({
		board,
		player,
		cellID,
	});
	if (isDiagonalWin && numWinsLeft !== 0) {
		winCells = winCells.concat(winCellsDiagonal);
		numWinsLeft--;
	}

	if (numWinsLeft === 2) {
		return { isWin: false };
	}

	return { isWin: true, winCells };
};

const checkWin = ({ board, player, cellID }) => {
	const numMoves = board.filter((cell) => cell === player).length;
	if (numMoves < 3) {
		return { isWin: false };
	} else {
		let isWin, winCells;

		if (numMoves === 5) {
			({ isWin, winCells } = checkDoubleWin({ board, player, cellID }));
		} else {
			({ isWin, winCells } = checkSingleWin({ board, player, cellID }));
		}

		return { isWin, winCells };
	}
};

export const checkGameResult = ({ board, player, cellID }) => {
	const { isWin, winCells } = checkWin({ board, player, cellID });
	if (isWin) {
		return { gameResult: GAME_RESULT.WIN, winCells };
	}

	// If there is no win but there are no moves left either
	const isBoardFull = !board.includes(null);
	if (isBoardFull) {
		return { gameResult: GAME_RESULT.TIE };
	}

	return { gameResult: GAME_RESULT.CONTINUE };
};
