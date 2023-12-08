//create function and arrow function 
//for making arrow function callback function we add request and response
const testController = (req,res) => {
    res.status(200).send({
        message:"Welcome user",
        success: true,
    })
}
module.exports = { testController};