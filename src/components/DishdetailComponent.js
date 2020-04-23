import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import{Link} from 'react-router-dom';

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

function RenderComments({comments}) {
    if (comments != null)
        return(
            <div>
                <h3>Comments</h3>
                <div>
                    {
                        comments.map((details) => { 
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
                <Breadcrumb>
                    <BreadcrumbItem><Link to ="/menu"> Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr/>
                </div>
            </div>
        <div className="row">
            <div  className="col-12 col-md-5 m-1">
                <RrenderDish dish={props.dish}/>
            </div>
            <div className="col-12 col-md-5 m-1">
                <RenderComments comments = {props.comments}/>
            </div>
        </div>
        </div>
    );
}


export default Dishdetail;