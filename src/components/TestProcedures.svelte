<script>
    import { subsystemToTest, testStatus } from '../stores/test.config'

    export let subsystemName = ''

    import Task from './Task.svelte'
    import { onMount } from 'svelte'

    onMount(() => {})
</script>

<h1>STATE</h1>
<div class="timeline">
    <Task />
</div>

<style>
    h1 {
        font-family: 'Poppins';
        font-weight: 500;
        color: white;
        font-size: 23px;
        letter-spacing: -0.025rem;
        margin: 20px 0 0 15px;
    }
    .timeline {
        position: relative;
        top: -3px;
        width: 46px;

        border-top: 3px solid white;
        border-left: 3px solid white;
        margin-left: 15px;
    }
</style>
