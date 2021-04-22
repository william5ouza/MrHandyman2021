

var aMsg = require('./models/MessageDB')

//Creating messages function

exports.createMsg = async(req, res) =>{ 
     console.log("section: " + req.body.sec_n);
        var sectionName='Heating';
        
        if(req.body.sec_n == 1){
            sectionName = 'Plumbing';
        }else if(req.body.sec_n == 2){
            sectionName = 'Eletric';
        }else if(req.body.sec_n == 3){
            sectionName = 'Painting';
        }

        console.log(sectionName);

        var newMessage = new ({
            
            section: sectionName,
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
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

//get products function
exports.getMessages = async(req,res)=>{
   let MessageList= [];
   try{
    MessageList = await aMsg.find()

    res.render('index',{MessageDB:MessageList})
   }catch{
    console.log("Something happend at getting products")
    MessageList=[]
      res.render('index',{MessageDB:MessageList})
   }
    
   //rendering index page, sending the fetched products
};


//delete product function
exports.deleteMessage = async(req, res)=> {
    try{
        await aMsg.findByIdAndRemove(req.params.id)
        console.log("trying to delete product with with id " + req.params.id);
        res.redirect('/');
    }catch(error){
        console.log("something happend in deleting this message")
        console.log(error);
        res.redirect('/');
    }
    
};

