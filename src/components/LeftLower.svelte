<script>
    import LeftMenuButton from './LeftMenuButton.svelte'
    import SideMenuTitle from './SideMenuTitle.svelte'
</script>

<div class="wrapper">
    <div class="content">
        <LeftMenuButton
            name="Pneumatic Sensor #1"
            value="FALSE"
        /><LeftMenuButton name="Pneumatic Sensor #2" value="FALSE" />
        <LeftMenuButton name="Pneumatic Sensor #3" value="FALSE" />
        <LeftMenuButton name="Solenoid Relais" value="ERROR" />
    </div>

    <SideMenuTitle title="actors" />
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
