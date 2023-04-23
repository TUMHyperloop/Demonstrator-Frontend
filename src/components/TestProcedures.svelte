<script>
    import { subsystemToTest, testStatus } from '../stores/test.config'
    import { allSteps } from '../stores/tube'

    export let subsystemName = 'tube'

    import Task from './Task.svelte'
    import { onMount } from 'svelte'

    onMount(() => {})
</script>

{#if $allSteps[subsystemName].length == 0}
    <h1>CONNECTING TO SERVER...</h1>
{:else}
    {subsystemName}
{/if}

<style>
    h1 {
        font-family: 'Poppins';
        font-weight: 500;
        color: white;
        font-size: 23px;
        letter-spacing: -0.025rem;
        margin: 20px 0 0 15px;
    }
</style>
