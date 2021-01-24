import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productsActions";

class CategoriesList extends React.Component {
  componentDidMount() {
    console.log('before fetch product');
    this.props.dispatch(fetchProducts());
  }

  componentDidUpdate() {
      // console.log('this.props', this.props);
    
  }

  toTitleCase = (str) => {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }


  render() {
    const { error, loading, products } = this.props;
    console.log('products', products);
    const categories = Object.keys(products);
    console.log(categories);
  
    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <ul>
        { categories.map(category =>
          <li 
          key={category}>
              <img
            width={'100px'}
            height={'100px'}
            src={products[category][0].image}
          />
              {this.toTitleCase(category)}</li>
        )}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.items,
  loading: state.products.loading,
  error: state.products.error
});

export default connect(mapStateToProps)(CategoriesList);




// ---------->



// import React from 'react';
// import { useEffect } from 'react';
// import { useState } from "react";

// export default function ProductCategories() {
//     const [hasError, setErrors] = useState(false);
//     const [products, setProducts] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const res = await fetch("https://fakestoreapi.com/products");
//       res
//         .json()
//         .then(res => setProducts(res))
//         .catch(err => setErrors(err));
//     }
//     fetchData();
//   },[]);
 
    
//     return (
//     <>
//     <div>
//       <span>{JSON.stringify(products[0])}</span>


//       <ul>{products && products.map((product, index)=> {return (
//       <li 
//       key={index}>
//           <img
//             width={'100px'}
//             height={'100px'}
//             src={product.image}
//           />
//       </li>) })}</ul>

//       <hr />
//       <span>Has error: {JSON.stringify(hasError)}</span>
//     </div>

  
//     </>
          
        
//     )
// }


    
//   useEffect((products) => {
//     const categorySelection = (products) => {
        
//         const newObject = {} 
        
//         for(let i=0; i < products.length; i++) {
//             newObject[products[i].category] ? newObject[products[i].category].push(products[i]) : newObject[products[i].category] = [ products[i] ];
            
//         }
//         console.log('newObject',newObject);
//         return  newObject // = { men: [i1, i2], women: [i3,i4] }
        
//     },  
//     [products]
//   })
