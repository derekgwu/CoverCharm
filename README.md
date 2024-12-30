# CoverCharm

### Development Goals
- This is a web application with a full-stack experience
    - Front-end: [Next.js](https://angular.dev/)
    - Middle-level: [Django](https://www.djangoproject.com/)
    - Backend: MySQL

## How To Run Frontend Locally
1. Access the frontend directory
```
cd client
```
2. Install Node.js and verify it 
```
npm -v
```
3. Install dependencies 
```
npm install
```
4. Start the frontend
```
cd client
npm run dev
```

## How To Access Backend
Note that only approved users have access to the `.pem` file. For security reasons, the `.pem` file is not on the repository, so you'll have to contact me for the permissions. The Amazon RDS instance is located in a private subnet, and the only device that can access it is the Amazon EC2 instance. Thus, to access the database, you'll need to `ssh` to the EC2 instance from your machine via an `ssh` tunnel.

To open the tunnel:
```bash
ssh -i ./covercharm.pem -L 3307:<rds-endpoint>:3306 ec2-user@<ec2-ipv4-public-addr> -N
```
If the terminal looks like it's hanging, it usually means the tunnel is open. You can confirm by
```bash
netstat -an | find "3307" #windows
```
```bash
netstat -an | find "3307" #linux/macOS
```
If you see a line like:
```bash
TCP    127.0.0.1:3307         0.0.0.0:0              LISTENING
```
The tunnel is open

I used a MySQL workbench extension by VSCode to connect to the database. Whether you do it from the command line or MySQL GUI, the important info is:
- Host: `127.0.0.0.1` (Localhost)
- Port: `3307` 
- Username: `AWS_MASTER_USERNAME` located in the server.config file
- Password: `AWS_MASTER_PASSWORD` located in the server.config file

When developing, be sure to change the `.env` file located in `/backend/server` directory to correct information. 
### Production Link 
Click [here](https://covercharm.vercel.app/) to see what the application looks like on production (recommended)

### Known Bugs
Currently trying to setup a GitHub Actions workflow so pushes from local machine reflex on the Nginx server
