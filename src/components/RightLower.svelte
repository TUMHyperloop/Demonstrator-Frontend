<script>
    import SideMenuTitle from './SideMenuTitle.svelte'
    import SubsystemSteps from './SubsystemSteps.svelte'
    import NewTestConfig from './NewTestConfig.svelte'

    function handleCancelTest() {}

    function handleStartTest() {}

    let testActive = false
</script>

<div class="wrapper">
    <div class="content">
        {#if testActive == true}
            <button on:click={handleCancelTest}>CANCEL</button>
        {:else}
            <h1>SELECT SYSTEMS</h1>
            <NewTestConfig />
            <button on:click={handleStartTest}>CONTINUE</button>
        {/if}
    </div>

    <SideMenuTitle title="test" />
</div>

<style>
    .wrapper {
        height: 100%;
        width: 100%;
        position: relative;
        background-color: #303030;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    h1 {
        font-family: 'Poppins';
        font-size: 18px;
        font-weight: 500;
        letter-spacing: 0.075em;
        color: white;
        margin-top: 15px;
        margin-bottom: 30px;
        margin-left: 25px;
    }
    button {
        height: 36px;
        width: 144px;
        border-radius: 6px 0px 0px 6px;
        background-color: white;
        font-family: 'Poppins';
        font-size: 21px;
        font-weight: 500;
        color: #212121;
        position: absolute;
        right: 10px;
        margin-top: 30px;
        cursor: pointer;
    }
</style>
