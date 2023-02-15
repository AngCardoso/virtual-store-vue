const sql = require('mssql')

var dbconfig = {
    user: 'myLogIn',
    password: 'Passw0rd',
    server: 'ANGELO\\SQLEXPRESS01',
    database: 'DB_Customer_vs',
    options: {
        trueServerCertificate: true
    }
}

async() =>{
    try{
        await sql.connect(dbconfig);
        const result = await sql.query`SELECT COUNT FROM customers`;
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}




