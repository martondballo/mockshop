import React, { Fragment } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productsActions";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CategoryDetails from './CategoryDetails'


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
      objectFit: 'contain'
    },
    container: {
      display: 'flex',
      justifyContent: 'center',
    }
  };
};


class CategoriesList extends React.Component {
  state = {category: ''}
  componentDidMount() {
    console.log('before fetch product');
    this.props.dispatch(fetchProducts());
  }

  componentDidUpdate() {
   

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
    const { category} = this.state;
    console.log('products', products);
    const categories = Object.keys(products);
    console.log(categories);

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }
    console.log(categories)
    console.log('state', this.state)
    console.log('actualproducts', products[category])
    console.log('ablabla', products[''])
    return (
      <Fragment>
        <div className={classes.container}>
          {categories.map(category => {
            const image = products[category][0].image;

            return (
              <Fragment>
              <Card className={classes.root} onClick={()=> {this.setState({category: category})}}>
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
              </Fragment>
            )
          })}
        </div>
        <CategoryDetails selectedProducts={products[category]} />
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

