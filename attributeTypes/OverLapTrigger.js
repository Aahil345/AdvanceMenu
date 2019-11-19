let overLapTriggerInstance = null;
module.exports = class overlapTrigger {

    constructor() {
        if (!overLapTriggerInstance) {
            overLapTriggerInstance = this;
            //set all other default values

            this.displayAs = 'Overlap Trigger';
            this.value = 'overlapTrigger'
            this.type = 'TOGGLE';
            this.values = {'true-value':'true', 'false-value': 'false'}
        }
        return overLapTriggerInstance;
    }
}