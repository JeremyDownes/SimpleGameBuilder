import React from 'react'
import './menu.css'

class Menu extends React.Component {
	constructor(props) {
		super(props)
		this.scale = window.innerHeight <= window.innerWidth ? window.innerHeight / 21 : window.innerWidth / 21
	}

	activate(path,objectstacle) {
		this.props.change(this.props.which,path,objectstacle)
	}

	objectstacle(objectstacle) {
		return (
			"location: ["+
			objectstacle.location[0]+
			","+
			objectstacle.location[1]+
			"], description: {type:'"+
			objectstacle.description.type+
			"', imgSrc: require('"+
			objectstacle.imgSrc+
			"')}, interact: "+
			JSON.stringify(objectstacle.description.interact)+
			"},"
		)
	}

	render() {
		return (
				<div className='menu'>
					<h1>{this.props.menu}</h1>
					{this.props.obsOrObj.map(objectstacle=> <img src={objectstacle.description.imgSrc} onClick={this.activate.bind(this,objectstacle.imgSrc,objectstacle)} />)}
					{this.props.objectstacles.map(objectstacle=> <p>{this.objectstacle(objectstacle)}</p>)}
				</div>
			)
	}


}

export default Menu