import productsData from '@/data/products';

export async function getStaticPaths() {
    const paths = productsData.map( productItem => ({params: {product: productItem.slug}}) );
    return {paths, fallback: false};
}

export async function getStaticProps({params}) {
    const product = productsData.find(productItem => productItem.slug === params.product);
    return {
        props: {product}
    };
}

function Product({product}) {
    return (
        <h1>{product.name}</h1>
    );
}

export default Product;