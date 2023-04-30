function formHandler(request, response) {
  const requestBody = request.body;

  console.log(requestBody);

  response.status(200).json({status: 'ok'});
}

export default formHandler;