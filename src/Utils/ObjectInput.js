export const objects = [
    			{description: {type: 'arrow', interact: {gain: 'arrow', remove: true},imgSrc: require('../resources/images/objects/arrow.png')},imgSrc: '../resources/images/objects/arrow.png' ,cursor:'arrowCursor'}
,					{description: {type: 'bow', interact: {gain: 'bow', remove: true, damage: 10},imgSrc: require('../resources/images/objects/bow.png')},imgSrc: '../resources/images/objects/bow.png',cursor:'bowCursor'}
,					{description: {type: 'chest', interact: {chance: [{coin:50},{arrow:20},{coin:200},{sword:100}], remove: true, requires: 'key'},imgSrc: require('../resources/images/objects/chest.png')},imgSrc: '../resources/images/objects/chest.png',cursor:'chestCursor'}
,					{description: {type: 'exit',  interact: {nextLevel: 1, remove: false},imgSrc: require('../resources/images/objects/exit.jpg')},imgSrc: '../resources/images/objects/exit.jpg', cursor:'exitCursor'}
,					{description: {type: 'key',  interact: {gain: 'key', remove: true},imgSrc: require('../resources/images/objects/key.png')},imgSrc: '../resources/images/objects/key.png', cursor:'keyCursor'}
,					{description: {type: 'sword',  interact: {gain: 'sword', remove: true, damage: 3},imgSrc: require('../resources/images/objects/sword.png')},imgSrc: '../resources/images/objects/sword.png', cursor:'swordCursor'}
,					{description: {type: 'coin',  interact: {coin: 1, remove: true},imgSrc: require('../resources/images/objects/coin.gif')},imgSrc: '../resources/images/objects/coin.gif', cursor:'coinCursor'}
,					{description: {type: 'bucket',  interact: {gain: 'bucket', remove: true},imgSrc: require('../resources/images/objects/bucket.png')},imgSrc: '../resources/images/objects/bucket.png', cursor:'bucketCursor'}
,					{description: {type: 'cat',  interact: {experience: {experience: 'Pet the cat'}, remove: false},imgSrc: require('../resources/images/objects/cat.gif')},imgSrc: '../resources/images/objects/cat.gif', cursor:'catCursor'}
,					{description: {type: 'greenPotion',  interact: {attribute: {magic: 20}, remove: false},imgSrc: require('../resources/images/objects/potion_green.png')},imgSrc: '../resources/images/objects/potion_green.png', cursor:'greenPotionCursor'}
,					{description: {type: 'redPotion',  interact: {attribute: {health: 20}, remove: false},imgSrc: require('../resources/images/objects/potion_red.png')},imgSrc: '../resources/images/objects/potion_red.png', cursor:'redPotionCursor'}

]

export default objects