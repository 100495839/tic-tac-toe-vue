<script setup>
import GameBoardCell from "./GameBoardCell.vue";

const props = defineProps({
	board: undefined,
	updateCell: undefined,
	winCells: undefined,
});
</script>

<template>
	<div class="board">
		<GameBoardCell
			v-for="(cell, index) in board"
			:key="index"
			:id="index"
			:content="cell"
			:update-cell="updateCell"
			:is-winner="false"
		/>
	</div>
</template>

<style scoped>
.board {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr;
	height: 20rem;
	width: 20rem;
	gap: 10px;
}

.board:hover {
	cursor: pointer;
}
</style>
