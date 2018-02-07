export const objects = [
    			{description: {type: 'arrow', interact: {gain: 'arrow', remove: true},imgSrc: require('../resources/images/objects/arrow.png')},imgSrc: '../resources/images/objects/arrow.png' ,cursor:'arrowCursor'}
,					{description: {type: 'bow', interact: {gain: 'bow', remove: true},imgSrc: require('../resources/images/objects/bow.png')},imgSrc: '../resources/images/objects/bow.png',cursor:'bowCursor'}
,					{description: {type: 'chest', interact: {chance: [{coin:50},{arrow:20},{coin:200},{sword:100}], remove: true, requires: 'key'},imgSrc: require('../resources/images/objects/chest.png')},imgSrc: '../resources/images/objects/chest.png',cursor:'chestCursor'}
,					{description: {type: 'exit',  interact: {nextLevel: 1, remove: false},imgSrc: require('../resources/images/objects/exit.jpg')},imgSrc: '../resources/images/objects/exit.jpg', cursor:'exitCursor'}
,					{description: {type: 'key',  interact: {gain: 'key', remove: true},imgSrc: require('../resources/images/objects/key.png')},imgSrc: '../resources/images/objects/key.png', cursor:'keyCursor'}
,					{description: {type: 'sword',  interact: {gain: 'sword', remove: true},imgSrc: require('../resources/images/objects/sword.png')},imgSrc: '../resources/images/objects/sword.png', cursor:'swordCursor'}
,					{description: {type: 'coin',  interact: {coin: 1, remove: false},imgSrc: require('../resources/images/objects/coin.gif')},imgSrc: '../resources/images/objects/coin.gif', cursor:'coinCursor'}
]

export default objects