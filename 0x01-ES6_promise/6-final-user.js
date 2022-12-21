import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(
  firstName,
  lastName,
  filename,
) {
  const listFilled = [];
  try {
    const user = await signUpUser(firstName, lastName);
    listFilled.push({ status: 'fulfilled', value: user });
    await uploadPhoto(filename);
  } catch (error) {
    listFilled.push({ status: 'rejected', value: error.toString() });
  }
  return listFilled;
}
