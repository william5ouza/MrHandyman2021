 //get dependencies

const express = require('express');
const router = express.Router();

const MSG = require ('./model/editingMSG');


router.get('/', async (req, res) =>{
    const MSG = await MSG.find();
    
    res.render('index', {
        editingMSG
});
});

//Create a message in db
router.post('/add', (req, res) =>{
    
    const MSG = new MSG(req.body);
     editingMSG.save();
    res.redirect('/');
});


//Update a message from db
router.post('/edit/:id', async (req, res) =>{

     const { id } = req.params;
    await MSG.update ({ _id: id }, req.body);
     res.redirect('/');

});

//Delete a message from db
router.get('/delete/:id', async (req, res) => {

    const { id } = req.params;
    await MSG.remove({_id: id });
     res.redirect('/');
});

module.exports = router;