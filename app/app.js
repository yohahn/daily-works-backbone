define(
    [
        'jquery',
        'backbone',
        'workGrid/view'
    ],
    
    function($, Backbone, WorkGridView) {
        
        var app = {
            workGridView: new WorkGridView(),
            
            start: function() {
                
            }
        };
        
        app.start();
    }
);