import { useState, useEffect } from 'react';

const ProductPage = () => {
  console.log('ProductPage ran');
  // state kad issaugoti products array (useState)
  const [productsArr, setProductsArr] = useState([]);
  // pasileidzia viena karta uzsikrovus komponentui

  const getProductsAndSetState = async () => {
    console.log('getProductsAndSetState ran');
    const respt = await fetch('/db/products.json');
    const dataInJs = await respt.json();
    console.log('dataInJs ===', dataInJs);
    const onlyDataWeNeed = dataInJs.map((pObj) => {
      return {
        id: pObj.id,
        title: pObj.title,
        price: pObj.price,
        image: pObj.image,
      };
    });
    console.log('onlyDataWeNeed  ===', onlyDataWeNeed);
    setProductsArr(dataInJs);
  };

  useEffect(() => {
    console.log('useEffect ran');
    // pasileidzia viena karta uzsikrovus komponentui
    getProductsAndSetState();
  }, []);

  return (
    <div>
      <h1>Our products</h1>
    </div>
  );
};

export default ProductPage;
