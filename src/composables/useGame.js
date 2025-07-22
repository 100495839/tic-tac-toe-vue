import { reactive } from "vue";
import {
	CELL_STATE,
	TURN_STATE,
	WINNER_STATE,
	BOARD_STATE,
	GAME_RESULT,
	ACTION_TYPES,
} from "../constants/constants";
import { checkGameResult } from "../logic/logic";

export function useGame() {
	const state = reactive({
		board: BOARD_STATE.EMPTY,
		turn: TURN_STATE.X,
		status: GAME_RESULT.CONTINUE,
		winner: WINNER_STATE.NO_ONE,
		winCells: [],
	});

	const updateCell = (cellID) => {
		if (true) {
			state.board[cellID] = state.turn;
		}
	};

	const restart = () => {
		reducer({ type: ACTION_TYPES.RESTART });
	};

	return {
		...state,
		updateCell,
		restart,
	};
}
