<script>
    export let subsystemName = 'Tube Control'
    export let actions = ['Confirm Operational', 'Close Door']
</script>

<div class="subsystem">
    <h2>{subsystemName}</h2>
    {#each actions as action}
        <div>
            <div class="action">{action}</div>
            <div class="subsystem-distancer" />
        </div>
    {/each}
</div>

<style>
    .subsystem {
        display: flex;
        align-items: end;
        flex-direction: column;
        margin-right: 16px;
        color: white;
    }
    .subsystem h2 {
        font-weight: 500;
        font-family: 'Poppins';
        font-size: 15px;
        margin-bottom: 5px;
    }
    .subsystem > div {
        display: flex;
        flex-direction: row;
        width: 180px;
        font-family: 'Poppins';
        font-weight: 300;
        font-size: 15px;
        line-height: 30px;
        margin-right: 5px;
        white-space: nowrap;
    }
    .action {
        width: fit-content;
        margin-right: 7px;
    }
    .subsystem-distancer {
        flex-grow: 1;
        height: 15px;
        margin-left: 5px;
        border-bottom: 1px solid #636363;
        border-right: 1px solid #636363;
    }
</style>
