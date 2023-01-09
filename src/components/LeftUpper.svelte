<script>
    import Sensor from './Sensor.svelte'
</script>

<div class="wrapper">
    <div class="content">
        <Sensor /><Sensor /><Sensor /><Sensor /><Sensor />
    </div>
    <div class="title">
        <p>SENSORS</p>
    </div>
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
    .title p {
        font-family: 'Poppins';
        font-size: 40px;
        color: #212121;
        text-align: end;
        margin-right: 10px;
    }
</style>
