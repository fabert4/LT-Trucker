<script lang="ts">
    import type { PageData } from './$types';
    import Health from '$lib/components/Health.svelte';

    export let data: PageData;

    let health = false;
</script>

<div class="flex justify-center">
    <button on:click={() => (health = !health)}>
        {#if health}
            <Health bind:health={data.health} />
        {:else}
            ?
        {/if}
    </button>
</div>
