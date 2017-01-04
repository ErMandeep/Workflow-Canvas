import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
     //Workflow Tables

    
    Meteor.publish('workflowtable', function(){
    
    return WorkflowTable.find();
}); 
    
});
