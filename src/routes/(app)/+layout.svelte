<script lang="ts">
    import '../../app.postcss';
    import Sidebar from './Sidebar.svelte';
    import Topbar from './Topbar.svelte';
    import type { LayoutData } from './$types';
    import { onMount } from 'svelte';

    import { page } from '$app/stores';


    export let data: LayoutData;

    onMount(() => {


    });

    $: expand = expandPages.some((path) => $page.url.pathname.startsWith(path));
    $: fullPage = fullPagePages.some((path) => $page.url.pathname.startsWith(path));

    const expandPages: string[] = ['/ecmrs/', '/loading'];

    const fullPagePages: string[] = ['/loading'];
</script>

<div class="flex flex-col h-screen">
    <Topbar bind:user={data.authenticated} />
    <div class="flex content-height bg-gray-200">
<!--        <div class="hidden flex-col" class:lg:flex={!fullPage}>-->
<!--            <Sidebar system={data.system} />-->
<!--        </div>-->
        <main
                class="flex flex-col flex-1 mx-auto gap-2 overflow-auto pt-2 lg:pt-8 pb-0 lg:pb-8 px-1 lg:px-8"
                class:lg:flex-initial={!expand}
        >
            <slot />
        </main>
    </div>
</div>

<!--<JobModal />-->

<style>
    .content-height {
        height: calc(100vh - 3.75rem);
    }
</style>
