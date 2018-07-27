/**
 * This view is an example list of people.
 */
Ext.define('Mapros.view.home.Scanning', {
    extend: 'Ext.panel.Panel',

    xtype: 'scanning',

    layout: {
        type: 'anchor',
    },

    // anchor: '100% 100%',

    items: [{
        xtype: 'fieldset',
        name: 'contHeader',
        layout: {
            type: 'hbox',
            pack: 'center',
            align: 'center'
        },

        defaults: { xtype: 'displayfield', },

        padding: '10 10 0 10',

        items: [{
            fieldLabel: 'LINE',
            name: 'line',
            labelWidth: 35,
            value: '1'
        }, { xtype: 'displayfield', value: '|', padding: '0 10 0 10' },
        {
            fieldLabel: 'TYPE',
            name: 'type',
            labelWidth: 35,
            value: 'AUDIO',
        }, { xtype: 'displayfield', value: '|', padding: '0 10 0 10' },
        {
            fieldLabel: 'PROCESS',
            name: 'process',
            labelWidth: 60,
            value: 'Manual Insert 1'
        }]
    }, {
        xtype: 'form',
        name: 'contForm',
        layout: {
            type: 'vbox',
            pack: 'center',
            align: 'center'
        },

        defaults: { xtype: 'textfield', labelWidth: 150 },

        items: [{
            xtype: 'checkboxfield',
            name: 'solder',
            boxLabel: 'SOLDER MACHINE',
            inputValue: '1'
        }, {
            fieldLabel: 'NIK',
            name: 'nik'
        }, {
            fieldLabel: 'Ticket No / Board ID',
            name: 'boardid'
        }, {
            fieldLabel: 'Model Number',
            name: 'modelno'
        }, {
            fieldLabel: 'Serial Number',
            name: 'serialno'
        }]
    }, {
        xtype: 'container',
        name: 'contFooter',
        layout: {
            type: 'vbox',
            pack: 'center',
            align: 'center'
        },

        defaults: { xtype: 'displayfield' },

        items: [{
            name: 'info',
            value: '<h1>INFORMATION STATUS</h1>'
        }, {
            name: 'status',
            value: '<h1 style="font-size:72px">OK / NG</h1>'
        }]
    }]


});
