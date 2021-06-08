<template>
	<svg-map :map="World" />
</template>

<script>
import { SvgMap } from "vue-svg-map";
import World from "@svg-maps/world";

export default {
	name: "worldMap",
	components: {
		SvgMap
	},
	data() {
		return {
			World
		};
	}
};
</script>

<style src="vue-svg-map/dist/index.css"></style>
