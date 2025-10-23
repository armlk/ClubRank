<script>
    export let clubName;
    import OSCLogo from "$lib/assets/osc-logo.png"
    export let description;
    export let category;
</script>

<div class="flex w-xl bg-black/30 p-5 rounded-md ml-2">
  <div class="flex flex-col gap-3 w-full">
    <div class="flex items-center w-full">
      <img src={OSCLogo} alt="Open Source Club logo" class="m-3 w-20">
      <p class="text-5xl text-white text-center flex-1">
        {clubName}
      </p>
    </div>
    <div class="bg-gray-800 p-2 rounded-md">
      <p class="text-xl text-white m-1 text-center">{description}</p>
    </div>
    <p class="text-lg text-white m-1 text-center">Category: {category}</p>
  </div>
</div>
