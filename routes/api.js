var queries = require('../lib/queries')
var router = express.Router();


router.get('/all', function(req,res, next)){
  queries.all.then(user){
    res.json(user)
    console.log(user);
  }
})

router.get('/new', function(req,res,next)){
  queries.createUser.then(newUser){
    res.json(newUser)
    console.log(user);
  }
})
