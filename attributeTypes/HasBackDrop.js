let disabledInstance = null;
module.exports = class disabled {

    constructor() {
        if (!disabledInstance) {
            disabledInstance = this;
            //set all other default values

            this.displayAs = 'Disabled';
            this.value = '[disabled]'
            this.type = 'TOGGLE';
            this.values = {'true-value':'true', 'false-value': 'false'}
        }
        return disabledInstance;
    }
}