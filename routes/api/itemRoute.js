const express = require ('express');
const router = express.Router();

//item.js model
const item = require ('../../models/item');

//CRUD
//routes GET api.itemRoute.js
// routing     :  GET api/itemRoute
// description :  GET items
// access      :  Public  
router.get('/', (req, res) => { //using router instead of app as it is not done in server.js, rather done in different module, item-route.
      item.find() //find items in the database, e.g: mlab
            .sort ({name: 1}) //sorting the items by name, ascending. -1 will be descending.
            .then (items => res.json (items)); //after finding items in the database, .then will fetch it             
                                               //and respond it by giving it in json formats (res.json(items))
});

// routing     :  POST api/itemRoute
// description :  Creating an Item (data)
// access      :  Private, but public for this project  
router.post('/', (req, res) => { 
    const newItem = new item ({
        name: req.body.name
    });    
    newItem.save()
            .then (item => res.json(item));   
});

// routing     :  DELETE api/itemRoute/:id
// description :  Deleting item (data)
// access      :  Private, but public for this project  
router.delete('/:id', (req, res) => { 
    item.findById (req.params.id )
        .then(item => item.remove ()
            .then (()=>res.json({success: true})))
                .catch (err => res.status(404).json({success: false})); 
}); 


module.exports = router;