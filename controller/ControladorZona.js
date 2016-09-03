/**
 * Created by retana on 03/09/2016.
 */
module.exports=function (modelo) {
    return{
        getAll:function (req,res) {
            modelo.zona.findAll().then(function (data) {
                res.json(data);
            });
        }
    }
}