import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => {
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
})

const CategoryDetails = ({ selectedProducts }) => {
    const classes = useStyles();
    
    if (!selectedProducts) {
        return <div></div>
    } else {
        return <div>{selectedProducts.map((item) => {
            return (
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={item.image}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="subtitle2" component="h4">
                                {item.title}
                            </Typography>
                            <Typography gutterBottom variant="subtitle2" component="h4">
                                {item.price}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            )
        })}</div>
    }

}

export default CategoryDetails;