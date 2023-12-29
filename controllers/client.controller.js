import ClientService from "../services/client.service.js"

const createClient = async(request, response, next) => {
  try {
    let client = request.body
    const areTheFieldsValid = !client.name || !client.cpf || !client.phone || !client.email || !client.address

    if(areTheFieldsValid) {
      throw new Error("O preenchimento dos campos de nome, cpf, telefone, e-mail e endereço é obrigatório.")
    }
    client = await ClientService.createClient(client)
    logger.info(`POST /client - ${JSON.stringify(client)}`);
    response.send(client)
  } catch(error) {
    next(error)
  }
}

const getClients = async(request, response, next) => {
  try {
    response.send(await ClientService.getClients())
    logger.info("GET /client")
  } catch(error) {
    next(error)
  }
}

const getClient = async(request, response, next) => {
  try {
    response.send(await ClientService.getClient(request.params.id));
    logger.info("GET /client/:id");
  } catch(error) {
    next(error)
  }
}

const updateClient = async(request, response, next) => {
  try {
    let client = request.body
    const areTheFieldsValid = !client.clientId || !client.name || !client.cpf || !client.phone || !client.email || !client.address

    if(areTheFieldsValid) {
      throw new Error("O preenchimento dos campos de nome, cpf, telefone, e-mail e endereço é obrigatório.")
    }
    client = await ClientService.updateClient(client)
    logger.info(`POST /client - ${JSON.stringify(client)}`);
    response.send(client)
  } catch(error) {
    next(error)
  }
}

const deleteClient = async(request, response, next) => {
  try {
    await ClientService.deleteClient(request.params.id)
    response.end();
    logger.info(`DELETE /client/:id - ${request.params.id}`);
  } catch(error) {
    next(error)
  }
}

export default {
  createClient,
  getClients,
  getClient,
  updateClient,
  deleteClient
}