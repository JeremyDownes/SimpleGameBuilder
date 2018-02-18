export const obstacles = [
    			{description: {type: 'fire', interact: {attribute: {health: {burn: -10}}, remove: 'water'},imgSrc: require('../resources/images/obstacles/fire.gif')},imgSrc: '../resources/images/obstacles/fire.gif', cursor:'fireCursor'}
,					{description: {type: 'dragon', interact: {combat: [{bite: 40}, {crush: 50}, {burn: 60}], remove: 80},imgSrc: require('../resources/images/obstacles/dragon.gif')}, imgSrc: '../resources/images/obstacles/dragon.gif',cursor:'dragonCursor'}
,         {description: {type: 'wall', imgSrc: require('../resources/images/obstacles/wall.png')}, imgSrc: '../resources/images/obstacles/wall.png', cursor:'wallCursor'}
,					{description: {type: 'lock', interact: {remove: 'key'},imgSrc: require('../resources/images/obstacles/lock.png')}, imgSrc: '../resources/images/obstacles/lock.png', cursor:'lockCursor'}
,					{description: {type: 'water', interact: {attribute: {wet: 30} , remove: false},imgSrc: require('../resources/images/obstacles/water.gif')}, imgSrc: '../resources/images/obstacles/water.gif', cursor:'waterCursor'}
,					{description: {type: 'block', interact: {attribute: {experience: 'Touched the weird block'}, remove: false},imgSrc: require('../resources/images/obstacles/block.jpg')}, imgSrc: '../resources/images/obstacles/block.jpg', cursor:'blockCursor'}
,					{description: {type: 'dragonRider', interact: {combat: [{impale: 25}, {burn:40}] , remove: 100},imgSrc: require('../resources/images/obstacles/dragon-rider.gif')}, imgSrc: '../resources/images/obstacles/dragon-rider.gif', cursor:'dragonRiderCursor'}
,					{description: {type: 'ridingHood', interact: {combat: [{claw: 15}, {bite:30}] , remove: 20},imgSrc: require('../resources/images/obstacles/riding-hood.gif')}, imgSrc: '../resources/images/obstacles/riding-hood.gif', cursor:'ridingHoodCursor'}

]

export default obstacles