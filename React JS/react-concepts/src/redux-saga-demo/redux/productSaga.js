import { takeEvery, put } from 'redux-saga/effects'
import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from './constant'

function* getProducts() {
    let data = yield fetch('http://localhost:3000/product');
    data = yield data.json();
    yield put({ type: SET_PRODUCT_LIST, data })
}

function* searchProducts(data) {
    let result = yield fetch(`http://localhost:3000/product?q=${data.query}`);
    result = yield result.json();
    yield put({ type: SET_PRODUCT_LIST, data: result })
}

// Generator Function
function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts)
    yield takeEvery(SEARCH_PRODUCT, searchProducts)
}

export default productSaga