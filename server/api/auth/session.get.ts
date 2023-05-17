import { getServerSession } from "#auth";

export default eventHandler(async (event) => {
  const session = await getServerSession(event);
  if (!session) {
    return { status: "unauthinticated" };
  }
  console.log(session?.user, "seesion");
  return session;
});
