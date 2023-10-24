function formHandler(request, response): void {
  response.status(200).json({ status: 'ok' });
}

export default formHandler;
