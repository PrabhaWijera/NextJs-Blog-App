import { NextResponse } from 'next/server';
import connect from '../../utils/db';
import post from '../../models/Post';

export const GET = async (request) => {
    //fetch all posts from the database

    try {

        await connect();
        
        const posts = await post.find();
    
        return new NextResponse(JSON.stringify(posts), { status: 200 });

    } catch (error) {
        return new NextResponse("data base eeoor ", { status: 500 });
    }

}
