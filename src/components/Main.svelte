<script>
    import Tube from './Tube.svelte'
    import Vacuum from './Vacuum.svelte'
    import Propulsion from './Propulsion.svelte'
    import Levitation from './Levitation.svelte'
    import Interior from './Interior.svelte'

    import Button from './Button.svelte'

    import { buttonsTc, buttonsTcMappings } from '../stores/tcObjects.js'
    import { onDestroy, onMount } from 'svelte'
    import { writeValues } from '../stores/apiReadingCom'
    import InputControl from './InputControl.svelte'

    // Get which window and subsystem to display
    export let selectedSubsystem = 'tube'

    let controlsWidth = 'fit-content'
    let controlsElement = null

    onMount(async () => {
        if (
            controlsWidth == 'fit-content' ||
            controlsElement.offsetWidth > controlsWidth
        ) {
            controlsWidth = controlsElement.offsetWidth
        }
    })
</script>

{#if selectedSubsystem === 'tube'}
    <Tube />
{:else if selectedSubsystem == 'vacuum'}
    <Vacuum />
{:else if selectedSubsystem == 'propulsion'}
    <Propulsion />
{:else if selectedSubsystem == 'levitation'}
    <Levitation />
{:else if selectedSubsystem == 'interior'}
    <Interior />
{/if}

<!-- Controls Block -->

<div class="first-row">
    <div class="configs">
        {#each Object.keys($buttonsTc).slice(0, 2) as tcVariable}
            <Button
                buttonText={$buttonsTcMappings[tcVariable]}
                tcVaraible={tcVariable}
            />
        {/each}
    </div>

    <div class="state-change">
        {#each Object.keys($buttonsTc).slice(2, 6) as tcVariable}
            <Button
                buttonText={$buttonsTcMappings[tcVariable]}
                tcVaraible={tcVariable}
            />
        {/each}
    </div>
</div>

<div class="controls-wrapper">
    <div class="controls">
        {#each Object.keys($buttonsTc).slice(6, 8) as tcVariable}
            <Button
                bind:this={controlsElement}
                width="{controlsWidth}px"
                buttonText={$buttonsTcMappings[tcVariable]}
                tcVaraible={tcVariable}
            />
        {/each}
    </div>

    <div class="controls">
        {#each Object.keys($buttonsTc).slice(8, 10) as tcVariable}
            <Button
                bind:this={controlsElement}
                width="{controlsWidth}px"
                buttonText={$buttonsTcMappings[tcVariable]}
                tcVaraible={tcVariable}
            />
        {/each}
    </div>

    <InputControl />

    <div class="controls">
        {#each Object.keys($buttonsTc).slice(10, 12) as tcVariable}
            <Button
                bind:this={controlsElement}
                width="{controlsWidth}px"
                buttonText={$buttonsTcMappings[tcVariable]}
                tcVaraible={tcVariable}
            />
        {/each}
    </div>

    <div class="controls">
        {#each Object.keys($buttonsTc).slice(12, 14) as tcVariable}
            <Button
                bind:this={controlsElement}
                width="{controlsWidth}px"
                buttonText={$buttonsTcMappings[tcVariable]}
                tcVaraible={tcVariable}
            />
        {/each}
    </div>
</div>

<style>
    .configs {
        display: flex;
    }
    .state-change {
        display: flex;
        justify-content: space-between;
        margin-right: 15px;
    }
    .first-row {
        display: flex;
        justify-content: space-between;
    }

    .controls {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        width: fit-content;
    }
    .controls-wrapper {
        display: flex;
        align-items: flex-end;
    }
</style>
