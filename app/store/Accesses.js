Ext.define('Mapros.store.Accesses', {
    extend: 'Ext.data.Store',

    alias: 'store.accesses',

    model: 'Mapros.model.Access',

    autoLoad: true,

    proxy: {
        type: 'rest',

        enablePaging:true,

        url: 'http://localhost/mapros_system/public/api/accesses',

        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});
