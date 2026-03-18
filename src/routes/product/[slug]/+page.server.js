import { createConnection } from '$lib/db/mysql';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
    const connection = await createConnection();
    const slug = params.slug ?? null;

    if (!slug) {
        throw error(404, 'Product not found');
    }

    const [rows] = await connection.execute(
        'SELECT * FROM products WHERE slug = ?',
        [slug]
    );

    if (!rows[0]) {                                 
        throw error(404, 'Product not found');
    }

    return { product: rows[0] };
}
