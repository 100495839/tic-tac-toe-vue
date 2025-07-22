<script setup>
import GameBoard from "./GameBoard.vue";
import GameTurn from "./GameTurn.vue";
import RestartButton from "./RestartButton.vue";
import { BOARD_STATE } from "../constants/constants";
import { useGame } from "../composables/useGame";

const { board, turn, status, winner, winCells, updateCell, restart } =
	useGame();
</script>

<template>
	<main class="main">
		<GameTurn />
		<GameBoard :board="board" :update-cell="updateCell" />
		<RestartButton />
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
