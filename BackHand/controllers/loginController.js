const mySQLConnection = require('../connection');
const tabelName = "tbl_usermaster";
var _userModel = require('../dataModels/userModel');
var _loginApiModel = require('../dataModels/apiLoginModel');

/* START*/
/*  This function Get  Data By Id from Tabel -Single Record */
async function handelchkLogin(req, response) {
    try {
        // Geting Data From URL Boady and Asiening in to Local Object
        _userModel.username = req.body.userName;
        _userModel.pwd = req.body.userPassword;
        // Prepare SQL Query 
        var SQLQuery = "select * from " + tabelName + " where username='" + _userModel.username + "' and pwd='" + _userModel.pwd + "'";
        // Log Incoming Request in Log
        console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
        // Making Vareabels for returning API Result
        //set Intesal Value for Api data Model
        _loginApiModel.loginStatus = false;
        _loginApiModel.statusCode = 202;
        _loginApiModel.msg = "1111st Stage - ";
        
        return response.status(_loginApiModel.statusCode).json( _loginApiModel );

        mySQLConnection.query(SQLQuery, (err, rows) => {
           
            if (err) {
                
                _loginApiModel.loginStatus = false;
                _loginApiModel.statusCode = 200;
                _loginApiModel.msg = " 2nd Stage Wrong Login Detail : " + err.message;
                console.log(" 2nd Stage Wrong Login Detail : " + err.message);
                return response.status(_loginApiModel.statusCode).json( _loginApiModel );
            }
            else {
                console.log("in Else Block uper side try block ");
                try {
                    if (rows.length > 0) {
                        console.log("in if row.lenght block  Block uper side try block ");
                        if (rows[0].username == _userModel.username && rows[0].pwd == _userModel.pwd) {
                            _loginApiModel.loginStatus = true;
                            _loginApiModel.statusCode = 200;
                            _loginApiModel.msg = " 3rd Stage Login Sucessfull";
                            console.log(" in rows[0].username==_usermodel.user name block");
                            return response.status(_loginApiModel.statusCode).json( _loginApiModel );
                        }
                        else {
                            _loginApiModel.loginStatus = false;
                            _loginApiModel.statusCode = 200;
                            _loginApiModel.msg = " 4th Stage Wrong Login Detail : ";
                            console.log(" in rows[0].username==_usermodel.user name block");
                            console.log(" else block : "+_loginApiModel);
                            return response.status(_loginApiModel.statusCode).json( _loginApiModel );
                        }
                    }
                    else {
                        _loginApiModel.loginStatus = false;
                        _loginApiModel.statusCode = 200;
                        _loginApiModel.msg = " 5 th Stage Wrong Login Detail : " + err.message;
                        return response.status(_loginApiModel.statusCode).json( _loginApiModel );
                    }
                } catch (err) {
                    _loginApiModel.loginStatus = false;
                    _loginApiModel.statusCode = 200;
                    _loginApiModel.msg = " 6 th Stage Wrong Login Detail : " + err.message;
                    return response.status(_loginApiModel.statusCode).json( _loginApiModel );
                }
            }
        })
    } catch (err) {
        _loginApiModel.loginStatus = false;
        _loginApiModel.statusCode = 200;
        _loginApiModel.msg = " 7 th Stage Wrong Login Detail : " + err.message;
        return response.status(_loginApiModel.statusCode).json( _loginApiModel );
    }
    console.log(_loginApiModel);
    return response.status(_loginApiModel.statusCode).json( _loginApiModel );
    // End mySQLConnection
};


/* END */


module.exports = {
    handelchkLogin,
};