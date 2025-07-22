<script setup></script>

<template></template>

<style scoped>
.turn {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr;
	/* gap: 1rem; */
	font-size: 2rem;
	font-weight: 500;
	/* user-select: none; */
	align-items: center;
	height: 4rem;
}

.turn__X,
.turn__O {
	text-align: center;
	padding: 0.4rem 1rem;
	border-radius: 10px;
}

.turn--my-turn {
	color: white;
	background-color: rgb(61, 94, 183);
}
</style>
