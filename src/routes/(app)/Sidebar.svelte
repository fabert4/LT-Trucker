<script lang="ts">
    import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';
    import { Icon } from '@steeze-ui/svelte-icon';
    import {
        Briefcase,
        ChartPie,
        ClipboardDocumentList,
        Envelope,
        InboxStack,
        Users
    } from '@steeze-ui/heroicons';
    import { page } from '$app/stores';
    import type { About } from '$lib/generated';
    import Notifications from './Notifications.svelte';

    export let system: About;

    const navigation = new Map([
        ['Joblist', { icon: InboxStack, url: '/', notifications: 0 }],
        // ['Shipments', { icon: Briefcase, url: '/shipments', notifications: 0 }],
        // ['Messages', { icon: Envelope, url: '/messages', notifications: 0 }],
        // ['Reports', { icon: ChartPie, url: '/reports', notifications: 0 }],
        // ['Users', { icon: Users, url: '/users', notifications: 0 }]
    ]);

    $: activeUrl = $page.url.pathname;

    function isActive(active: string, url: string): boolean {
        if (url === '/') {
            return active === '' || active === '/' || active.startsWith('?') || active.startsWith('/?');
        } else {
            return active === url || active.startsWith(url + '/') || active.startsWith(url + '?');
        }
    }
</script>

<Sidebar asideClass="w-64 h-full">
    <SidebarWrapper
            class="flex flex-col justify-between"
            divClass="overflow-y-auto py-4 pr-4 bg-gray-50 rounded h-full"
    >
        <SidebarGroup>
            {#each Array.from(navigation.entries()) as nav}
                {#if !nav[1].hidden}
                    <SidebarItem
                            label={nav[0]}
                            href={nav[1].url}
                            active={isActive(activeUrl, nav[1].url)}
                            spanClass="flex-1 ml-3 whitespace-nowrap"
                            activeClass="flex items-center p-3 pl-5 text-base font-medium text-primary-600 bg-primary-100 hover:bg-primary-50"
                            aClass="flex items-center p-3 pl-5 text-base font-medium text-gray-900 hover:bg-gray-100"
                    >
                        <Icon slot="icon" src={nav[1].icon} theme="outline" class="w-7 h-7" />
                        <svelte:fragment slot="subtext">
                            {#if nav[1].notifications}
								<span
                                        class="flex justify-center items-center p-3 w-3 h-3 text-sm text-white bg-primary-600 rounded-full"
                                >{nav[1].notifications}</span
                                >
                            {/if}
                        </svelte:fragment>
                    </SidebarItem>
                {/if}
            {/each}
            <Notifications type="text" />
        </SidebarGroup>
    </SidebarWrapper>
</Sidebar>
