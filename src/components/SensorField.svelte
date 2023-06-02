<script>
    import { onMount } from 'svelte'

    export let sensorName = 'Humidity Sensor'
    export let sensorValue = '123'
</script>

<div class="value-wrapper">
    <div class="left-side">{sensorName}</div>
    <div class="right-side">{sensorValue}</div>
</div>

<style>
    .value-wrapper {
        display: flex;
        border: 3px solid white;
        border-radius: 2px;
        color: white;
        font-family: 'Poppins';
        font-weight: 400;
        letter-spacing: 0.025rem;
        padding: 0 10px;
        margin-left: 10px;
        margin-top: 10px;
        width: fit-content;
    }
    .left-side {
        border-right: 3px solid white;
        padding-right: 10px;
        min-width: fit-content;
    }
    .right-side {
        padding-left: 10px;
        min-width: fit-content;
    }
</style>
