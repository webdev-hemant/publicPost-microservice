npx sequelize-cli migration:generate --name add-user-details

npx sequelize-cli db:migrate

-------------------------#api-----------------------------

------------------posts-----------------------------------
get-all-posts => get => http://localhost:5005/api/public-posts
create-posts => post => http://localhost:5005/api/public-posts
get-specific-post => get => http://localhost:5005/api/public-posts/:id
update-specific-post => put => http://localhost:5005/api/public-posts/:id
delete-specific-post => delete => http://localhost:5005/api/public-posts/:id

------------------likes-----------------------------------
get-specific-posts-likes => get => http://localhost:5005/api/likes/post/:post_id
create-like => post => http://localhost:5005/api/likes
delete-specific-like => delete => http://localhost:5005/api/likes/:id

------------------comments--------------------------------
get-specific-posts-comments => get => http://localhost:5005/api/comments/:post_id
create-comment => post => http://localhost:5005/api/comments/:post_id
delete-specific-comment => delete => http://localhost:5005/api/comments/:postId/:commentId
