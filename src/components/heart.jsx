import React, {Component} from "react";

class Heart extends Component {
    render() {
        const {liked,onLikeUnlike} = this.props;
        if(liked)
            return <i onClick={onLikeUnlike} style={{cursor:"pointer"}} className="fa fa-heart" aria-hidden="true"/>
        return <i onClick={onLikeUnlike} style={{cursor:"pointer"}} className="fa fa-heart-o" aria-hidden="true"/>
    }
}

export default Heart