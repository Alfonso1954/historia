const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const PatientPostSchema = new Schema({
    primerNombre : String,
    segundoNombre: String,
    primerApellido: String,
    segundoApellido: String,
    sexo:String,
    e_mail:String,
    direccion:String,
    celular:Number,
    _id:Number,
    f_naci:Date,
    edad:Number,
    regimen:String,
    eps:String,
    autorizacion:Number,
    valor:Number,
    antecedentes:String,
    //username: String,
    /*
    userid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    */
    dateCreated: { /* can declare property type with an object like this because we need 'default' */
        type: Date,
        default: new Date()
    },
    //image: String
});

const PatientPost = mongoose.model('PatientPost', PatientPostSchema);
module.exports = PatientPost
