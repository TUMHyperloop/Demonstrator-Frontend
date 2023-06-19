<script>
    import LeftMenuButton from './LeftMenuButton.svelte'
    import SideMenuTitle from './SideMenuTitle.svelte'

    import {sensorsTcMain, sensorsTcMainMappings} from '../stores/tcObjects.js'
    import { onDestroy, onMount } from 'svelte'
    import { readSensorValues } from '../stores/apiReadingCom'


    let interval = null 
    onMount(async () => {
        // Start reading sensors continously, set up interval
        interval = setInterval(async () => {
            let lightsAndWarnings = await readSensorValues(Object.keys($sensorsTcMain))
            if ((lightsAndWarnings.success = true)) {
                $sensorsTcMain = lightsAndWarnings.data
            }

            // TODO: Remove this, just for testing
            // clearInterval(interval)
        }, 1000)
    })

    onDestroy(() => {
        clearInterval(interval)
    })
</script>

<div class="wrapper">
    <div class="content">
        {#each Object.keys($sensorsTcMain) as tcVar}
             <LeftMenuButton name={$sensorsTcMainMappings[tcVar]} value={$sensorsTcMain[tcVar]} />
        {/each}
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
