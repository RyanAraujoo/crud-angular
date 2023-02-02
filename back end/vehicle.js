const bd = require('./bd')

async function listVehicles(){
    const conn = await bd.conectar()
    const [vehicles] =
    await conn.query('SELECT `id`, `typeTruck`, `plaque`, `year`, `typeFuel`, `acquisitionKm`, `reindeer`, `owner` FROM `vehicle` ORDER BY `vehicle`.`id` ASC;')
    return vehicles
}

async function getByPlaqueVehicle(plaque){
    const conn = await bd.conectar()
    const sql = `SELECT id, typeTruck, plaque, year, typeFuel, acquisitionKm, reindeer, owner FROM vehicle WHERE plaque LIKE '${plaque}%';`
    const [vehicles] = await conn.query(sql)
    return vehicles
}

async function getByIdVehicle(id){
    const conn = await bd.conectar()
    const sql = `SELECT * FROM vehicle WHERE id=?;`
    const [vehicle] = await conn.query(sql, [id])
    return vehicle
}
async function postVehicle(vehicle){
    const conn = await bd.conectar()
    const sql =  'INSERT INTO vehicle (typeTruck,registrationDate,plaque,color,year,maximumWeight,typeFuel,acquisitionKm,chassis,motor,reindeer,owner,vehicleDocument,vehiclePicture,description,rulesCheck) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);'
    const values = [vehicle.typeTruck,vehicle.registrationDate,vehicle.plaque,vehicle.color,vehicle.year,vehicle.maximumWeight,vehicle.typeFuel,vehicle.acquisitionKm,vehicle.chassis,vehicle.motor,vehicle.reindeer,vehicle.owner,vehicle.vehicleDocument,vehicle.vehiclePicture,vehicle.description,vehicle.rulesCheck]
    await conn.query(sql,values)
}

async function updateVehicle(id, vehicle){
    const conn = await bd.conectar()
    const sql =  'UPDATE vehicle SET typeTruck=?,plaque=?,color=?,year=?,maximumWeight=?,typeFuel=?,acquisitionKm=?,chassis=?,motor=?,reindeer=?,owner=?,vehicleDocument=?,vehiclePicture=?,description=?,rulesCheck=? WHERE id=?;'
    const values = [vehicle.typeTruck,vehicle.plaque,vehicle.color,vehicle.year,vehicle.maximumWeight,vehicle.typeFuel,vehicle.acquisitionKm,vehicle.chassis,vehicle.motor,vehicle.reindeer,vehicle.owner,vehicle.vehicleDocument,vehicle.vehiclePicture,vehicle.description,vehicle.rulesCheck,[id]]
    await conn.query(sql, values)
}

async function deleteVehicle(id){
    const conn = await bd.conectar()
    const sql = 'DELETE FROM vehicle WHERE id=?;'
    await conn.query(sql,[id])
}

module.exports = {listVehicles, getByPlaqueVehicle, getByIdVehicle, postVehicle, updateVehicle, deleteVehicle}
