<script setup>
import { computed } from "vue";

const props = defineProps({
	id: Number,
	isWinner: Boolean,
	updateCell: Function,
	content: [String, null],
});

const cellClassName = computed(
	() => `cell ${props.isWinner ? "cell--winner" : ""}`
);
</script>

<template>
	<div :class="cellClassName" @click="props.updateCell(props.id)">
		{{ props.content }}
	</div>
</template>

<style scoped>
.cell {
	height: 100%;
	width: 100%;
	background-color: white;
	outline: 2px solid #888;
	/* border-radius: 5px; */
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 3rem;
	color: rgb(49, 49, 49);
	user-select: none;
	font-weight: lighter;
}

.cell:hover,
.cell--winner {
	outline-color: rgb(61, 94, 183);
	background-color: rgb(242, 240, 255);
	color: rgb(61, 94, 183);
}

.cell--winner {
	animation: win 0.5s linear;
}

@keyframes win {
	from {
		background-color: rgb(195, 191, 225);
	}
	to {
		background-color: rgb(242, 240, 255);
	}
}
</style>
