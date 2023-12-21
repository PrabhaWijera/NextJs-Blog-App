import { connect } from '../../../../utils/db';
import User from '../../../../models/User';
import NextResonse from 'next/response';
import bcrypt from 'bcryptjs';


export const POST = async (request) => {
    const { name, email, password } = await request.json();



    await connect();

    const hashedPassword = await bcrypt.hash(password, 5);

    const newUser = new User(
        {
            name,
            email,
            password: hashedPassword,
        }
    );


    try {
await newUser.save(); 
return new NextResonse("user ok created", {
    status: 201,
});  
    } catch (error) {
        return new NextResonse(error, message, {
            status: 500,
        });
    };
};