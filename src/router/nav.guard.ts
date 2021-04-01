import router from "."

// Hardoced authentication validation for demo purposes
const isAuthenticated = true;

router.beforeEach((to, from, next) => {
    if (to.name !== 'Login' && !isAuthenticated) 
        next({ name: 'Login' });
    else 
        next();
});