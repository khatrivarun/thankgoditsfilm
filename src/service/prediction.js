export const predict = async (data) => {
  data['release_year'] = `${data['release_year']}`
  const response = await fetch('/predict', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const responseJson = await response.json()
    const message = responseJson.message

    throw new Error(message)
  }

  return await response.json()
}
