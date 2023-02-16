<script lang="ts">
    import { goto } from '$app/navigation';
    import {
        Navbar,
        NavBrand,
        Avatar,
        Dropdown,
        DropdownItem,
        DropdownHeader,
        DropdownDivider,
        Button,
        ButtonGroup,
        Input
    } from 'flowbite-svelte';
    import type { UserModel } from '$lib/generated';
    import { Icon } from '@steeze-ui/svelte-icon';
    import { Backspace, MagnifyingGlass, XMark } from '@steeze-ui/heroicons';
    import { page } from '$app/stores';
    import Notifications from './Notifications.svelte';
    import { back, updateParam } from '$lib/utils/Routing';

    export let user: UserModel;

    let search = $page.url.searchParams.get('search') ?? '';

    const title = '';
    const description = '';

    function logout() {
        goto('/logout');
    }

    function submitSearch() {
        updateParam($page.url.searchParams, 'search', search ? search : undefined);
    }

    function clearSearch() {
        search = '';
        submitSearch();
    }
</script>

<!--<Navbar  color="none" class="bg-primary-600 justify-items-start" fluid={false}>-->
<!--    <div class="flex items-center flex-shrink-0 text-white mr-6">-->
<!--        <img src="/logo.png" class="h-6 sm:h-9 content-start" alt="Logo"/>-->
<!--    </div>-->
<!--    <div class="block lg:hidden">-->
<!--        <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">-->
<!--            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>-->
<!--        </button>-->
<!--    </div>-->
<!--    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">-->
<!--        <div class="text-sm lg:flex-grow">-->
<!--&lt;!&ndash;            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">&ndash;&gt;-->
<!--&lt;!&ndash;                Docs&ndash;&gt;-->
<!--&lt;!&ndash;            </a>&ndash;&gt;-->
<!--&lt;!&ndash;            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">&ndash;&gt;-->
<!--&lt;!&ndash;                Examples&ndash;&gt;-->
<!--&lt;!&ndash;            </a>&ndash;&gt;-->
<!--&lt;!&ndash;            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">&ndash;&gt;-->
<!--&lt;!&ndash;                Blog&ndash;&gt;-->
<!--&lt;!&ndash;            </a>&ndash;&gt;-->
<!--        </div>-->
<!--        <div>-->
<!--            <Notifications type="icon" />-->
<!--            <button>-->
<!--                <Avatar id="avatar-menu" dot={{ top: false, color: 'bg-green-400' }} />-->
<!--            </button>-->
<!--            <Dropdown placement="bottom" triggeredBy="#avatar-menu">-->
<!--                <DropdownHeader>-->
<!--                    <span class="block truncate text-sm font-medium">{user.email.value}</span>-->
<!--                </DropdownHeader>-->
<!--                {#if user.authorities.some((a) => a === 'USER')}-->
<!--                    <DropdownItem href="/users/{user.id}">Settings</DropdownItem>-->
<!--                {/if}-->
<!--                <DropdownDivider />-->
<!--                <DropdownItem slot="footer" on:click={logout}>Sign out</DropdownItem>-->
<!--            </Dropdown>-->
<!--        </div>-->
<!--    </div>-->
<!--</Navbar>-->

<Navbar color="none" class="bg-primary-600 justify-items-start" fluid={false}>
    {#if !title && !description}
<!--        <Button>-->
<!--            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png" width="20px" height="20px">-->
<!--        </Button>-->
        <NavBrand href="/">
            <img src="/logo.png" class="h-6 sm:h-9 content-start" alt="Logo"/>
        </NavBrand>
    {:else}
        <div class="flex">
            <div class="flex flex-col items-center">
                {#if title}
                    <h1 class="text-white font-bold">{title}</h1>
                {/if}
                {#if description}
                    <span class="text-white font-bold">{description}</span>
                {/if}
            </div>
        </div>
    {/if}
    <form on:submit|preventDefault={submitSearch} class="hidden xl:flex">
        <ButtonGroup>
            <Button on:click={clearSearch}>
                <Icon src={XMark} class="w-5 h-5" />
            </Button>
            <Input bind:value={search} placeholder="Search..." size="md" />
            <Button type="submit">
                <Icon src={MagnifyingGlass} class="w-5 h-5" />
            </Button>
        </ButtonGroup>
    </form>
    <Notifications type="icon" />
    <button>
        <Avatar id="avatar-menu" dot={{ top: false, color: 'bg-green-400' }} />
    </button>
    <Dropdown placement="bottom" triggeredBy="#avatar-menu">
        <DropdownHeader>
            <span class="block truncate text-sm font-medium">{user.email.value}</span>
        </DropdownHeader>
        {#if user.authorities.some((a) => a === 'USER')}
            <DropdownItem href="/users/{user.id}">Settings</DropdownItem>
        {/if}
        <DropdownDivider />
        <DropdownItem slot="footer" on:click={logout}>Sign out</DropdownItem>
    </Dropdown>
</Navbar>
