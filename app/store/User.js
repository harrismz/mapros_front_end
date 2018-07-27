Ext.define('Mapros.store.User', {
    extend: 'Ext.data.Store',

    alias: 'store.user',

    fields: [
        'id', 'nik', 'name', 'access_id', 'input_by', 'input_at', 'update_emp_id', 'update_date', 'grade_id', 'department_id'
    ],

    data: { items: [
        { id: '1', nik: "37297", name: "ADMINISTRATOR", access_id: "0", input_by: "ADMINISTRATOR", input_at: "LINE 1", update_emp_id: "1", update_date: "27-07-2018", grade_id: "0", department_id: "17" },
        { id: '2', nik: "37297", name: "ADMINISTRATOR", access_id: "0", input_by: "ADMINISTRATOR", input_at: "LINE 2", update_emp_id: "2", update_date: "27-07-2018", grade_id: "0", department_id: "17" },
        { id: '3', nik: "37297", name: "ADMINISTRATOR", access_id: "0", input_by: "ADMINISTRATOR", input_at: "LINE 3", update_emp_id: "3", update_date: "27-07-2018", grade_id: "0", department_id: "17" }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
