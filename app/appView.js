define(
    [
        'backbone',
        'workCollection',
        'workRowView'
    ],
    
    function(Backbone, WorkCollection, WorkRowView) {
        
        var AppView = Backbone.View.extend({
            
            el: '#dailWorksApp',
            
            collection: new WorkCollection(),
            
            initialize: function() {
                this.$main = this.$('#main');
                this.$list = this.$('#work-list')
                
                this.listenTo(this.collection, 'reset', this.addAll);
                
                this.collection.fetch({ reset: true });
            },
            
            addOne: function(work) {
                var view = new WorkRowView({ model: work });
                this.$list.append(view.render().el);
            },
            
            addAll: function() {
                this.$list.html('');
                this.collection.each(this.addOne, this);
            }
        });
        
        return AppView;
    }
);
