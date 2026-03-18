
<script>
    const background = 'https://res.cloudinary.com/dbdddybnl/image/upload/v1772711286/Gemini_Generated_Image_d4agskd4agskd4ag_t2gteu.png';


    let {data} = $props();

    const products = data?.products ?? [];

    const formatPrice = (price) => Number(price ?? 0).toFixed(2);
</script>
<svelte:head>
<title>Car that make you feel better </title>
<meta name="description" content="Find the perfect toy for your child with our wide selection of high-quality toys. Shop now and bring joy to your little one's life!" />
<meta property="og:title" content="Car that make you feel better " />
<meta property="og:description" content="Find the perfect toy for your child with our wide selection of high-quality toys. Shop now and bring joy to your little one's life!" />
<meta property="og:image" content={background} /> 
</svelte:head>

<header class="h-[500px] bg-cover bg-center flex items-center justify-center" style="background-image: url({background})">

<h1 class="text-5xl text-white">Toys for your liking </h1>

</header>

<main class="max-w-6xl mx-auto px-6 py-12 space-y-12">
    <section class="flex flex-col gap-3 text-center">
        <p class="text-sm uppercase tracking-[0.35em] text-gray-500">Our catalog</p>
        <h2 class="text-3xl font-semibold">All Products</h2>
        <p class="text-gray-600">Straight from the database table <code>products</code>.</p>
    </section>

    {#if products.length === 0}
        <p class="text-center text-gray-500">No products found.</p>
    {:else}

        <section class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {#each products as product}
                <a href={`/product/${product.slug}`} class="block">
                <article class="rounded-xl border border-gray-100 shadow-sm overflow-hidden bg-white">
                    {#if product.image_url}
                        <img
                            src={product.image_url}
                            alt={product.name}
                            class="h-52 w-full object-cover"
                            loading="lazy"
                        />
                    {/if}

                    <div class="p-5 space-y-3">
                        <div class="flex items-start justify-between gap-3">
                            <h3 class="text-lg font-semibold leading-tight">{product.name}</h3>
                            <span class="text-emerald-600 font-semibold">${formatPrice(product.price)}</span>
                        </div>
                        <p class="text-sm text-gray-600">{product.description}</p>
                    </div>
                </article>
                </a>
            {/each}
        </section>
    {/if}
</main>
<footer class="h-[300px] bg-gray-800 text-white flex items-center justify-center">
 <p class="text-center text-gray-500 py-4">(c) 2024 Toy Store. All rights reserved.</p>
</footer>
