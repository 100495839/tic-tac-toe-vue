import { reactive, toRefs } from "vue";
import {
	CELL_STATE,
	TURN_STATE,
	WINNER_STATE,
	BOARD_STATE,
	GAME_RESULT,
} from "../constants/constants";
import { checkGameResult } from "../logic/logic";

const state = reactive({
	board: [...BOARD_STATE.EMPTY],
	turn: TURN_STATE.X,
	status: GAME_RESULT.CONTINUE,
	winner: WINNER_STATE.NO_ONE,
	winCells: [],
});

export function useGame() {
	const updateCell = (cellID) => {
		if (
			state.board[cellID] === CELL_STATE.EMPTY &&
			state.status === GAME_RESULT.CONTINUE
		) {
			const oldState = {
				...state,
			};
			// board
			state.board[cellID] = oldState.turn;

			// status
			let winCells;
			({ gameResult: state.status, winCells } = checkGameResult({
				board: state.board,
				player: oldState.turn,
				cellID: cellID,
			}));

			// turn, winner, winCells
			if (state.status === GAME_RESULT.CONTINUE) {
				state.turn =
					oldState.turn === TURN_STATE.X
						? TURN_STATE.O
						: TURN_STATE.X;
			} else {
				state.turn = TURN_STATE.GAME_FINISHED;
				if (state.status === GAME_RESULT.WIN) {
					state.winner = oldState.turn;
					state.winCells = winCells;
				}
			}
		}
	};

	const restart = () => {
		state.board = [...BOARD_STATE.EMPTY];
		state.turn = TURN_STATE.X;
		state.status = GAME_RESULT.CONTINUE;
		state.winner = WINNER_STATE.NO_ONE;
		state.winCells = [];
	};

	return {
		...toRefs(state),
		updateCell,
		restart,
	};
}
