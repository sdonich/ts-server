import { Request, Response } from 'express';
import { get, controller, bodyValidator, post } from './decorators';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined }
}

@controller('/auth')
class LoginController {
  @get('/login')
  getLogin(req: Request, res: Response): void {
    res.send(`
      <form method="post">
        <div>
          <labe>Email</label>
          <input name="email" />
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password" />
        </div>
        <button>Submit</button>
      </form>
    `);
  }

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: RequestWithBody, res: Response) {
    const { email, password } = req.body;
  
    if (email && password && email === 'mail' && password === 'pass') {
  
      req.session = { loggedIn: true };
      res.redirect('/');
    } else {
      res.send('invalid email or password');
    }
  };
}