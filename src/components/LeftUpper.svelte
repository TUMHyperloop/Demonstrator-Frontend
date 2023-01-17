<script>
    import LeftMenuButton from './LeftMenuButton.svelte'
    import SideMenuTitle from './SideMenuTitle.svelte'
</script>

<div class="wrapper">
    <div class="content">
        <LeftMenuButton name="Temperature 1" value="10°C" />
        <LeftMenuButton name="Temperature 1" value="10°C" />
        <LeftMenuButton name="Temperature 1" value="10°C" />
        <LeftMenuButton name="Temperature 1" value="10°C" />
    </div>

    <SideMenuTitle title="sensors" />
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
</style>
