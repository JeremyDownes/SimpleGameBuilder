import React from 'react'
import Board from '../Board/Board'
import Player from '../Player/Player'
import Menu from '../Menu/Menu'
import GameLogic from '../../Utils/GameLogic.js'
import Obstacles from '../../Utils/Obstacles.js'
import Objects from '../../Utils/Objects.js'
import ObjectsIN from '../../Utils/ObjectInput.js'
import ObstaclesIN from '../../Utils/ObstacleInput.js'
import './game.css'

class Game extends React.Component {
	constructor(props) {
		super(props)
		this.state = {game: new GameLogic(21,21,Obstacles,Objects)
		, player: { position: [19,1],name: 'W. Wolff', type: 'human', level: 1, health: 100, magic: 50, equipped: [], experience: {points:0, experiences: []}, coin: 0, stats: [], inventory: []}
		, obstacles: [], objects: [], description: {type: 'wall', style: {backgroundColor: 'lightgray', border: '.5rem inset '}, imgSrc: null}, cursor: 'wallCursor'
		 }	// import from db
		this.playMove = this.playMove.bind(this)
		this.neighborOffsets = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]]
		this.move = this.move.bind(this)
		this.scale = window.innerHeight <= window.innerWidth ? window.innerHeight / 21 : window.innerWidth / 21
		this.remainder = window.innerHeight <= window.innerWidth ? window.innerWidth - window.innerHeight : window.innerHeight - window.innerWidth
		this.changeObjectstacle = this.changeObjectstacle.bind(this)
		this.points = 0;
		this.which = 'obstacle'
		this.path = '../resources/images/obstacles/wall.png'
	}


	clear(x,y) {	
		this.neighborOffsets.forEach(offset=> {
			if (this.state.game.hasSafeTiles === 0) {
				return
			}
			let fX = offset[0]+x
			let fY = offset[1]+y
			if(fX >= 0 && fY >= 0 && fX < this.state.game.playerBoard.length && fY < this.state.game.playerBoard[0].length) {
				if(this.state.game.playerBoard[fX][fY] === ' ') {
					this.playMove(fX,fY)
					return
				}
			}	
		})
	}

	playMove(x,y) {
		if(this.state.game.obstacleBoard[x][y]){
			let game = this.state.game
			let obstacles = this.state.obstacles
			game.obstacleBoard[x][y] = null
			obstacles = obstacles.filter(obstacle=> obstacle.location[0] != x || obstacle.location[1] != y)
			this.setState({game: game, obstacles, obstacles})
			return
		}

		if(this.state.game.objectBoard[x][y]){
			let game = this.state.game
			let objects = this.state.objects
			game.objectBoard[x][y] = null
			objects = objects.filter(object=> object.location[0] != x || object.location[1] != y)
			this.setState({game: game, objects: objects})
			return
		}

		if(this.which==='obstacle') {
		let obstacles = this.state.obstacles
		let game = this.state.game
		game.obstacleBoard[x][y] = {location:[x,y], description: this.state.description}
		obstacles.push({location:[x,y], description: this.state.description, imgSrc: this.path})
		this.setState({obstacles: obstacles, game: game})
		this.render()
		}
		if(this.which==='object') {
		let objects = this.state.objects
		let game = this.state.game
		game.objectBoard[x][y] = {location:[x,y], description: this.state.description}
		objects.push({location:[x,y], description: this.state.description, imgSrc: this.path})
		this.setState({objects: objects, game: game})
		this.render()
		}
	}

	move(keyCode) {
			let nextPosition = []
			let player = this.state.player
			let animation = false
			nextPosition[0] = this.state.player.position[0]
			nextPosition[1] = this.state.player.position[1]
			switch(keyCode) {
				case 39: 
					if(document.getElementById(`${this.state.player.position[0]},${this.state.player.position[1]+1}`)) {
						nextPosition[1]++
						animation = 'righting'
					}
					break; 
				case 37: 
					if (document.getElementById(`${this.state.player.position[0]},${this.state.player.position[1]-1}`)) {
						nextPosition[1]--
						animation = 'lefting'
					}
					break; 
				case 38: 
					if (document.getElementById(`${this.state.player.position[0]-1},${this.state.player.position[1]}`)) {
						nextPosition[0]--
						animation = 'upping'
					}
					break; 
				case 40: 
					if (document.getElementById(`${this.state.player.position[0]+1},${this.state.player.position[1]}`)) {
						nextPosition[0]++
						animation = 'downing'
					}
					break; 
			}
		if (this.state.game.canPlayerEnter(nextPosition)) {
			if (this.state.game.objectBoard[nextPosition[0]][nextPosition[1]]) {
				player = this.state.game.objectInteract(nextPosition,player)
			}

			player.position = nextPosition
			this.setState({player: player})	
			setTimeout(function () {
				document.getElementById(`${nextPosition[0]},${nextPosition[1]}`).appendChild(document.getElementById('player'))
				document.getElementById('input').focus()
			},1000) 
			return animation
		}
	} 

	changeObjectstacle(which,path,objectstacle) {
		this.which=which
		this.path=path
		this.setState({description: objectstacle.description, cursor: objectstacle.cursor})
	}


  componentDidMount() {
		document.getElementById(this.state.player.position[0]+','+this.state.player.position[1]).appendChild(document.getElementById('player'))	
	  document.getElementById('input').focus() 
	  if(!this.state.initialize){
	  	this.setState({initialize: 'Objects'})
	  } 
	}

	render() {
		if (document.getElementById('input')) { document.getElementById('input').focus() }
			let style = {display: 'flex'}
		return (
			<div style={style} className={this.state.cursor}>			
				<Menu objectstacles={this.state.objects} obsOrObj={ObjectsIN} change={this.changeObjectstacle} scale={this.scale} style={{width: this.remainder/2+'px', maxWidth: this.remainder/2+'px'}} menu={this.state.initialize} which='object'/>
				<Player position = {this.state.playerPosition} move={this.move} change={this.state.playerChange}/>
				<Board handleClick={this.playMove} board={this.state.game} startGame={this.startGame} scale={this.scale}/>
				<Menu objectstacles={this.state.obstacles} obsOrObj={ObstaclesIN} change={this.changeObjectstacle} scale={this.scale} style={{width: this.remainder/2+'px', maxWidth: this.remainder/2+'px'}} menu={this.state.initialize} which='obstacle'/>
			</div>
		)
	}
}

export default Game;