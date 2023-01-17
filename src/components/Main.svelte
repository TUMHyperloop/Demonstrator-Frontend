<script>
    import SubsystemControl from './SubsystemControl.svelte'

    // Get which window and subsystem to display
    export let selectedSubsystem = 'tube'
</script>

<SubsystemControl subsystemName={selectedSubsystem} testInProgress={false} />

<style>
</style>
