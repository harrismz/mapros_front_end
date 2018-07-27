Ext.define('Mapros.store.Departments', {
    extend: 'Mapros.store.Accesses',

    alias: 'store.departments',

    proxy: {
        url: 'http://localhost/mapros_system/public/api/departments'
    }
});
