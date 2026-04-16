import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4 bg-black p-4 rounded-3xl border-2 border-zinc-900">
      {products.map((product, index) => (
        <ProductCard key={product.name} product={product} index={index} />
      ))}
    </div>
  );
};

export default ProductList;
