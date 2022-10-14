import axios from 'axios';

axios.defaults.baseURL =
  'https://63443216dcae733e8fd9dc15.mockapi.io/contacts/contacts';

export async function getContacts() {
  const { data } = await axios.get('');
  return data;
}

export async function postContact(obj) {
  const { data } = await axios.post('', obj);
  return data;
}

export async function deleteName(id) {
  const { data } = await axios.delete(`/${id}`);
  return data;
}
