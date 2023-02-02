async function conectar() {
    if(global.connection && global.connection.state !== 'disconnected')
    return global.connection
    // testando a conexão

    const mysql = require('mysql2/promise')
    // requisitando o server do mysql

    const connection = await mysql.createConnection('mysql://araujootest:araujootest123@db4free.net:3306/vehicle_fleet')
    // conexão do banco de dados 'mysql://user:senha@db4free.net:porta/nome_do_banco_de_dados'
    console.log('Conectado ao mysql')
    global.connection = connection
    return connection
    // retorna a conexão
}

module.exports = {conectar}
// exportando o module de conexão ao PhpMyAdmin
