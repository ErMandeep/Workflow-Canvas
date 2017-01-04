
Template.work_flow_table.helpers({
    
     workflow_seq: function () {
        
      return WorkflowTable.find({}, {sort: {createdOn: -1}});         

    }
    
});



Template.work_flow_table.events({

'submit form': function(event){
        
     event.preventDefault();
    
        // Get value from form element

    const target = event.target;
    
    var user_placeholder = Meteor.user().username;
    
    var triggerVar = target.Trigger.value;
    var conditionVar = target.Condition.value;
    var actionVar = target.Action.value;
    var ownerVar = target.Owner.value;
    var alertmsgVar = target.AlertMessage.value;
    var alertmsgrecipientVar = target.AlertRecipient.value;
     var currentList = this._id;
    
    WorkflowTable.insert({
        
        trigger: triggerVar ,
        condition: conditionVar, 
        action: actionVar,
        owner: ownerVar,
        alertmsg: alertmsgVar,
        alertrecipient: alertmsgrecipientVar,
        createdOn: new Date(),
        userID: user_placeholder,
        listId: currentList
        
    });
    
     Bert.alert( 'Worklow Sequence Created', 'success', 'fixed-top', 'fa-check' );
    
    //clear form
    target.Trigger.value = "";
    target.Condition.value = "";
    target.Action.value = "";
    target.Owner.value = "";
    target.AlertMessage.value = "";
    target.AlertRecipient.value = "";
    
    },
    
    'click .edit-workflow': function() {

    //build in edit code    
        event.preventDefault();
   //  var businesscanvasNameEdit = $('[name="businesscanvasNameEdit"]').val();   
   //    var triggerVar = target.Trigger.value;
  //  var conditionVar = target.Condition.value;
  //  var actionVar = target.Action.value;
  //  var ownerVar = target.Owner.value;
  ///  var alertmsgVar = target.AlertMessage.value;
  //  var alertmsgrecipientVar = target.AlertRecipient.value;
        
  //   WorkflowTable.update({
        
   //     trigger: triggerVar ,
   //     condition: conditionVar, 
   //     action: actionVar,
   //     owner: ownerVar,
    //    alertmsg: alertmsgVar,
    //    alertrecipient: alertmsgrecipientVar,
    //    createdOn: new Date(),
    //    userID: user_placeholder,
    //    listId: currentList
        
    //});   
        
     Bert.alert( 'Worklow Sequence Updated', 'success', 'fixed-top', 'fa-check' );
    
    },
    
    'click .delete-workflow': function() {
       
        var pinId = this._id;
        console.log(pinId);
        
        if (confirm("Would you like to delete this pin-note ?")) {
            WorkflowTable.remove(pinId);
            Bert.alert( 'Sequence successfully deleted', 'danger', 'fixed-top', 'fa-remove' );
            return false;
        }
        
        return false;
        
          
        
    }

});


