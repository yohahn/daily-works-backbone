var require = {
    baseUrl: 'app',
    
    paths: {
        backbone : '../lib/backbone-1.1.2',
        jquery : '../lib/jquery-2.1.1',
        underscore : '../lib/underscore-1.7.0',
        text : '../lib/text-2.0.12',
        bootstrap : '../lib/bootstrap-3.2.0',
        ripples : '../lib/ripples',
        material : '../lib/material'
    },
    
    shim: {
        'bootstrap' : { 'deps' : ['jquery'] },
        'ripples' : {
            exports : 'ripples'
        },
        'material' : {
            'deps' : ['jquery', 'bootstrap', 'ripples'],
            exports : 'material'
        }
    }
};
