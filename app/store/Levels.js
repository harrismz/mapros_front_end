Ext.define('Mapros.store.Levels',{
	extend: 'Mapros.store.Accesses',

	alias: 'store.levels',

	proxy: {
        url: 'http://localhost/mapros_system/public/api/grades'
    }
});