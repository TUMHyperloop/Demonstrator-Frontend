<script>
    import LeftMenuButton from './LeftMenuButton.svelte'
    import SideMenuTitle from './SideMenuTitle.svelte'
</script>

<div class="wrapper">
    <div class="content">
        <LeftMenuButton name="Motor 1" value="10 A" /><LeftMenuButton
            name="Motor 1"
            value="10 A"
        /><LeftMenuButton name="Motor 1" value="10 A" /><LeftMenuButton
            name="Motor 1"
            value="10 A"
        /><LeftMenuButton name="Motor 1" value="10 A" />
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
