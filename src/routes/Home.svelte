<script context="module" lang="ts">
    import Layout from '../components/Layout.svelte'
    import LinkButton from '../components/LinkButton.svelte'
    import { appName } from '../lib/constants'
</script>

<div class="fullscreen">
    <div class="top-menu">v</div>

    <div class="side-menu">v</div>
</div>

<style>
    .fullscreen {
        background-color: #212121;
        width: 1920px;
        height: 1080px;
        overflow-x: auto;
        box-sizing: border-box;
    }
    .top-menu {
        height: 40px;
        width: 1920px;
        background-color: #424242;
    }
    .side-menu {
        background-color: #303030;
        height: 1041px;
        width: 246px;
    }
</style>
