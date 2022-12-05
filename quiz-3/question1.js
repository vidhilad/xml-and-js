const users = [
    { username: `user1`, email: `user1@email.com` },
    { username: `user2`, email: `user2@email.com` }
  ];
  
  const getUser = (username) =>new Promise((resolve) => {
       // get user data by username from users arrayfor (let user of users) {
         if (username.username === username) {
          resolve(users);
        }
      }
    );
  
  const getUsers = (userNames) => {
     const users = [];
     // get all users for usernames passed as argument
    userNames.forEach(name => getUser(name).then((user) => users.push(user)));
     return users;
  };
  
  (async () => {
     const userNames = [`user1`, `user2`];
     const users = await getUsers(userNames);
    console.log(users);
  })();
3
