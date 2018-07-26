/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Mapros.view.home.Home', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-home',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'Mapros.view.home.HomeModel',
        'Mapros.view.home.Scanning',
        'Mapros.view.home.Toolbar',
        'Mapros.view.login.Login',
        'Mapros.view.login.LoginController',
        'Mapros.view.main.Main',
        'Mapros.view.main.MainController',
        'Mapros.view.main.MainModel',
        'Mapros.view.main.List'
    ],

    controller: 'main',
    viewModel: 'home',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 10,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    dockedItems: [{ xtype: 'homeToolbar' }],

    items: [{
        title: 'Process Scan',
        iconCls: 'fa-home',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'scanning',
            height: 600
        }]
    }]
});
