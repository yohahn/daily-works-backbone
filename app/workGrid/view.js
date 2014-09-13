define(
    [
        'underscore',
        'jquery',
        'backbone',
        'text!./template.html'
    ],
    
    function(_, $, Backbone, template) {
        
        var WorkGridView = Backbone.View.extend({
            
            id: "work-grid",
            
            tagName: "div",
            
            template: _.template(template),
            
            initialize: function() {
                $('#main-content').html(this.el);
                this.render();
            },
            
            render: function() {
                this.$el.html(this.template());
            }
        });
        
        return WorkGridView;
    }
);