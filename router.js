 //get dependencies

const express = require('express');
const router = express.Router();

const msgCtrl = require ('./message-crtl');


router.get('/', async (req, res) =>{
    const msgCtrl = await getMessages.find();
    
    res.render('index', {
        getMessages
});
});

//Create a message in db
router.post('/add', (req, res) =>{
    
    const msgCtrl = new msgCtrl(req.body);
     getMessages.save();
    res.redirect('/');
});


/*Update a message from db
router.post('/edit/:id', async (req, res) =>{

     const { id } = req.params;
    await msgCtrl.update ({ _id: id }, req.body);
     res.redirect('/');

});
*/
//Delete a message from db
router.get('/delete/:id', async (req, res) => {

    const { id } = req.params;
    await msgCtrl.remove({_id: id });
     res.redirect('/');
});

module.exports = router;