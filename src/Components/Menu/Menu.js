import React from 'react'


class Menu extends React.Component {

	render() {
		return (
				<div>
					{this.props.objectstacles.map(objectstacle=> <p>^location: [{objectstacle+'\n'}],<span> description: ^type:'{this.props.type}', style:^{this.props.style}&,{this.props.imgSrc}&&,</span></p>)}
				</div>
			)
	}


}

export default Menu