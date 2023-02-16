<!--<script lang="ts">-->
<!--    import { BellSlash } from '@steeze-ui/heroicons';-->
<!--    import { Icon } from '@steeze-ui/svelte-icon';-->
<!--    import { SidebarCta } from 'flowbite-svelte';-->

<!--    export let type: 'icon' | 'text';-->

<!--    let notificationPermission = Notification.permission;-->

<!--    async function permission() {-->
<!--        await Notification.requestPermission();-->
<!--        notificationPermission = Notification.permission;-->
<!--    }-->
<!--</script>-->

<!--{#if notificationPermission !== 'granted'}-->
<!--    {#if type === 'icon'}-->
<!--        <button on:click={permission} class="xl:hidden">-->
<!--            <Icon src={BellSlash} theme="solid" class="w-10 h-10 text-white" />-->
<!--        </button>-->
<!--    {:else}-->
<!--        <SidebarCta label="Notifications" divWrapperClass="p-4 pl-6 mt-6 bg-blue-50 rounded-lg">-->
<!--            <p class="mb-3 text-sm text-primary-900">-->
<!--                Enable notifications in order to keep your data up-to-date and receive messages regarding-->
<!--                your jobs.-->
<!--            </p>-->
<!--            <button-->
<!--                    class="text-sm text-trueBlue-900 underline hover:text-trueBlue-800"-->
<!--                    on:click={permission}>Enable notifications</button-->
<!--            >-->
<!--        </SidebarCta>-->
<!--    {/if}-->
<!--{/if}-->
