const express = require('express');
const cors = require('cors');
const v = require('./vehicle');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/vehicle/:id', async function(req, res){
  let id = req.params.id
  const VEHICLE = await v.getByIdVehicle(id)
  res.json(VEHICLE)
})

app.get('/vehicle', async function(req, res){
    const VEHICLE = await v.listVehicles()
    res.json(VEHICLE)
})

app.get('/vehicle/searchBy/:plaque', async function(req, res){
    let plaque = req.params.plaque
    const VEHICLES = await v.getByPlaqueVehicle(plaque)
    res.json(VEHICLES)
})

app.post('/vehicle', async function(req, res){
    const {typeTruck,registrationDate,plaque,color,year,maximumWeight,typeFuel,acquisitionKm,chassis,motor,reindeer,owner,vehicleDocument,vehiclePicture,description,rulesCheck} = req.body

try {
  await v.postVehicle({typeTruck: typeTruck,registrationDate: registrationDate, plaque: plaque,color: color,year: year,maximumWeight: maximumWeight,typeFuel: typeFuel,acquisitionKm: acquisitionKm,chassis: chassis,motor: motor,reindeer: reindeer,owner: owner,vehicleDocument: vehicleDocument,vehiclePicture: vehiclePicture,description: description,rulesCheck: rulesCheck})
  res.status(201).json({ code: 201, message: "Veiculo adicionado com sucesso!"});
} catch (error) {
  res.status(422).json({ code: 422, message: "[ERRO] Erro de conexão. Tente novamente!"})
}
})

app.put('/vehicle/:id', async function(req, res){

    const id = req.params.id
    const {typeTruck,registrationDate,plaque,color,year,maximumWeight,typeFuel,acquisitionKm,chassis,motor,reindeer,owner,vehicleDocument,vehiclePicture,description,rulesCheck} = req.body

 try {
  await v.updateVehicle(id, {typeTruck: typeTruck,registrationDate: registrationDate, plaque: plaque,color: color,year: year,maximumWeight: maximumWeight,typeFuel: typeFuel,acquisitionKm: acquisitionKm,chassis: chassis,motor: motor,reindeer: reindeer,owner: owner,vehicleDocument: vehicleDocument,vehiclePicture: vehiclePicture,description: description,rulesCheck: rulesCheck})
  res.status(201).json({ code: 201, message: "Veiculo alterado com sucesso!"});
} catch (error) {
  res.status(422).json({ code: 422, message: "[ERRO] Erro de conexão. Tente novamente!"})
}
})

app.delete('/vehicle/:id', async function(req, res){

    const id = req.params.id

    try {
      await v.deleteVehicle(id)
      res.status(201).json({ code: 201, message: "Veiculo removido com sucesso!"});
    } catch (error) {
      res.status(422).json({ code: 422, message: "[ERRO] Erro de conexão. Tente novamente!"})
    }
})

app.listen('3000', function(){
    console.log('NODE.JS PORT: 3000')
})
