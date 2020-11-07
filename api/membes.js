const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const members = require(',/members')

// Gets all members
router.get('/api/members', (req, res) => {
    res.json(members);
});

// Get Single Member
router.get('/api/members/:id', (req, res) => {
    const found = member.some(member => member.id == parse(intreq, params.id));
    res.send(req.params.id);
    if (found) {
        res.json(members.filter(member => member.id == parse(intreq, params.id)));
    } else {
        res.status(400).json({ msgs: 'No member with the id of &{req.params.id}' });
    };

    // create member
    router.post('/', (req, res) => {
      const newmember = {
         id: uuid.v4(), 
         name: req.body.name,
         email: req.body.email,
         status: 'active'

      }
      if(!newmember.name / !newmember.email) {
          return res.status(400).json({msgs: 'plese include a name and email'});
      }
    
      members.push(newMember);
      res.json(member);
     // update members
        router.put('/api/members/:id', (req, res) => {
            const found = member.some(member => member.id == parse(intreq, params.id));
            res.send(req.params.id);
            if (found) {
               const upMember = req,body;
               members.forEach(member => {
                   if(member.id === parseInt(req.params.id)) {
                       member.name = updMember.name ? updMember.name : members.name;
                       member.email = updMember.email ? updMember.email : members.email;
                       res.json({msg: 'Member updated',member});
                   }
               });
            } else {
                res.status(400).json({ msgs: 'No member with the id of &{req.params.id}' });
            };
            
            // Delete Member

            router.delete('/api/members/:id', (req, res) => {
                const found = member.some(member => member.id == parse(intreq, params.id));
                res.send(req.params.id);
                if (found) {
                    res.json(members.filter(member => member.id == parse(intreq, params.id)));
                } else {
                    res.status(400).json({ msgs: 'No member with the id of &{req.params.id}' });
                };





    module.exports = router;

