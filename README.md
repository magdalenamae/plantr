# Plntr
https://plntr.herokuapp.com/

### Plantr is a plants care app providing care guide for you little buddies. This is a single page web application.
Every Plant Persons assistant. A place to track your plants and acess their care needs and details. Originally designed to set reminders for watering and care matinence. This plant app will help you keep your plant buddies happy all year round. 

## Features
- Add plants to your Greenhouse 
- Remove plants from your Greenhouse
- See care details specifc to each plant
- Display current weather location information
- Sign up and login to the Interface
- Easy to Create and Login to the Interface
- Search the database

Show care details:
```

router.get('/', (req,res)=>{
    const sql = "select * from care"
    db.query(sql).then((dbResult) => {
      console.log(dbResult.rows)
       res.json(dbResult.rows)
    })
})

router.get('/:id', (req,res) => {
    const plant_id = req.params.id
    console.log(plant_id,"plant_id")


    const sql = "select p.name , p.description , p.image ,p.id , c.water, c.light, c.humidity, c.soil from  plants p, care c where p.id = c.plant_id and c.care_id in (select plant_id from care where plant_id=$1)";
    db.query(sql, [plant_id]).then((dbResult) => {
        console.log(dbResult)
        res.json(dbResult.rows)
    })
})
```
Add plants to greenhouse:
```
router.post("/", (req, res) => {
  const reqData = req.body;
  const username = reqData["name"];
  const userid = reqData["userid"];
  console.log(reqData, "reqData");
  const plantidsArrayString = reqData["plantid"];
  const plantsidNumArray = plantidsArrayString.map((a) => parseInt(a));

  // const sql ='INSERT into greenhouse(name,plant_id,user_id) values ($1,$2,$3)'
  // db.query(sql,[reqDtata['name'],reqDtata['plantid'],reqDtata['userid']])
  console.log(reqData, "reqData");
  console.log(username, "username");
  console.log(userid, "userid");
  console.log(plantsidNumArray, "plants.id");

  plantsidNumArray.forEach((value) => {
    values.push(dataArray(username, userid, value));
  });
  console.log(values, "ee hai value");

  return db
    .query(format("INSERT INTO greenhouse (name, user_id, plant_id) VALUES %L", values))
    .then((result) => {
      console.log("this ");
      console.log(result);
      res.json({ success: true });
    })
    .catch((err) => {
      res.status(500).json({ success: false, message: "error" });
    });
})
```
Delete plants:
```
router.delete("/:id", (req, res) => {
  const plantId = req.params.id;
  const sql = `DELETE FROM greenhouse WHERE (id) = ($1)`;

  db.query(sql, [plantId]).then((dbRes) => {
    res.json({ success: true });
  });
});

```
________
## Technologies

- Express 
- Weather API
- Postgres
- Knex (promises)
- axios
- geolocation API
- HTML
- CSS
- FIGMA
- GIT (integration and version control)
- JavaScript

_______________
## Design Planning
 
 Used Figma for design, style guids, layouts and color pallets.

 <img width="350" alt="Screen Shot 2022-06-24 at 10 40 25 am" src="https://user-images.githubusercontent.com/55358601/175439737-4240be93-c916-4e53-a701-1c641a3779bb.png">
<img width="350" alt="Screen Shot 2022-06-24 at 10 57 46 am" src="https://user-images.githubusercontent.com/55358601/175439721-b5472e87-8c9b-4d6b-b571-c2c27efdb6d8.png">
<img width="350" alt="Screen Shot 2022-06-24 at 10 57 55 am" src="https://user-images.githubusercontent.com/55358601/175439947-66aaaa88-171e-473b-b38d-a60169a01ad1.png">
<img width="350" alt="Screen Shot 2022-06-24 at 10 57 20 am" src="https://user-images.githubusercontent.com/55358601/175439728-af6d9415-5d58-4328-85c0-0f8988661d55.png">


___________
## DataBase Setup 
``` $ create db plantr 
    $ psql plantr 
    $ psql -d plantr <db/schema.sql
    $ psql -d plantr <db/seed.sql

```

# Instructions for Npm installation
```
    $ npm install 
    $ npm start
    $ npm run start-dev

```
##Installation Steps :
``` 
```

# Goals not reached and Complications :
Unfortunately there were a few goals that were not implemented,
- setting reminders for watering and care scheduals.
- Unable to find a plant api that would intergate with our application as needed.
