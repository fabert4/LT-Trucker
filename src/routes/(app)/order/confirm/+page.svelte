<script>
    import {Button, ButtonGroup, Card, Input, InputAddon, Label, Listgroup} from "flowbite-svelte";
    import {goto} from "$app/navigation";

    import {Backspace} from "@steeze-ui/heroicons";
    import {Icon} from "@steeze-ui/svelte-icon";
    import { back, updateParam } from '$lib/utils/Routing';

    let list = [
        {
            name: "Dock:", email: "", value: "A1"
        },
        {
            name: "Customer Reference", email: "", value: "1245"
        },
        {
            name: "Destination: ", email: "", value: "Store Keulen"
        },
        {
            name: "Sender: ", email: "", value: "OZ Hami"
        },
        {
            name: "Receiver: ", email: "", value: "Lidl Deutschland"
        },
        {
            name: "Pickup Date: ", email: "", value: "14-02-2023"
        },
        {
            name: "Delivery Date: ", email: "", value: "15-02-2023"
        },
        {
            name: "Amount: ", email: "", value: "12 CC 60 Shelves 48 Extensions"
        },

    ];
</script>

<div class="flex space-x-6 ">

    <Card padding="xl" size="md">
        <div class="mb-6 mr-28 ">
            <div class="flex justify-between items-center mb-4">
                <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Fill In</h5>
            </div>
            <Label for="website-admin" class="block mb-2 pt-2">Company</Label>
            <ButtonGroup class="w-full">
                <h1>Oldenburger</h1>
            </ButtonGroup>
            <Label for="website-admin" class="block mb-2 pt-2">Name</Label>
            <ButtonGroup class="w-full">
                <h1>John Doe</h1>
            </ButtonGroup>
            <Label for="website-admin" class="block mb-2 pt-2">License Plate</Label>
            <ButtonGroup class="w-full">
                <h1>AB-12-34</h1>
            </ButtonGroup>
            <Label for="website-admin" class="block mb-2 pt-2">Mobile Number</Label>
            <ButtonGroup class="w-full">
                <h1>+31 6 123456789</h1>
            </ButtonGroup>
            <Label for="website-admin" class="block mb-2 pt-2">E-mail</Label>
            <ButtonGroup class="w-full">
                <h1>johndoe@gmail.com</h1>
            </ButtonGroup>
            <Label for="website-admin" class="block mb-2 pt-2">E-mail (company)</Label>
            <ButtonGroup class="w-full">
                <h1>ozhazi@ozhazi.com</h1>
            </ButtonGroup>
            <Button class="p-3 mt-3 ml-1" on:click={() => back()} >
                Back <svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Button>
<!--            <button on:click={() => back()} class="p-3 mt-3 ml-8">-->
<!--                <Icon src={Backspace} theme="solid" class="w-10 h-10 text-white" />-->
<!--            </button>-->
            <Button class="p-3 mt-3 ml-8" on:click={() => goto('/')}>
                Send To Mobile <svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Button>
        </div>
    </Card>


    <Card padding="xl" size="md">
        <div class="flex justify-between items-center mb-4">
            <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Shipping Details</h5>
            <a href="/" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">

            </a>
        </div>
        <Listgroup items={list} let:item class="border-0 dark:!bg-transparent">
            <div class="flex items-center space-x-4">
                <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {item.name}
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                        {item.email}
                    </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    {item.value}
                </div>
            </div>
        </Listgroup>
    </Card>
</div>