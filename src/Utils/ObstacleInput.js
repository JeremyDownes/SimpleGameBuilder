export const obstacles = [
    			{description: {type: 'fire', interact: {burn: 10, remove: true, requires: 'water'},imgSrc: require('../resources/images/obstacles/fire.gif')},imgSrc: '../resources/images/obstacles/fire.gif', cursor:'fireCursor'}
,					{description: {type: 'dragon', interact: {chance:{bite: 40, crush: 50, burn: 60}, remove: true, requires: 'combat'},imgSrc: require('../resources/images/obstacles/dragon.gif')}, imgSrc: '../resources/images/obstacles/dragon.gif',cursor:'dragonCursor'}
,         {description: {type: 'wall', imgSrc: require('../resources/images/obstacles/wall.png')}, imgSrc: '../resources/images/obstacles/wall.png', cursor:'wallCursor'}
,					{description: {type: 'lock', interact: {neutral: null, remove: true, requires: 'key'},imgSrc: require('../resources/images/obstacles/lock.png')}, imgSrc: '../resources/images/obstacles/lock.png', cursor:'lockCursor'}
,					{description: {type: 'water', interact: {wet: null, remove: false},imgSrc: require('../resources/images/obstacles/water.png')}, imgSrc: '../resources/images/obstacles/water.png', cursor:'waterCursor'}
,					{description: {type: 'block', interact: {neutral: null, remove: false},imgSrc: require('../resources/images/obstacles/block.jpg')}, imgSrc: '../resources/images/obstacles/block.jpg', cursor:'blockCursor'}
,					{description: {type: 'dragonRider', interact: {chance: [{impale: 25}, {burn:40}] , remove: true, requires: 'combat'},imgSrc: require('../resources/images/obstacles/dragon-rider.gif')}, imgSrc: '../resources/images/obstacles/dragon-rider.gif', cursor:'dragonRiderCursor'}
,					{description: {type: 'ridingHood', interact: {chance: [{claw: 15}, {bite:30}] , remove: true, requires: 'combat'},imgSrc: require('../resources/images/obstacles/riding-hood.gif')}, imgSrc: '../resources/images/obstacles/riding-hood.gif', cursor:'ridingHoodCursor'}

]

export default obstacles