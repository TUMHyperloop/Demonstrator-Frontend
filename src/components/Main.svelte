<script>
    import Tube from './Tube.svelte'
    import Vacuum from './Vacuum.svelte';
    import Propulsion from './Propulsion.svelte';
    import Levitation from './Levitation.svelte';
    import Interior from './Interior.svelte';

    // Get which window and subsystem to display
    export let selectedSubsystem = 'tube'
</script>
{#if selectedSubsystem === 'tube'}
<Tube />

{:else if selectedSubsystem  == 'vacuum'}
<Vacuum />

{:else if selectedSubsystem  == 'propulsion'}
<Propulsion />

{:else if selectedSubsystem  == 'levitation'}
<Levitation />

{:else if selectedSubsystem  == 'interior'}
<Interior />

{/if}

<style>
</style>
