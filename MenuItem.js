let Attribute = require('@jatahworx/bhive-toolkits').Attribute;
let AdvanceComponent = require('@jatahworx/bhive-toolkits').AdvancedComponent;
let BGuid = require('@jatahworx/bhive-toolkits/util/BGuid');

module.exports = class MenuItem extends AdvanceComponent {

    constructor() {
        const name = "ng-menu-item";
        const designerTemplate = `
            <ng-menu-item slot="menu-items" class="drop display-block" component-label="Menu Item" block-copy>
            </ng-menu-item>`;
        const paletteTemplate = 'Menu Item';
        const componentLabel = 'Menu Item';
        const templateUrl = "";

        super({ name, designerTemplate, paletteTemplate, componentLabel, templateUrl, isAdvancedChild: true, template: `` });

        super.addAttribute(
            new Attribute({
                key: 'MenuItemName',
                value: 'Menu Item',
                type: 'a',
                useAsLabel: true,
            })
        );

        super.addAttribute(
            new Attribute({
                key: '[matMenuTriggerFor]',
                value: '',
                type: 'kv'
            })
        );

        super.addAttribute(
            new Attribute({
                key: '[disabled]',
                value: '',
                type: 'kv'
            })
        );

        this.template = `<button mat-menu-item %bCustomProps% %style% %class% %[matMenuTriggerFor]%  %[disabled]%> %MenuItemName% </button>`;

        super.composeTemplate({
            styles: `:host {
                padding: 0.8em !important;
                position: relative;
                min-height: 1em;
                border: 1px solid lightgrey;
                margin: 6px 25px !important;
                border-radius: 5px !important;
                color: black;
                }`
        });

    }
};