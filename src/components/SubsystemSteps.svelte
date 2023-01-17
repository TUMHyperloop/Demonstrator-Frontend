<script>
    export let subsystemNameShort = 'tube'
    export let stepsCompleted = 3
    export let stepsTotal = 5
</script>

<div class="subsystem">{subsystemNameShort.toUpperCase()}</div>
<div class="steps">
    {#each Array(stepsCompleted) as stepCompleted}
        <div class="completed" />
    {/each}
    {#each Array(stepsTotal - stepsCompleted) as stepsNotCompleted}
        <div class="uncompleted" />
    {/each}
</div>

<style>
    .subsystem {
        font-family: 'Poppins';
        font-size: 18px;
        font-weight: 300;
        letter-spacing: 0.075em;
        color: white;
        margin-left: 25px;
        margin-top: 15px;
        cursor: pointer;
    }
    .steps {
        display: flex;
        flex-direction: row;
        margin-left: 25px;
        margin-top: 2px;
        align-items: center;
    }
    .completed {
        height: 20px;
        width: 20px;
        background-color: white;
        border-radius: 50%;
        margin-right: 8px;
    }
    .uncompleted {
        border: 2px solid white;
        height: 16px;
        width: 16px;
        border-radius: 50%;
        margin-right: 8px;
    }
</style>
