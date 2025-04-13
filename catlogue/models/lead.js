const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  leadSchema= new mongoose.Schema({
    
        field: String ,
        value: {
          ad_id: String,
          form_id: String,
          leadgen_id: String,
          created_time: Number ,
          page_id: String,
          adgroup_id: String
        }
      



   


  });
module.exports=mongoose.model('lead',leadSchema);