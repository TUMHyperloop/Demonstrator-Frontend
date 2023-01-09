<script context="module" lang="ts">
    import logo from '../assets/logo.svg'
    import notification from '../assets/notification.svg'
</script>

<div class="fullscreen">
    <div class="side-menu">
        <div class="upper">
            <h1>SENSORS</h1>
        </div>
        <div class="lower">
            <h1>ACTORS</h1>
        </div>
    </div>
</div>

<style>
    .fullscreen {
        background-color: #212121;
        width: 100vw;
        height: 100vh;
        overflow-x: scroll;
        overflow-y: scroll;
    }

    .side-menu {
        background-color: #212121;
        height: 100%;
        width: 246px;
        display: flex;
        flex-flow: column;
        position: relative;

        justify-content: space-between;
    }
    .upper {
        height: 49%;
        width: 100%;
        background-color: #303030;
    }
    .lower {
        height: 49%;
        width: 100%;
        background-color: #303030;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
    }
    h1 {
    }
</style>
