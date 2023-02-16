<!--<script lang="ts">-->
<!--    import type { About } from '$lib/generated';-->
<!--    import {-->
<!--        Table,-->
<!--        TableBody,-->
<!--        TableBodyCell,-->
<!--        TableBodyRow,-->
<!--        TableHead,-->
<!--        TableHeadCell-->
<!--    } from 'flowbite-svelte';-->

<!--    export let about: About;-->
<!--</script>-->

<!--<Table hoverable={true}>-->
<!--    <TableHead>-->
<!--        <TableHeadCell>System</TableHeadCell>-->
<!--        <TableHeadCell>State</TableHeadCell>-->
<!--    </TableHead>-->
<!--    <TableBody>-->
<!--        {#each Object.entries(about) as [system, state]}-->
<!--            <TableBodyRow>-->
<!--                <TableBodyCell>{system}</TableBodyCell>-->
<!--                <TableBodyCell>-->
<!--                    {#if state != null && typeof state === 'object'}-->
<!--                        {Object.entries(state)-->
<!--                            .map((e) => `${e[0]}: ${e[1]}`)-->
<!--                            .join(', ')}-->
<!--                    {:else}-->
<!--                        {state}-->
<!--                    {/if}-->
<!--                </TableBodyCell>-->
<!--            </TableBodyRow>-->
<!--        {/each}-->
<!--    </TableBody>-->
<!--</Table>-->
