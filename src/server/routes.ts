import * as express from 'express';
import DB from './db';
const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});

router.get('/api/employees', async(req,res ) => {
   try { let employees = await DB.Employees.all();
    res.json(employees);
}
    catch(e)
    {
        console.log(e);
        res.sendStatus(500);
    }
}) 

export default router;