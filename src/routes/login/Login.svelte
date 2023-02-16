<script lang="ts">
    import {goto} from '$app/navigation';
    import {page} from '$app/stores';


    import {Envelope, LockClosed} from '@steeze-ui/heroicons';
    import {Icon} from '@steeze-ui/svelte-icon';
    import {Button, ButtonGroup, Checkbox, Input, InputAddon, Spinner} from 'flowbite-svelte';

    let email = 'admin@cargoledger.nl';
    let password = 'P@ssw0rd!';

    let loading = false;

    const url = $page.url.searchParams.has('page')
        ? decodeURIComponent($page.url.searchParams.get('page')!)
        : null;

    async function login() {
        loading = true;
        const res = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (res.status === 200) {
            goto(url ?? (window.innerWidth < 1024 ? '/jobs' : '/'));
        }
        loading = false;
    }
</script>

<div id="loginDiv">
    <form class="flex flex-col space-y-6" on:submit|preventDefault={login}>
        <img src="src/lib/assets/img/Cargoledger.png" alt="Logo" width="500" height="30">
        <h1 class="text-center">Sign in to the Loadmaster Application</h1>
        <ButtonGroup>
            <InputAddon>
                <Icon src={Envelope} theme="solid" class="w-5 h-5"/>
            </InputAddon>
            <Input bind:value={email} type="email" name="email" placeholder="Email" required/>
        </ButtonGroup>
        <ButtonGroup>
            <InputAddon>
                <Icon src={LockClosed} theme="solid" class="w-5 h-5"/>
            </InputAddon>
            <Input bind:value={password} type="password" name="password" placeholder="••••••••" required/>
        </ButtonGroup>
        <Checkbox>Remember me</Checkbox>
        <Button class="space-x-4" type="submit">
            {#if loading}
                <Spinner class="mr-3" size="4" color="white"/>
            {/if}
            Login to your account
        </Button>
    </form>
</div>