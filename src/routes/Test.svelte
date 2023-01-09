<script>
    import LeftLower from '../components/LeftLower.svelte'
    import LeftUpper from '../components/LeftUpper.svelte'
    import RightLower from '../components/RightLower.svelte'
    import RightUpper from '../components/RightUpper.svelte'
    import Main from '../components/Main.svelte'
    import TopMenu from '../components/TopMenu.svelte'
</script>

<div class="grid-container">
    <div class="top-nav"><TopMenu /></div>
    <div class="left-nav">
        <div class="side-grid">
            <div class="upper"><LeftUpper /></div>
            <div class="distancer" />
            <div class="lower"><LeftLower /></div>
        </div>
    </div>
    <div class="main"><Main /></div>
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
        width: 1920px;
        height: 1080px;

        display: grid;
        grid-template-columns: 246px auto 246px;
        grid-template-rows: 40px auto;
    }

    .top-nav {
        grid-column-start: 1;
        grid-column-end: 4;
        background-color: red;
    }
    .left-nav {
        background-color: #212121;
    }
    .main {
        background-color: #212121;
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
        height: 100%;
        width: 100%;
    }
    .lower {
        background-color: #303030;
    }
</style>
