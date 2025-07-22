<script setup>
import GameBoard from "./GameBoard.vue";
import GameTurn from "./GameTurn.vue";
import RestartButton from "./RestartButton.vue";
import { GAME_RESULT } from "../constants/constants";
import { useGame } from "../composables/useGame";
import ResultMessage from "./ResultMessage.vue";
import { computed } from "vue";

const { board, turn, status, winner, winCells, updateCell, restart } =
	useGame();

const isGameOver = computed(() => status.value !== GAME_RESULT.CONTINUE);
</script>

<template>
	<main class="main">
		<ResultMessage v-if="isGameOver" :status="status" :winner="winner" />
		<GameTurn v-else :turn="turn" />

		<GameBoard
			:board="board"
			:update-cell="updateCell"
			:winCells="winCells"
		/>
		<RestartButton :restart="restart" :is-game-over="isGameOver" />
	</main>
</template>

<style scoped>
.main {
	display: flex;
	flex-direction: column;
	/* justify-content: center; */
	align-items: center;
	gap: 2rem;
	padding-top: 2rem;
}
</style>
