import { NextResponse } from 'next/server';
import connect from '../../utils/db';
import post from '../../models/Post';

export const GET = async (request,{params}) => {
    //fetch all posts from the database
const {id} = params;
    try {

        await connect();
        
        const post = await post.findById(id);
    
        return new NextResponse(JSON.stringify(post), { status: 200 });

    } catch (error) {
        return new NextResponse("data base eeoor ", { status: 500 });
    }

}
