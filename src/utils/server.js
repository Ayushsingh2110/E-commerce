//GET
export async function getData(url) {
    try {
        const res = await fetch(url, {
            method: "GET",
        });

        if (!res.ok) {
            return [];
        }

        const products = await res.json()
        if (Array.isArray(products) && products.length) {
            return products;
        }

        return [];
    } catch (error) {
        console.log(error.message);
    }
}

