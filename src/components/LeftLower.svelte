<script>
    import LeftMenuButton from './LeftMenuButton.svelte'
    import SideMenuTitle from './SideMenuTitle.svelte'
</script>

<div class="wrapper">
    <div class="content">
        <LeftMenuButton name="Motor #1" value="10 A" /><LeftMenuButton
            name="Motor #2"
            value="11 A"
        /><LeftMenuButton name="Motor #3" value="13 A" /><LeftMenuButton
            name="Motor #4"
            value="11 A"
        /><LeftMenuButton name="Motor #5" value="9 A" />
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
