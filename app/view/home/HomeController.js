/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Mapros.view.home.HomeController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.home',

    destroyHome : function() {
        console.log("berhasil login");
    }

    listen : {
        controller : {
            'home' : { //this is controller alias name
                //name of the event : //method to trigger here
                'destroyHome': 'destroyHome'
            }
        }
    },
/*
    onLogin: function() {

        // console.log("Terpanggil");
        // var loggedIn;

        // loggedIn = localStorage.getItem("LoggedIn");

        // var test = Ext.create({
        //     xtype: 'login',
        //     animateTarget: this.getView().down('button[name=signin]')
        // });

        // test.show()
    }

    showLogOutButton : function(){
        this.getView().down('button[name=signout]').setVisible(true);
        this.getView().down('button[name=signin]').setVisible(false);
    },

    //this is listener. this controller listen to another controller to fire specific event that already 
    //configured like below
    listen : {
        controller : {
            'login' : { //this is controller alias name
                //name of the event : //method to trigger here
                'showLogOutButton': 'showLogOutButton'
            }
        }
    },

    onLogout: function() {
        // Remove the localStorage key/value
        localStorage.removeItem('LoggedIn');

        // show login button
        this.getView().down('button[name=signin]').setVisible(true);

        // hide logout button
        this.getView().down('button[name=signout]').setVisible(false);

        // Remove Main View
        this.getView().destroy();

        // Add the Login Window
        Ext.create({
            xtype: 'app-home'
        });
    }
*/
});
