<script>
    export let name = ''
    export let value = ''
</script>

<div class="sensor-wrapper">
    <div class="sensor-name">{name}</div>
    <div class="sensor-value">{value}</div>
</div>

<style>
    .content {
    }
    .sensor-wrapper {
        width: 100%;
        height: 37px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        color: white;
        font-family: 'Poppins';
        font-size: 15px;
        align-items: center;
        cursor: pointer;
    }
    .sensor-wrapper:hover {
        background-color: #424242;
    }
    .sensor-name {
        margin-left: 10px;
    }
    .sensor-value {
        margin-right: 10px;
    }
</style>
