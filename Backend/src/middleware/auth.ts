import  {Request,Response,NextFunction} from 'express';
import {verify} from 'jsonwebtoken'
import * as dotenv from 'dotenv';

dotenv.config();
const accessSecret: string = process.env.ACCESS_SECRET || '';


// Authenticator middleware


const authenticator = (req: Request, res: Response, next: NextFunction) => {
    // const accessToken = req.cookies.accessToken;

    
    const accessToken =  req.header('authorization');
    // console.log(`This is my token ${accessToken}`);
    
    
    
    if (!accessToken) {
        return res.status(401).send('Access token not found');
    }
    try {
        const decoded = verify(accessToken.replace('Bearer ', ''), accessSecret);
        

        
        const userdata :any = decoded;

        req.id = userdata.id;

        
        next();
    } catch (error) {
        return res.status(403).send('Invalid token');
    }
};

export {authenticator};