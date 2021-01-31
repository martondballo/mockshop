export const FETCH_PRODUCTS_BEGIN   = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products }
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});

export function fetchProducts() {
    return dispatch => {
      dispatch(fetchProductsBegin());
      return fetch("https://fakestoreapi.com/products")
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
            console.log('j', json);
        
            let result = json.reduce(function (r, a) {
              r[a.category] = r[a.category] || [];
              r[a.category].push(a);
              return r;
          }, Object.create(null));
          console.log('result', result);
          dispatch(fetchProductsSuccess(result));


          return json.body;
        })
        .catch(error => dispatch(fetchProductsFailure(error)));
    };
  }

  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }