<!--<script lang="ts">-->
<!--    import {-->
<!--        ChevronLeft,-->
<!--        ChevronRight,-->
<!--        Pagination,-->
<!--        TableBody,-->
<!--        TableHead,-->
<!--        TableHeadCell,-->
<!--        Table-->
<!--    } from 'flowbite-svelte';-->
<!--    import type { LinkType } from 'flowbite-svelte/types';-->
<!--    import { setParam, updateParam } from '$lib/utils/Routing';-->
<!--    import { page } from '$app/stores';-->
<!--    import { Sort, type Pagination as PaginationModel } from '$lib/generated';-->

<!--    import { Icon } from '@steeze-ui/svelte-icon';-->
<!--    import { ChevronDown, ChevronUp } from '@steeze-ui/heroicons';-->
<!--    import { paramsToPagination } from '$lib/utils/Pagination';-->

<!--    type T = $$Generic;-->
<!--    export let result: PaginationResult<T> | T[];-->
<!--    export let headers: TableHeader[];-->
<!--    export let title: string | undefined = undefined;-->

<!--    $: showTitle = $$slots.actions || title || $page.url.searchParams.has('search');-->

<!--    $: paginationResult = resultIsPagination(result) ? result : { items: result, total: 0 };-->

<!--    function resultIsPagination(result: PaginationResult<T> | T[]): result is PaginationResult<T> {-->
<!--        return 'total' in result;-->
<!--    }-->

<!--    $: pagination = paramsToPagination($page.url.searchParams);-->
<!--    $: pages = getPages(paramsToPagination($page.url.searchParams));-->

<!--    function getPages(pagination: PaginationModel): LinkType[] {-->
<!--        const totalPages: number = Math.ceil(paginationResult.total / pagination.itemsPerPage);-->
<!--        const middlePages = [-->
<!--            {-->
<!--                name: Math.min(totalPages - 3, Math.max(2, pagination.page)),-->
<!--                href: `?${getParamsForPage(-->
<!--                    Math.min(totalPages - 3, Math.max(2, pagination.page))-->
<!--                ).toString()}`,-->
<!--                active: pagination.page === Math.min(totalPages - 3, Math.max(2, pagination.page)) - 1-->
<!--            },-->
<!--            {-->
<!--                name: Math.min(totalPages - 2, Math.max(3, pagination.page + 1)),-->
<!--                href: `?${getParamsForPage(-->
<!--                    Math.min(totalPages - 2, Math.max(3, pagination.page + 1))-->
<!--                ).toString()}`,-->
<!--                active: pagination.page === Math.min(totalPages - 2, Math.max(3, pagination.page + 1)) - 1-->
<!--            },-->
<!--            {-->
<!--                name: Math.min(totalPages - 1, Math.max(4, pagination.page + 2)),-->
<!--                href: `?${getParamsForPage(-->
<!--                    Math.min(totalPages - 1, Math.max(4, pagination.page + 2))-->
<!--                ).toString()}`,-->
<!--                active: pagination.page === Math.min(totalPages - 1, Math.max(4, pagination.page + 2)) - 1-->
<!--            }-->
<!--        ].filter((link) => Number(link.name) > 1 && Number(link.name) < totalPages);-->
<!--        return [-->
<!--            { name: 1, href: `?${getParamsForPage(1).toString()}`, active: pagination.page === 0 },-->
<!--            ...middlePages,-->
<!--            {-->
<!--                name: totalPages,-->
<!--                href: `?${getParamsForPage(totalPages).toString()}`,-->
<!--                active: pagination.page === totalPages - 1-->
<!--            }-->
<!--        ].slice(0, totalPages);-->
<!--    }-->

<!--    function getParamsForPage(number: number): URLSearchParams {-->
<!--        return setParam(-->
<!--            new URLSearchParams($page.url.searchParams),-->
<!--            'page',-->
<!--            pageOrNull(number)?.toString()-->
<!--        );-->
<!--    }-->

<!--    function previous() {-->
<!--        if (pagination.page > 0) {-->
<!--            updateParam($page.url.searchParams, 'page', pageOrNull(pagination.page)?.toString());-->
<!--        }-->
<!--    }-->

<!--    function next() {-->
<!--        if (pagination.page < paginationResult.total / pagination.itemsPerPage - 1) {-->
<!--            updateParam($page.url.searchParams, 'page', pageOrNull(pagination.page + 2)?.toString());-->
<!--        }-->
<!--    }-->

<!--    function pageOrNull(page: number): number | null {-->
<!--        return page > 1 ? page : null;-->
<!--    }-->

<!--    function getOrder(params: URLSearchParams, sort: string): Sort.order | undefined {-->
<!--        if ($page.url.searchParams.get('sort') != sort) {-->
<!--            return undefined;-->
<!--        }-->
<!--        const currentOrderString = params.get('order');-->
<!--        return currentOrderString === 'ASC'-->
<!--            ? Sort.order.ASC-->
<!--            : currentOrderString === 'DESC'-->
<!--                ? Sort.order.DESC-->
<!--                : undefined;-->
<!--    }-->

