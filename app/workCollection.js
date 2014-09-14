define(
    [
        'backbone'
    ],
    
    function(Backbone) {
        
        var WorkModel = Backbone.Model.extend({
            
            defaults: {
                id: '',
                title: ''
            }
        });
        
        var WorkCollection = Backbone.Collection.extend({
            
            model: WorkModel,
            
            url: 'http://localhost:8080/works'
        });
        
        return WorkCollection;
    }
);
