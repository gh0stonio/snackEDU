export default defineNuxtRouteMiddleware(async (to, from) => {
  const user = await getCurrentUser();

  // Redirect to homepage if already logged in and landing on login page
  if (user && to.path === '/login') {
    return navigateTo({
      path: '/',
    });
  }

  // Redirect to login page if not logged in
  if (!user && to.path !== '/login') {
    return navigateTo({
      path: '/login',
      query: {
        redirect: to.fullPath,
      },
    });
  }
});
