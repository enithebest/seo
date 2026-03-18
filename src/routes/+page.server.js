import { createConnection } from '$lib/db/mysql';

export async function load() {
    const db = await createConnection();
    const [rows] = await db.execute(
        'SELECT id, slug, name, description, price, image_url FROM products ORDER BY id DESC'
    );

    return { products: rows };
}
