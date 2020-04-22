import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { comment } from 'postcss';


function RrenderDish({dish}) {
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

function RenderComments({dish}) {
    if (dish != null)
        return(
            <div>
                <h3>Comments</h3>
                <div>
                    {
                        dish.comments.map((details) => { 
                        return(
                            <ul className="list-unstyled">
                                <p>{details.comment}</p>
                                <p>-- {details.author}, { new Intl.DateTimeFormat('en-us',{year :'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(details.date)))}</p>
                            </ul>
                        );
                        })
                    }
                </div>
            </div>
        );
    else
        return(
            <div></div>
        );
}

const Dishdetail = (props)=> {
    return (
        <div className="container">
        <div className="row">
            <div  className="col-12 col-md-5 m-1">
                <RrenderDish dish={props.dish}/>
            </div>
            <div className="col-12 col-md-5 m-1">
                <RenderComments dish = {props.dish}/>
            </div>
        </div>
        </div>
    );
}


export default Dishdetail;