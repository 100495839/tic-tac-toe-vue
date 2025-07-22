export const BOARD_DIMENSION = 3;

export const DIAGONALS = [
	[0, 4, 8],
	[2, 4, 6],
];

export const CELL_STATE = {
	X: "X",
	O: "O",
	EMPTY: null,
};

export const TURN_STATE = {
	X: "X",
	O: "O",
	GAME_FINISHED: "GAME_FINISHED",
};

export const WINNER_STATE = {
	X: "X",
	O: "O",
	NO_ONE: null,
};

export const BOARD_STATE = {
	EMPTY: Array(9).fill(CELL_STATE.EMPTY),
	WIN_X_NOT_FULL: ["X", "O", "O", null, "X", null, null, null, "X"],
	WIN_X_FULL: ["X", "O", "O", "X", "X", "O", "O", "X", "X"],
	TIE: ["X", "O", "O", "O", "X", "X", "X", "X", "O"],
};

export const GAME_RESULT = {
	WIN: "WIN",
	TIE: "TIE",
	CONTINUE: "CONTINUE",
};

export const ACTION_TYPES = {
	MOVE: "MOVE",
	RESTART: "RESTART",
};
