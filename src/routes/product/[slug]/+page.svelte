<script>
    let {data} = $props();
</script>

<style>
    .product-title {
        color: #2c3e50;
        margin-bottom: 0.5rem;
    }
    .product-description {
        color: #292f30;
        font-style: italic;
    }
</style>
<svelte:head>
<title> {data.product.name} </title>
<meta name="description" content={data.product.description} />
<meta property="og:title" content={data.product.name} />
<meta property="og:description" content={data.product.description} />
<meta property="og:image" content={data.product.image_url} /> 
</svelte:head>
<h1 class="text-2xl font-bold product-title">{data.product.name}</h1>
<h2 class="text-lg product-description">{data.product.description}</h2>