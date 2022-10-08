import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";




export async function middleware(req){
  //token exist if user
  const token = await getToken({req, secret:process.env.JWT_SECRET});

  const {pathname, origin} = req.nextUrl





//  console.log(pathname, token)


  //Allow the request if the following is true
  // 1. if a req for next-auth session & provider fetching
  //2. the token exists

  if(pathname.includes('/api/auth') || token){
    return NextResponse.next();
  }

  //redirect them to login if they dont hvae token and are requesting a protected route

  if(token === null || pathname !== '/login'){

  //  return NextResponse.redirect(new URL('/login'));
  }
}

// export const config = {
//   matcher: '/login/:path*',
// }
