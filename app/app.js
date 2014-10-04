define(
    [
        'jquery',
        'backbone',
        'material',
        'appView'
    ],
    
    function($, Backbone, material, AppView) {
        
        var app = {
            appView: new AppView(),
            
            start: function() {
                
            }
        };
        
        app.start();
    }
);