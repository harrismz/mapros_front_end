/**
 * This view is an example list of people.
 */
Ext.define('Mapros.view.config.user.ListUser', {
    extend: 'Ext.grid.Panel',
    xtype: 'listuser',

    requires: [
        'Mapros.store.User'
    ],

    title: 'Data User',

    store: {
        type: 'user'
    },

    columns: [
        { text: 'ID',  dataIndex: 'id' },
        { text: 'NIK', dataIndex: 'nik', flex: 1 },
        { text: 'NAME', dataIndex: 'name', flex: 1 }
    ]
});
