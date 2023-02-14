import { Routes, Route } from 'react-router-dom';
import CatPreview from '../cat-preview/cat-preview.component';
import Category from '../cat/cat.component';
import './shop.styles.scss';

const Shop = () => {

    return (
        <Routes>
            <Route index element={<CatPreview/>} />
            <Route path=":category" element={<Category/>} />
        </Routes>
    );
};
export default Shop;