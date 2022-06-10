# React router

1. Add router `npm install react-router-dom@^5`
2. import { BrowserRouter } from 'react-router-dom';
3. apjuosti musu App su <BrowserRouter></BrowserRouter>
4. import Route ir aprasyti routus

## Products

1. sukurti ProductPage
2. prideti navLink ir Route i ProductPage
3. ProductPage kreipiamesi adresa "/db/products.json":
   3.1 gaunam duomenis

4. Susikuriam <SingleProductCard /> komponenta. Jis gauna id, title, price, ir img ir atvaizduoja kortele.

5. <ProductsPage /> generuojam <SingleProductCard /> is gautu duomenu i state.
6. Sukuriam <SingleProductPage /> puslapi kuriame atvaizduojam duomenis didesnes korteles pavidalu su description, categorija ir ratingu (supildom duomenis pagal pirma preke)
7. App.js sukriam routa i <SingleProductPage /> ir isitikinam kad jis veikia
