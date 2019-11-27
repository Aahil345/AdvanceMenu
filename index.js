let Menu = require('./Menu');
let MenuItem = require('./MenuItem');

let disabled = require('./attributeTypes/Disabled');
let hasBackDrop = require('./attributeTypes/HasBackDrop');
let overLapTrigger = require('./attributeTypes/OverLapTrigger');

module.exports = {
    components: {
        Menu,
        MenuItem
    },
    attributeTypes: {
        'disabled': new disabled(),
        'hasBackDrop': new hasBackDrop(),
        'overLapTrigger': new overLapTrigger()
    }
}