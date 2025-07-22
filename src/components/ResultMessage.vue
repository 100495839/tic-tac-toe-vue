<script setup>
const props = defineProps({
	status: undefined,
	winner: undefined,
});
</script>

<template>
	<div class="result-message"></div>
</template>

<style scoped>
.result-message {
	display: flex;
	align-items: center;
	height: 4rem;
}

.result-message__title {
	position: relative;
	font-size: 2rem;
	font-weight: normal;
	padding: 0.5rem 0.8rem;
	/* background-color: rgb(236, 234, 255); */
	/* outline: 2px solid rgb(61, 94, 183); */
}

.result-message__title::after {
	position: absolute;
	top: 60%;
	right: 0;
	z-index: -1;
	content: "";
	height: 35%;
	width: 100%;
	background-color: rgb(236, 234, 255);
}

.result-message__title strong {
	color: rgb(61, 94, 183);
	font-weight: 500;
}
</style>
