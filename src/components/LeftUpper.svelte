<script>
    import LeftMenuButton from './LeftMenuButton.svelte'
    import SideMenuTitle from './SideMenuTitle.svelte'
</script>

<div class="wrapper">
    <div class="content">
        <LeftMenuButton name="Humidity Sensor" value="0 g.m^-3" />
        <LeftMenuButton name="Distance Sensor #1" value="0 mm" />
        <LeftMenuButton name="Distance Sensor #2" value="0 mm" />
        <LeftMenuButton name="Temperature #1" value="17°C" />
        <LeftMenuButton name="Temperature #2" value="17°C" />
        <LeftMenuButton name="Temperature #3" value="17°C" />
        <LeftMenuButton name="Temperature #4" value="18°C" />
        <LeftMenuButton name="Temperature #5" value="18°C" />
        <LeftMenuButton name="Temperature #6" value="18°C" />
        <LeftMenuButton name="Temperature #7" value="18°C" />
        <LeftMenuButton name="Temperature #8" value="18°C" />
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
