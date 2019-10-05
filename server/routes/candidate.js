const express = require('express')
const Candidate = require('../models/candidateModel')
const router = new express.Router()

router.get('/', async(req, res, next)=>{
    Candidate.find({}, { name: 1, aadhar_no: 1, phone_number: 1, city: 1, bank_account: 1, _id: 1 })
    .then(candidates => {
        res.send(candidates);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
   
});

router.get('/:id', async(req, res, next)=>{
    Candidate.findOne({_id: req.params.id})
    .then(candidates => {
        res.send(candidates);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
   
});

router.post('/' , async (req, res) => {
    const candidate = new Candidate(req.body)

    try {
        await candidate.save()
        console.log(candidate.email)
        res.status(201).send({candidate})
    }catch (err) {
        console.log(err)
        res.status(400).send(err)
    }

})


router.patch('/:id' , async (req , res) => {

    const id = req.params.id
    const CandidateOld = await Candidate.findById(id)
    const candidateObject = CandidateOld.toObject()

    candidateObject.versions = candidateObject.versions.concat({candidateObject});

    candidateObjectVersion = {
        name: candidateObject.name,
        aadhar_no: candidateObject.aadhar_no,     
        dob: candidateObject.dob,
        phone_number: candidateObject.phone_number,      
        alternate_phone_number: candidateObject.alternate_phone_number,
        address_1: candidateObject.address_1,       
        address_2: candidateObject.address_2,
        city: candidateObject.city,
        state: candidateObject.state,
        country: candidateObject.country,
        gender: candidateObject.gender,
        source: candidateObject.source,
        source_type: candidateObject.source_type,
        employement_status: candidateObject.employement_status,
        occupation: candidateObject.occupation,
        annual_income: candidateObject.annual_income,
        educational_qualification: candidateObject.educational_qualification,
        successful_enterprises: candidateObject.successful_enterprises,
        failed_enterprises:candidateObject.failed_enterprises,
        bank_account: candidateObject.bank_account,
        credit_history: candidateObject.credit_history,
        has_assets: candidateObject.has_assets,
        needs_training: candidateObject.needs_training,
        status: candidateObject.status,
        email: candidateObject.emai
    }

    CandidateOld.versions.push(candidateObjectVersion);

    try{

        const candidate = await Candidate.findByIdAndUpdate(id, req.body , 
            {new: true , runValidators: true})

        if(!candidate){
            return res.status(404).send()
        }else{
            
            const version = await Candidate.findByIdAndUpdate(id, {versions: CandidateOld.versions} , 
                {new: true , runValidators: true})
        }
        res.status(200).send(candidate)
    }catch(e){
        res.status(500).send(e)
    }
})



module.exports = router
