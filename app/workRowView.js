define(
    [
        'underscore',
        'backbone',
        'text!workRowTemplate.html'
    ],
    
    function(_, Backbone, workRowTemplate) {
        
        var WorkView = Backbone.View.extend({
            
            tagName: 'li',
            
            template: _.template(workRowTemplate),
            
            render: function() {
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            }
        });
        
        return WorkView;
    }
);
