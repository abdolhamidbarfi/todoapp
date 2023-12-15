// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import cookie from 'cookie'

type Data = {
  name: string
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.setHeader(
    'Set-Cookie',
    cookie.serialize('login_token' , "" , {
      maxAge : 0,
      httpOnly: true,
      path: '/',
      sameSite: 'lax'
    })
  )
  res.status(200).json({ name: 'John Doe' })
}
