<script lang="ts">
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';
    import { onMount } from 'svelte';

    onMount(async () => {
        await fetch('/api/logout', {
            method: 'POST'
        });

        goto(`/login${$page.url.search}`);
    });
</script>
