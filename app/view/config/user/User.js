Ext.define('Mapros.view.config.user.User',{
	extend: 'Ext.panel.Panel',

	xtype: 'user',

	requires: [
		'Mapros.view.main.MainModel',
		'Mapros.view.main.List',
		'Mapros.view.config.user.ListUser'
	],

	// layout: {
 //        type: 'vbox',
 //        pack: 'center',
 //        align: 'center'
 //    },
 	padding: 10,
    items: [{
    	xtype: 'listuser',
    	// bind: {
     //        html: '{loremIpsum}'
     //    }
    }]
});