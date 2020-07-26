const {Student, Teacher, Subject} = require('../models/')

class Controller {
    static home(req, res){
        res.render('home')
    }

    static showStudent(req, res){
        Student.findAll()
        .then(data=>{
            res.render('students',{data})
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static addStudent(req, res){
        res.render('addStudent')
    }

    static addPostStudent(req, res){
        const newStudent = {
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            email: req.body.email,
            gender : req.body.gender,
            birth_date : req.body.birth_date
        }
        Student.create(newStudent)
        .then(data=>{
            res.redirect('/students')
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static editStudent(req, res){
        Student.findByPk(+req.params.id)
        .then(data=>{
            res.render('editStudent', {data})
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static editPostStudent(req, res){
        const updatedStudent = {
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            email: req.body.email,
            gender : req.body.gender,
            birth_date : req.body.birth_date
        }
        Student.update(updatedStudent,{
            where: {
                id : +req.params.id
            }
        })
        .then(data=>{
            res.redirect('/students')
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static deleteStudent(req, res){
        const updatedStudent = {
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            email: req.body.email,
            gender : req.body.gender,
            birth_date : req.body.birth_date
        }
        Student.destroy({
            where: {
                id : +req.params.id
            }
        })
        .then(data=>{
            res.redirect('/students')
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static showTeachers(req, res){
        Teacher.findAll()
        .then(data=>{
            res.render('teachers',{data})
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static showSubjects(req, res){
        Subject.findAll()
        .then(data=>{
            res.render('subjects',{data})
        })
        .catch(err=>{
            res.send(err)
        })
    }
}

module.exports = Controller