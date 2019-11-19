let AdvanceMenu = require('./AdvanceMenu');
let AdvanceMenuItem = require('./AdvanceMenuItem');

let disabled = require('./attributeTypes/Disabled');
let hasBackDrop = require('./attributeTypes/HasBackDrop');
let overLapTrigger = require('./attributeTypes/OverLapTrigger');

module.exports = {
    components: {
        AdvanceMenu,
        AdvanceMenuItem
    },
    attributeTypes: {
        'disabled': new disabled(),
        'hasBackDrop': new hasBackDrop(),
        'overLapTrigger': new overLapTrigger()
    }
}