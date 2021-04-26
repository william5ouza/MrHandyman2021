var aMsg = require('./model/message_')

//Creating messages function

exports.createMsg = async(req, res) =>{ 
     // validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be emtpy!" });
    return;
  }

     console.log("section: " + req.body.sec_n);
        var sectionName='Paiting';
        
        if(req.body.sec_n == 1){
            sectionName = 'Plumbing';
        }else if(req.body.sec_n == 2){
            sectionName = 'Eletric';
        }else if(req.body.sec_n == 3){
            sectionName = 'Heating';
        }

        const newMessage = new aMsg ({
            
            section: sectionName,
            name: req.body.name,
            phone: req.body.phone,
            location: req.body.location,
            message: req.body.message
            
        });
    try{
        await newMessage.save();        
    }catch(error){
        console.log("There was an error with your messsage");
        console.log(error);      
    }
    //redirecting to index page, therefore will update table
    res.redirect('/');
};

exports.getMessages = async(req,res)=>{
   let allMSG= []
   try{
     allMSG = await aMSG.find();

    res.render('/staff',{msg:allMSG});
   }catch{
    console.log("Something happend at getting products");
    allMSG=[];
      res.render('/staff',{msg:allMSG});
   };
    
   //rendering index page, sending the fetched products
};

//delete function
exports.deleteMsg = async(req, res)=> {
    try{
        await aMsg.findByIdAndRemove(req.params.id)
        console.log("trying to delete product with with id " + req.params.id);
        res.redirect('/');
    }catch(error){
        console.log("couldnt delete this message")
        console.log(error);
        res.redirect('/');
    }
    
};