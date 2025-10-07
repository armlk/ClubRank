<script>

    export let clubName;
    import OSCLogo from "$lib/assets/osc-logo.png"
    export let description;
    export let category;
</script>

<div class="flex w-xl bg-black/30 p-5 rounded-md">
    <div class="flex flex-col gap-3">
        <p class="text-5xl text-white">
            <!-- <img src={OSCLogo} alt="Open Source Club logo" class="m-3 h-10">  -->
            {clubName}
        </p>
        <div class="bg-gray-800 p-2 rounded-md">
            <p class="text-xl text-white m-1">{description}</p>  
        </div>
        <p class="text-lg text-white m-1">Category: {category}</p>   
    </div>
    <div class="content-center">
        <img src={OSCLogo} alt="Open Source Club logo" class="m-3"> 
    </div>
        
</div>