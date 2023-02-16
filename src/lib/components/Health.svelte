<script lang="ts">
    import type { Health } from '$lib/generated';
    import {
        Table,
        TableBody,
        TableBodyCell,
        TableBodyRow,
        TableHead,
        TableHeadCell
    } from 'flowbite-svelte';

    export let health: Health;
</script>

<Table hoverable={true}>
    <TableHead>
        <TableHeadCell>System</TableHeadCell>
        <TableHeadCell>State</TableHeadCell>
    </TableHead>
    <TableBody>
        {#each Object.entries(health) as [system, state]}
            <TableBodyRow>
                <TableBodyCell>{system}</TableBodyCell>
                <TableBodyCell>
                    {#if state != null && typeof state === 'object'}
                        {Object.entries(state)
                            .map((e) => `${e[0]}: ${e[1]}`)
                            .join(', ')}
                    {:else}
                        {state}
                    {/if}
                </TableBodyCell>
            </TableBodyRow>
        {/each}
    </TableBody>
</Table>