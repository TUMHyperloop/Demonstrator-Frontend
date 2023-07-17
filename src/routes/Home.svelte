<script>
    import LeftLower from '../components/LeftLower.svelte'
    import LeftUpper from '../components/LeftUpper.svelte'
    import RightLower from '../components/RightLower.svelte'
    import RightUpper from '../components/RightUpper.svelte'
    import Main from '../components/Main.svelte'
    import TopMenu from '../components/TopMenu.svelte'

    // Highlight specific tab and display subsystem in the main area
    let selectedSubsystem = 'tube'
    function handleSubsystemSelected(event) {
        selectedSubsystem = event.detail
    }
</script>

<div class="grid-container">
    <div class="top-nav">
        <TopMenu
            on:subsystemSelected={handleSubsystemSelected}
            {selectedSubsystem}
        />
    </div>
    <div class="left-nav">
        <div class="side-grid">
            <div class="upper"><LeftUpper /></div>
            <div class="distancer" />
            <div class="lower"><LeftLower /></div>
        </div>
    </div>
    <div class="main"><Main {selectedSubsystem} /></div>
    <div class="right-nav">
        <div class="side-grid">
            <div class="upper"><RightUpper /></div>
            <div class="distancer" />
            <div class="lower"><RightLower /></div>
        </div>
    </div>
</div>

<style>
    .grid-container {
        background-color: #212121;
        width: 1910px;
        height: 1080px;

        display: grid;
        grid-template-columns: 246px auto 246px;
        grid-template-rows: 40px auto;
    }

    .top-nav {
        grid-column-start: 1;
        grid-column-end: 4;
    }
    .left-nav {
        background-color: #212121;
    }
    .main {
        background-color: #212121;
        overflow-y: scroll;
    }
    .main::-webkit-scrollbar {
        display: none;
    }
    .right-nav {
        background-color: #212121;
    }

    .side-grid {
        height: 100%;
        width: 100%;
        display: grid;
        grid-template-rows: 1fr 5px 1fr;
        grid-template-columns: 100%;
    }
    .upper {
        background-color: #303030;
    }
    .lower {
        background-color: #303030;
    }
</style>
