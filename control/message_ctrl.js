var msg = require('../model/message_')//import the schema in here

//Creating messages function

exports.createMsg = async(req, res) =>{ 
     // validate request
    var sectionName='Painting';
        
        if(req.body.sec_n == 1){
            sectionName = 'Plumbing';
        }else if(req.body.sec_n == 2){
            sectionName = 'Electric';
        }else if(req.body.sec_n == 3){
            sectionName = 'Heating';
        }

        const newMessage = new msg ({
            
            section: sectionName,
            name: req.body.name,
            phone: req.body.phone,
            location: req.body.location,
            message: req.body.message
            
        });
    try{
        await newMessage.save(); 
        console.log(newMessage);    
    }catch(error){
        console.log("There was an error with your messsage");
        console.log(error);      
    }
     res.redirect('/staff');
};
//Get all messages
exports.getMessages = async(req,res)=>{
   msg.find({}, function(err, msgs){
        res.render('staff', {
           msg: msgs
       });
     });
   };

//delete function
exports.deleteMsg = async(req, res)=> {
    try{
        await msg.findByIdAndRemove(req.params.id)
        console.log("trying to delete message with with id " + req.params.id);
        res.redirect('/staff');
    }catch(error){
        console.log(error);
        res.redirect('/staff');
    }
    
};
