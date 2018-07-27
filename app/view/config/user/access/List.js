/**
 * This view is an example list of people.
 */
Ext.define('Mapros.view.config.user.access.List', {
    extend: 'Ext.grid.Panel',

    xtype: 'user_access',
    
    title: 'Data Access',

    store: 'Accesses',

    columns: [
        { text: 'ID',  dataIndex: 'id' },
        { text: 'NAME', dataIndex: 'name', flex: 1 }
    ],

    bbar: {
        xtype: 'pagingtoolbar',
        store: 'Accesses'
    }
});
