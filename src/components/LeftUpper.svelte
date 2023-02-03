<script>
    import LeftMenuButton from './LeftMenuButton.svelte'
    import SideMenuTitle from './SideMenuTitle.svelte'
</script>

<div class="wrapper">
    <div class="content">
        <LeftMenuButton name="Temperature Pod Belly" value="22°C" />
        <LeftMenuButton name="Temperature Pod Top" value="18°C" />
        <LeftMenuButton name="Temperature #1" value="17°C" />
        <LeftMenuButton name="Temperature #2" value="17°C" />
        <LeftMenuButton name="Temperature #3" value="17°C" />
        <LeftMenuButton name="Temperature #4" value="18°C" />
        <LeftMenuButton name="Small Force #1" value="18°C" />
        <LeftMenuButton name="Small Force #2" value="18°C" />
        <LeftMenuButton name="Small Force #3" value="18°C" />
        <LeftMenuButton name="Small Force #4" value="18°C" />
        <LeftMenuButton name="Big Force" value="18°C" />
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
