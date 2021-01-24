import React, { Fragment } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productsActions";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


const styles = function(theme) {
  return {
    root: {
      width: 150,
      padding: 16,
      margin: 16,
      
    },
    media: {
      width: 150,
      height: 150,
    },
    container: {
      display: 'flex',
      justifyContent: 'center',
    }
  };
};


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
      function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }


  render() {
    const { error, loading, products, classes } = this.props;
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
      <Fragment>
        <div className={classes.container}>
          {categories.map(category => {
            const image = products[category][0].image;

            return (
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={image}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                  <Typography gutterBottom variant="subtitle2" component="h4">
                    {this.toTitleCase(category)}
                  </Typography>
                  </CardContent>
                </CardActionArea>

              </Card>
            )
          })}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.items,
  loading: state.products.loading,
  error: state.products.error
});

export default connect(mapStateToProps)(withStyles(styles)(CategoriesList))




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
