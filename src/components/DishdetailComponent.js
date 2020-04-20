import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { comment } from 'postcss';


class Dishdetail extends Component {

    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    renderComments(dish) {
        if (dish != null)
            return(
                <div>
                    <h3>Comments</h3>
                    <div>{dish.comments.map((details) => { return(
                        <div>
                        <p>{details.comment}</p>
                        <p>-- {details.author}, { new Date(details.date).toDateString()}</p>
                        </div>
                        );
                    })}
                    </div>
                    <p>{dish.comments.author}</p>
                </div>
            );
        else
            return(
                <div></div>
            );
    }

    render() {
        return (
            <div className="row">
                <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.dish)}
                </div>
            </div>
        
        );
    }
}

export default Dishdetail;