Router.configure({
    //frame-build
   layoutTemplate: 'app_layout'
    //,
    //loadingTemplate:'layoutLoading',
    //notFoundTemplate:'notFound'
});



Router.route('/', {
    //posting-board
       
    name: 'workflowtableitem',
    template: 'work_flow_card',

    
    data: function(){
       
        
       WorkflowTable.find(); 
        
    },
             
    waitOn: function(){
  
            Meteor.subscribe('workflowtable');
            Meteor.subscribe('workflowlist');   
        
        }
  
});