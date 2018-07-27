Ext.define('Mapros.view.config.user.User',{
	extend: 'Ext.panel.Panel',

	xtype: 'user',

	requires: [
		'Mapros.view.main.MainModel',
		'Mapros.view.main.List',
		'Mapros.view.config.user.List',
		'Mapros.view.config.user.access.List',
		'Mapros.view.config.user.department.List'
	],

	layout: {
        type: 'anchor'
    },

    autoScroll: true,

 	padding: 10,

    items: [{
    	xtype: 'list_user',
    }, {
    	xtype: 'user_access',
    	padding: '10 0 0 0'
    }, {
    	xtype: 'user_department'
    }]
});