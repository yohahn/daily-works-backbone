define(
    [
        'jquery',
        'backbone',
        'appView'
    ],
    
    function($, Backbone, AppView) {
        
        var app = {
            appView: new AppView(),
            
            start: function() {
                
            }
        };
        
        app.start();
    }
);