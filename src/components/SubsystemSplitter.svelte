<script>
    export let subsystemName = 'Tube Control'
</script>

<div class="subsystem">
    <h1>{subsystemName}</h1>
    <div class="splitter" />
</div>

<style>
    .subsystem {
        display: flex;
        align-items: center;
        margin-top: 10px;
        width: 1415px;
    }
    .subsystem h1 {
        color: white;
        font-family: 'Poppins';
        font-weight: 300;
        font-size: 20px;
        margin-right: 10px;
        margin-left: 10px;

        flex: 0 0 auto;
    }
    .splitter {
        height: 1px;
        background-color: white;

        flex: 1 1 auto;
    }
</style>
