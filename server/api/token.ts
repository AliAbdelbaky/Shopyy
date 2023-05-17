import { getServerSession, getToken } from "#auth";
export default eventHandler(async (event) => {
  const session = await getServerSession(event);
  const token = await getToken({ event });
  console.log(session);
  return { session, token };
});
