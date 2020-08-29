import {addNewContact,getContact,getContactWithId,updateContact,deleteContact} from '../controllers/crmController';


const routes =(app)=>{
    app.route('/contact')
    .get((req,res,next)=>{
      next();  
    },getContact)

    .post(addNewContact);


    app.route('/contact/:contactId')
    .get(getContactWithId)

    .put(updateContact)

    .delete(deleteContact);
    
}

export default routes;