/*
===========================Foods API=========================
1.GET All Foods
2.POST New Food
3.GET Food By ID
4.DELETE Food By ID
===========================Foods API=========================
*/

//1. GET all foods 

const getAllFoods = (req, res) => {
    res.status(200).send({ message: "all foods here" })
}

