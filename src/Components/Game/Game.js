import React from 'react'
import Board from '../Board/Board'
import Player from '../Player/Player'
import Menu from '../Menu/Menu'
import GameLogic from '../../Utils/GameLogic.js'
import Obstacles from '../../Utils/Obstacles.js'
import './game.css'

class Game extends React.Component {
	constructor(props) {
		super(props)
		this.state = {game: new GameLogic(21,21,Obstacles,
				[	{location: [19,13], imgSrc: './coin.png', type: 'coin', interact: {coin: 1, remove: true}},	{location: [17, 8], imgSrc: './coin.png', type: 'coin', interact: {coin: 1, remove: true}}])
		, player: { position: [19,1],name: 'W. Wolff', type: 'human', level: 1, health: 100, magic: 50, equipped: [], experience: {points:0, experiences: []}, coin: 0, stats: [], inventory: []}
		, obstacles: [], objects: []
		 }	// import from db
		this.playMove = this.playMove.bind(this)
		this.neighborOffsets = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]]
		this.move = this.move.bind(this)
		this.scale = window.innerHeight <= window.innerWidth ? window.innerHeight / 21 : window.innerWidth / 21

		this.points = 0;
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
		let obstacles = this.state.obstacles
		let game = this.state.game
		alert(x+","+y)
		game.obstacleBoard[x][y] = 'b'
		obstacles.push([x,y])
		this.setState({obstacles: obstacles, game: game})
		console.log(this.state.obstacles)
		this.render()
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



  componentDidMount() {
		document.getElementById(this.state.player.position[0]+','+this.state.player.position[1]).appendChild(document.getElementById('player'))	
	  document.getElementById('input').focus() 
	}

	render() {
		if (document.getElementById('input')) { document.getElementById('input').focus() }
		return (
			<div style={{display: 'flex'}}>			
				<Menu objectstacles={this.state.obstacles} />
				<Player position = {this.state.playerPosition} move={this.move} change={this.state.playerChange}/>
				<Board handleClick={this.playMove} board={this.state.game} startGame={this.startGame} scale={this.scale}/>
				<Menu objectstacles={this.state.obstacles} type='wall' style = "backgroundColor: 'lightgray', border: '.5rem inset '"/>
			</div>
		)
	}
}

export default Game;