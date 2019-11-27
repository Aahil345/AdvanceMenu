let Attribute = require('@jatahworx/bhive-toolkits').Attribute;
let AdvanceComponent = require('@jatahworx/bhive-toolkits').AdvancedComponent;

module.exports = class advanceMenu extends AdvanceComponent {

    constructor() {

        const name = "ng-menu";
        const designerTemplate = `
            <ng-menu onclick="click(event)" component-label="Menu" class="ad-element flex-shrink-0 flex-grow-1">           
                <div slot="add" class="ng-menu-button-slot">
                    <button id="addmenuitem" class="ng-menu-button" no-select>+</button>
                </div>
            </ng-menu>
        `;
        const paletteTemplate = 'Menu';
        const componentLabel = 'Menu';
        const templateUrl = "";

        super({ name, designerTemplate, paletteTemplate, componentLabel, templateUrl, template: `` });

        super.setType(AdvanceComponent.COMPONENT_TYPE_TITLES.NAVIGATION.val);

        super.addAttribute(
            new Attribute({
                key: 'xPosition',
                value: '',
                type: 'kv'
            })
        );
        super.addAttribute(
            new Attribute({
                key: 'yPosition',
                value: '',
                type: 'kv'
            })
        );
        super.addAttribute(
            new Attribute({
                key: 'templateRef',
                value: '',
                type: 'kv'
            })
        );
        super.addAttribute(
            new Attribute({
                key: 'items',
                value: '',
                type: 'kv'
            })
        );
        super.addAttribute(
            new Attribute({
                key: 'matMenu',
                value: '',
                type: 'vk'
            })
        );
        super.addAttribute(
            new Attribute({
                key: 'hasBackdrop',
                value: '',
                type: 'kv'
            })
        );
        super.addAttribute(
            new Attribute({
                key: 'overlapTrigger',
                value: '',
                type: 'kv'
            })
        );
        super.addAttribute(
            new Attribute({
                key: '(closed)',
                value: '',
                type: 'kv'
            })
        );
        super.addAttribute(
            new Attribute({
                key: 'direction',
                value: '',
                type: 'kv'
            })
        );
        super.addAttribute(
            new Attribute({
                key: 'parentMenu',
                value: '',
                type: 'kv'
            })
        );

        super.composeTemplate({
            styles: `
            :host {
                display: flex;
                padding-top: 2em;
                padding-bottom: 1em;
                flex-direction: column;
                align-self: start;
              }`,
            slotsTemplate: `
            <div class="parent_menu">
                <slot name="menu-items"></slot>
             </div>
            <div class="parent_menu">
                <slot id="addSlot" name="add"></slot>
            </div>
            `,
            onInit: function() {},
            onDestroy: function() {},
            customMethods: {
                click: function(event) {
                    if (event.target.id === "addmenuitem") {
                        this.addChild("ng-menu-item");
                    }
                },
            }
        });
    }

    get template() {
        const template = `<mat-menu  %bCustomProps% %style% %class% %xPosition% %yPosition% %templateRef% %items% %matMenu% %hasBackdrop% %overlapTrigger% %(closed)% %direction% %parentMenu%> </mat-menu>`;
        return template;
    }

    set template(templateString) {}

};