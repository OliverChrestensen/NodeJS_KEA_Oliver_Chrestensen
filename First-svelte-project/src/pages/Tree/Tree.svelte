<script>
import Sun from "../../components/Sun/Sun.svelte";
import Apple from "./Apple.svelte";

    

    let apples = ["🍏","🍎","🍎","🍏","🍏","🍎"];

    function pickApple(){
        apples.pop();
        apples = apples
    }

</script>

<Sun/>
<h2>I'm a tree</h2>
<button on:click={pickApple}>pick an apple</button>
{#each apples as apple}
<Apple apple={apple}/>

{/each}







<style>

</style>