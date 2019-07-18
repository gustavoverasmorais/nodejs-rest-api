db.auth('admin', 'admin')

db = db.getSiblingDB('test')

db.createUser(
  {
      user: "test",
      pwd: "test",
      roles: [
          {
              role: "readWrite",
              db: "test"
          }
      ]
  }
);
exit;