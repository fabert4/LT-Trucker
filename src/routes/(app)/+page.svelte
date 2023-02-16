<script>
    import {Button, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell} from "flowbite-svelte";
    import {goto} from "$app/navigation";
</script>

<Table hoverable={true}>
    <caption
            class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"
    >
        Orders
        <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">

        </p>
    </caption>
    <TableHead>
        <TableHeadCell>Customer Reference</TableHeadCell>
        <TableHeadCell>Dock</TableHeadCell>
        <TableHeadCell>Sender</TableHeadCell>
        <TableHeadCell>Receiver</TableHeadCell>
        <TableHeadCell>Amount</TableHeadCell>
        <TableHeadCell>Destination</TableHeadCell>
        <TableHeadCell>
            <span class="sr-only"> Accept </span>
        </TableHeadCell>
    </TableHead>
    <TableBody class="divide-y">
        <TableBodyRow trClass="clickableTable" on:click={() => goto('/order/')}>
            <TableBodyCell>12345</TableBodyCell>
            <TableBodyCell>A1</TableBodyCell>
            <TableBodyCell>Company</TableBodyCell>
            <TableBodyCell>Company</TableBodyCell>
            <TableBodyCell>12 CC</TableBodyCell>
            <TableBodyCell>Budapest</TableBodyCell>
            <TableBodyCell>
                <Button>
                    Accept <svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </Button>
            </TableBodyCell>
        </TableBodyRow>
        <TableBodyRow trClass="clickableTable" on:click={() => goto('/order/')}>
            <TableBodyCell>12346</TableBodyCell>
            <TableBodyCell>A1</TableBodyCell>
            <TableBodyCell>Company</TableBodyCell>
            <TableBodyCell>Company</TableBodyCell>
            <TableBodyCell>12 CC</TableBodyCell>
            <TableBodyCell>Budapest</TableBodyCell>
            <TableBodyCell>
                <Button>
                    Accept <svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </Button>
            </TableBodyCell>
        </TableBodyRow>
        <TableBodyRow trClass="clickableTable" on:click={() => goto('/order/')}>
            <TableBodyCell>12347</TableBodyCell>
            <TableBodyCell>A1</TableBodyCell>
            <TableBodyCell>Company</TableBodyCell>
            <TableBodyCell>Company</TableBodyCell>
            <TableBodyCell>12 CC</TableBodyCell>
            <TableBodyCell>Budapest</TableBodyCell>
            <TableBodyCell>
                <Button>
                    Accept <svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </Button>
            </TableBodyCell>
        </TableBodyRow>
    </TableBody>
</Table>

<!--<Button on:click={() => goto('/')} class="mt-10 w-24 bottom-0 right-0">Loadmaster View (TIJDELIJK)</Button>-->