<!--    function setSort(sort: string) {-->
<!--        const currentSort = $page.url.searchParams.get('sort');-->
<!--        const currentOrder = getOrder($page.url.searchParams, sort);-->
<!--        if (currentSort != sort) {-->
<!--            const params = setParam($page.url.searchParams, 'sort', sort);-->
<!--            updateParam(params, 'order', Sort.order.ASC);-->
<!--        } else if (currentOrder === Sort.order.ASC) {-->
<!--            updateParam($page.url.searchParams, 'order', Sort.order.DESC);-->
<!--        } else {-->
<!--            const params = setParam($page.url.searchParams, 'sort', undefined);-->
<!--            updateParam(params, 'order', undefined);-->
<!--        }-->
<!--    }-->
<!--</script>-->

<!--<div class="flex flex-col gap-2">-->
<!--    <Table hoverable divClass="relative overflow-x-auto shadow-md sm:rounded-lg bg-white">-->
<!--        {#if showTitle}-->
<!--            <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white">-->
<!--                <div class="flex w-full justify-between">-->
<!--                    <div>-->
<!--                        {#if title}-->
<!--                            {title}-->
<!--                        {/if}-->
<!--                        {#if $page.url.searchParams.has('search')}-->
<!--                            <p class="mt-1 text-sm font-normal text-gray-500">-->
<!--                                Filtered by: {$page.url.searchParams.get('search')}-->
<!--                            </p>-->
<!--                        {/if}-->
<!--                    </div>-->
<!--                    <div>-->
<!--                        <slot name="actions" />-->
<!--                    </div>-->
<!--                </div>-->
<!--            </caption>-->
<!--        {/if}-->
<!--        <TableHead>-->
<!--            {#each headers as header}-->
<!--                <TableHeadCell>-->
<!--                    {#if header.hidden}-->
<!--                        <span class="sr-only">{header.name}</span>-->
<!--                    {:else if header.sort}-->
<!--                        <button class="flex gap-2 uppercase" on:click={() => setSort(header.sort ?? '')}>-->
<!--                            {header.name}-->
<!--                            {#if getOrder($page.url.searchParams, header.sort) === Sort.order.ASC}-->
<!--                                <Icon src={ChevronUp} class="w-3 h-3" />-->
<!--                            {:else if getOrder($page.url.searchParams, header.sort) === Sort.order.DESC}-->
<!--                                <Icon src={ChevronDown} class="w-3 h-3" />-->
<!--                            {/if}-->
<!--                        </button>-->
<!--                    {:else}-->
<!--                        {header.name}-->
<!--                    {/if}-->
<!--                </TableHeadCell>-->
<!--            {/each}-->
<!--        </TableHead>-->
<!--        <TableBody>-->
<!--            <slot-->
<!--                    items={paginationResult.items}-->
<!--                    nth={pagination.itemsPerPage * pagination.page + 1}-->
<!--                    {pagination}-->
<!--            />-->
<!--        </TableBody>-->
<!--    </Table>-->
<!--    {#if paginationResult.total > pagination.itemsPerPage}-->
<!--        <div class="flex flex-col items-end justify-end">-->
<!--            <div class="text-sm text-gray-700">-->
<!--                Showing-->
<!--                {#if paginationResult.total > 1}-->
<!--					<span class="font-semibold text-gray-900">-->
<!--						{pagination.itemsPerPage * pagination.page + 1}-->
<!--					</span>-->
<!--                    to-->
<!--                    <span class="font-semibold text-gray-900">-->
<!--						{Math.min(pagination.itemsPerPage * (pagination.page + 1), paginationResult.total)}-->
<!--					</span>-->
<!--                    of-->
<!--                    <span class="font-semibold text-gray-900">{paginationResult.total}</span>-->
<!--                    Entries-->
<!--                {:else}-->
<!--                    <span class="font-semibold text-gray-900">{paginationResult.total}</span>-->
<!--                    Entry-->
<!--                {/if}-->
<!--            </div>-->
<!--            <Pagination-->
<!--                    class="shadow-md sm:rounded-lg"-->
<!--                    {pages}-->
<!--                    on:previous={previous}-->
<!--                    on:next={next}-->
<!--                    icon-->
<!--            >-->
<!--                <svelte:fragment slot="prev">-->
<!--                    <span class="sr-only">Previous</span>-->
<!--                    <ChevronLeft class="w-5 h-5" />-->
<!--                </svelte:fragment>-->
<!--                <svelte:fragment slot="next">-->
<!--                    <span class="sr-only">Next</span>-->
<!--                    <ChevronRight class="w-5 h-5" />-->
<!--                </svelte:fragment>-->
<!--            </Pagination>-->
<!--        </div>-->
<!--    {/if}-->
<!--</div>-->
